import { SimpleGrid, Center } from '@chakra-ui/react';
import getAnime from '../hooks/getAnime';
import DisplayCard from './DisplayCard';
import CardPopover from './CardPopover';

const AnimeGrid = () => {
  const { animeList, error, isLoading } = getAnime();

  if (isLoading) {
    return <Center>Loading...</Center>;
  }

  if (error) {
    return <Center>Error: {error}</Center>;
  }

  return (
    <>
      <SimpleGrid
        spacingY={{ base: 5, sm: 8, md: 4 }}
        spacingX={{ base: 3, sm: 5, md: 4 }}
        minChildWidth={{
          base: '110px',
          sm: '186px',
        }}
        padding={{ base: '20px' }}
        pr={{ lg: '100px' }}
      >
        {animeList &&
          animeList.map((anime) => {
            return (
              <CardPopover key={+anime.id} anime={anime}>
                <div>
                  <DisplayCard key={+anime.id} anime={anime} />
                </div>
              </CardPopover>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
