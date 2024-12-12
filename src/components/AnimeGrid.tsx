import { SimpleGrid, Container, Text } from '@chakra-ui/react';
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

  return (
    <>
      {error && <Container centerContent>Error: {error}</Container>}
      <Container centerContent maxWidth="1480px" width="100%" padding="20px">
        <SimpleGrid
          width={'100%'}
          spacingY={{ base: 5, sm: 8, md: 4 }}
          spacingX={{ base: 3, sm: 5, md: 4 }}
          minChildWidth={{
            base: '110px',
            sm: '186px',
          }}
        >
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
            : !isLoading && <Text>Nothing matches your search!</Text>}
          {isLoading &&
            skeletons.map((skeleton) => {
              return <DisplayCardSkeleton key={skeleton} />;
            })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default AnimeGrid;

