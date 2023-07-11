import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState, useCallback } from "react";
import apiClient from "../services/api-client";
import { QUERY_ANIME } from "../utils/queries";

const getAnime = (searchQuery: SearchFilters | null = null) => {
  const [animeList, setAnimeList] = useState<Media[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState<PageInfo["hasNextPage"]>(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [prevSearchQuery, setPrevSearchQuery] = useState<SearchFilters | null>(null);
  
  let scrollTimeout: ReturnType<typeof setTimeout>;

  // Navigate to the next page if it exists, and subsequently execute the query again once scrolled to the bottom of available data.
  const handleScroll = useCallback(() => {
    const isScrolledToBottom =
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100;
  
    if (isScrolledToBottom && hasNextPage) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setCurrentPage((prevPage) => prevPage + 1);
      }, 200);
    }
  }, [hasNextPage]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    if (searchQuery && searchQuery !== prevSearchQuery) {
      setCurrentPage(1); // Set current page to 1 for new search query
      setAnimeList([]); // Clear anime list for new search query
      setPrevSearchQuery(searchQuery); // Update previous search query
      window.scrollTo(0, 0); // Scroll to top of the component
    }

    console.log(searchQuery)

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
          ...(searchQuery !== null && { ...searchQuery }),
        },
      })
      .then((res) => {

        if (animeList.length === 0) {
          setAnimeList(res.data.data.Page.media);
        } 
        else {
          setAnimeList((prevAnimeList) => [
            ...prevAnimeList,
            ...res.data.data.Page.media,
          ]);
        }
        setHasNextPage((prevHasNextPage) => res.data.data.Page.pageInfo.hasNextPage);
        setIsLoading(false);
        console.log("Has next page:", res.data.data.Page.pageInfo.hasNextPage);

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
