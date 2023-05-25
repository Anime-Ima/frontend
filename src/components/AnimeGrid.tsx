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
          spacingY={{ base: 5, sm: 8, md: 4 }}
          spacingX={{ base: 3, sm: 5, md: 4 }}
          //   columns={{ base: 2, sm: 3, md: 4 }}
          minChildWidth={'144px'}
          padding={{ base: '50px', lg: '0px 50px, 0px, 0px' }}
          //   padding={{ sm: '40px', md: '50px', lg: '100px' }}
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
