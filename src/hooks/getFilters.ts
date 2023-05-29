import { useState, useEffect } from 'react';
import apiClient from "../services/api-client";
import { QUERY_GENRE } from "../utils/queries";

export const getFilters = () => {
  const [genres, setGenres] = useState<Data['genres']>([]);
  const [tags, setTags] = useState<TagsEntity[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
    .post<FetchResponse>('/', {
      signal: controller.signal,
      query: QUERY_GENRE,
    })
      .then((res) => {
        setGenres(res.data.data.genres ?? []);
        setTags(res.data.data.tags ?? []);
      })
      .catch((err) => {
      });

    return () => {
      controller.abort();
    };
  }, []);

  return {genres, tags }
};