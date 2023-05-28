import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { QUERY_ANIME } from "../utils/queries";

const getAnime = () => {
    const [animeList, setAnimeList] = useState<Media[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState<PageInfo['hasNextPage']>(true);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    let scrollTimeout: ReturnType<typeof setTimeout>;
    
    // Navigate to the next page if it exists, and subsequently execute the query again once scrolled to the bottom of avaibale data.
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
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
      
        apiClient
          .post<FetchResponse>('/', {
            signal: controller.signal,
            query: QUERY_ANIME,
            variables: {
              page: currentPage,
              season: 'SUMMER',
              seasonYear: 2023,
              type: 'ANIME',
            },
          })
          .then((res) => {
      
            if (animeList.length === 0) {
              setAnimeList(res.data.data.Page.media);
            } else {
              setAnimeList((prevAnimeList) => [...prevAnimeList, ...res.data.data.Page.media]);
            }
      
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
      }, [currentPage]);

      useEffect(() => {
        console.log(isLoading); // Log the updated value of isLoading
      }, [isLoading]);
  
    return { animeList, error, isLoading };
  };
  
  export default getAnime;