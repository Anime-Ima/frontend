import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { QUERY_ANIME } from "../utils/queries";

const getAnime = (searchQuery: SearchFilters | null = null) => {
  const [animeList, setAnimeList] = useState<Media[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState<PageInfo["hasNextPage"]>(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let scrollTimeout: ReturnType<typeof setTimeout>;

  // Navigate to the next page if it exists, and subsequently execute the query again once scrolled to the bottom of available data.
  const handleScroll = () => {
    const isScrolledToBottom =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100;

    if (isScrolledToBottom && hasNextPage) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
      }, 200);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    // if (searchQuery) {
    //   // Clear animeList state when searchQuery has data
    //   setAnimeList([]);
    //   setCurrentPage(1);
    // }

    apiClient
      .post<FetchResponse>("/", {
        signal: controller.signal,
        query: QUERY_ANIME,
        variables: {
          page: currentPage,
          type: "ANIME",
          sort: [
            "TRENDING_DESC",
            "POPULARITY_DESC"
          ],
          ...(searchQuery?.genres !== null && { ...searchQuery }),
        },
      })
      .then((res) => {
        if (animeList.length === 0) {
          setAnimeList(res.data.data.Page.media);
        }
        //  else if (searchQuery) {
        //   setAnimeList([])
        //   setAnimeList(res.data.data.Page.media);
        // } 
        else {
          setAnimeList((prevAnimeList) => [
            ...prevAnimeList,
            ...res.data.data.Page.media,
          ]);
        }
        // setAnimeList(res.data.data.Page.media);
        setHasNextPage(res.data.data.Page.pageInfo.hasNextPage);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [currentPage, searchQuery]);

  return { animeList, error, isLoading };
};

export default getAnime;
