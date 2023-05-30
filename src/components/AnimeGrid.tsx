import { SimpleGrid, Center, Text } from '@chakra-ui/react';
import getAnime from '../hooks/getAnime';
import DisplayCard from './DisplayCard';
import CardPopover from './CardPopover';
import DisplayCardSkeleton from './DisplayCardSkeleton';

interface AnimeGridProps {
  searchQuery: SearchFilters | null;
}

const AnimeGrid = ({ searchQuery }: AnimeGridProps) => {
  const { animeList, error, isLoading } = getAnime(searchQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(animeList);

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
          {animeList.length > 0
            ? animeList.map((anime) => {
                return (
                  <CardPopover key={anime.id} anime={anime}>
                    <div>
                      <DisplayCard anime={anime} />
                    </div>
                  </CardPopover>
                );
              })
            : !isLoading && <Center>Nothing matches your search</Center>}
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
