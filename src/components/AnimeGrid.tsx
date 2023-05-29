import { SimpleGrid, Center } from '@chakra-ui/react';
import getAnime from '../hooks/getAnime';
import DisplayCard from './DisplayCard';
import CardPopover from './CardPopover';
import DisplayCardSkeleton from './DisplayCardSkeleton';

// interface AnimeGridProps {}

const AnimeGrid = () => {
  const { animeList, error, isLoading } = getAnime();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Center>Error: {error}</Center>}
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
        <>
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
          {isLoading &&
            skeletons.map((skeleton) => {
              return <DisplayCardSkeleton key={skeleton} />;
            })}
        </>
      </SimpleGrid>
    </>
  );
};

export default AnimeGrid;
