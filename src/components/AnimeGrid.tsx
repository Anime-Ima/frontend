import { Image, Box, Text, SimpleGrid } from '@chakra-ui/react';
import getAnime from '../hooks/getAnime';
import DisplayCard from './DisplayCard';

const AnimeGrid = () => {
  const { resData, error, isLoading } = getAnime();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {resData && resData && resData.media && (
        <SimpleGrid
          columns={{ sm: 2, md: 4, lg: 5 }}
          spacing={{ sm: 2, md: 5, lg: 10 }}
          padding={{ sm: '10px', md: '50px', lg: '100px' }}
        >
          {resData.media.map((anime) => (
            <DisplayCard key={anime.id} anime={anime} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default AnimeGrid;
