import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { QUERY_ANIME } from "../utils/queries";

interface FetchResponse {
    data: Data;
}
interface Data {
    Page: Page;
}
interface Page {
    pageInfo: PageInfo;
    media: Media[];
}
interface PageInfo {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
}
export interface Media {
    id: number;
    title: Title;
    coverImage: CoverImage;
    startDate: StartDate;
    endDate: EndDate;
    bannerImage?: string | null;
    season: string;
    seasonYear: number;
    description: string;
    type: string;
    format: string;
    status: string;
    episodes?: number | null;
    duration?: null;
    chapters?: null;
    volumes?: null;
    genres?: string[] | null;
    isAdult: boolean;
    averageScore?: null;
    popularity: number;
    nextAiringEpisode?: NextAiringEpisode | null;
    mediaListEntry?: null;
    studios: Studios;
}
interface Title {
    userPreferred: string;
}
interface CoverImage {
    extraLarge: string;
    large: string;
    color?: string | null;
}
interface StartDate {
    year: number;
    month?: number | null;
    day?: number | null;
}
interface EndDate {
    year?: number | null;
    month?: number | null;
    day?: number | null;
}
interface NextAiringEpisode {
    airingAt: number;
    timeUntilAiring: number;
    episode: number;
}
interface Studios {
    edges?: EdgesEntity[] | null;
}
interface EdgesEntity {
    isMain: boolean;
    node: Node;
}
interface Node {
    id: number;
    name: string;
}
const getAnime = () => {
    const [animeList, setAnimeList] = useState<Media[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState<PageInfo['hasNextPage']>(true);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
  
    // this will set the current page to the next if it has one, then the query will run again
    const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          if (hasNextPage) {
            setCurrentPage((prevPage) => prevPage + 1);
          }
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
  
    return { animeList, error, isLoading };
  };
  
  export default getAnime;