import { Image, Box, Text } from '@chakra-ui/react';
import getAnime from '../hooks/getAnime';

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
        <>
          {resData.media.map((anime) => (
            <Box padding='20px' key={anime.id}>
              <Image src={anime.coverImage.large} boxSize='300px' />
              <h1>{anime.title.userPreferred}</h1>
            </Box>
          ))}
        </>
      )}
    </>
  );
};

export default AnimeGrid;
