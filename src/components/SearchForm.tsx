import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Text,
} from '@chakra-ui/react';
import { getFilters } from '../hooks/getFilters';

interface Props {
  onSelectFilter: (filter: SearchFilters | null) => void;
}

const SearchForm = ({ onSelectFilter }: Props) => {
  const { genres, tags } = getFilters();

  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    genres: null,
    seasonYear: null,
    season: null,
    format: null,
  });

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Filter out properties with null values
    const filteredFilters: Partial<SearchFilters> = {
      ...(searchFilters.genres !== null && { genres: searchFilters.genres }),
      ...(searchFilters.seasonYear !== null && {
        seasonYear: searchFilters.seasonYear,
      }),
      ...(searchFilters.season !== null && { season: searchFilters.season }),
      ...(searchFilters.format !== null && { format: searchFilters.format }),
    };

    // Pass the filtered object to onSelectFilter
    onSelectFilter(
      Object.keys(filteredFilters).length > 0
        ? (filteredFilters as SearchFilters)
        : null
    );
  }, [searchFilters]);

  const handleOptionChange = (
    e: ChangeEvent<HTMLSelectElement>,
    field: keyof SearchFilters
  ) => {
    const value = e.target.value || null;
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const handleScroll = () => {
    const topOffset = 100; // Adjust this value based on requirements
    const isTop = window.scrollY < topOffset;
    setIsSticky(!isTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentYear = new Date().getFullYear();
  const startYear = 1940;
  const endYear = currentYear + 1;

  const yearOptions = [];
  for (let year = endYear; year >= startYear; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}
      </option>
    );
  }

  return (
    <Stack
      spacing={4}
      maxWidth='500px'
      mx='auto'
      position={isSticky ? 'sticky' : 'static'}
      top={isSticky ? '0' : ''}
      zIndex={isSticky ? '999' : 'auto'}
      boxShadow={isSticky ? 'md' : 'none'}
      pt={isSticky ? '4' : '0'}
      pb={isSticky ? '2' : '0'}
      padding={'20px'}
    >
      {/* <FormControl>
        <FormLabel htmlFor='searchInput'>Search Term:</FormLabel>
        <Input
          type='text'
          id='searchInput'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FormControl> */}
      <FormControl>
        <FormLabel htmlFor='genreSelect'>Genres</FormLabel>
        <Select
          id='genreSelect'
          placeholder='any'
          value={searchFilters.genres ?? ''}
          onChange={(e) => handleOptionChange(e, 'genres')}
        >
          {genres?.map((genre) => {
            if (genre === 'Hentai') {
              return null; // Skip mapping the "Hentai" genre
            }

            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
          {/* {tags?.map((tag) => (
            <option key={tag.name} value={tag.name}>
              {tag.name}
            </option>
          ))} */}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='yearSelect'>Year</FormLabel>
        <Select
          id='yearSelect'
          placeholder='any'
          value={searchFilters.seasonYear ?? ''}
          onChange={(e) => handleOptionChange(e, 'seasonYear')}
        >
          {yearOptions}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='seasonSelect'>Season</FormLabel>
        <Select
          id='seasonSelect'
          placeholder='any'
          value={searchFilters.season ?? ''}
          onChange={(e) => handleOptionChange(e, 'season')}
        >
          <option value='WINTER'>Winter</option>
          <option value='SPRING'>Spring</option>
          <option value='SUMMER'>Summer</option>
          <option value='FALL'>Fall</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='formatSelect'>Format</FormLabel>
        <Select
          id='formatSelect'
          placeholder='any'
          value={searchFilters.format ?? ''}
          onChange={(e) => handleOptionChange(e, 'format')}
        >
          <option value='TV'>TV Show</option>
          <option value='MOVIE'>Movie</option>
          <option value='TV_SHORT'>TV Short</option>
          <option value='SPECIAL'>Special</option>
          <option value='OVA'>OVA</option>
          <option value='ONA'>ONA</option>
        </Select>
      </FormControl>
      {/* <FormControl>
        <FormLabel htmlFor='airingStatusSelect'>Airing Status</FormLabel>
        <Select
          id='airingStatusSelect'
          placeholder='any'
          value={selectedAiringStatus}
          onChange={(e) => setSelectedAiringStatus(e.target.value)}
        >
          <option value='CURRENT'>Currently Airing</option>
          <option value='FINISHED'>Finished Airing</option>
          <option value='NOT_YET_RELEASED'>Not Yet Aired</option>
          <option value='CANCELLED'>Cancelled</option>
        </Select>
      </FormControl> */}
      {/* <FormControl>
        <FormLabel htmlFor='streamingOnSelect'>Streaming On</FormLabel>
        <Select
          id='streamingOnSelect'
          value={selectedStreamingOn}
          onChange={(e) => setSelectedStreamingOn(e.target.value)}
        >
          <option value=''>All Streaming Platforms</option>
          <option value='Netflix'>Netflix</option>
          <option value='Hulu'>Hulu</option>
          <option value='Crunchyroll'>Crunchyroll</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor='sourceMaterialSelect'>Source Material</FormLabel>
        <Select
          id='sourceMaterialSelect'
          value={selectedSourceMaterial}
          onChange={(e) => setSelectedSourceMaterial(e.target.value)}
        >
          <option value=''>All Source Materials</option>
          <option value='MANGA'>Manga</option>
          <option value='LIGHT_NOVEL'>Light Novel</option>
          <option value='ORIGINAL'>Original</option>
        </Select>
      </FormControl> */}
      {/* <Button onClick={handleSearch}>Search</Button> */}
    </Stack>
  );
};

export default SearchForm;
