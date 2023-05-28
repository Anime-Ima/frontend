import { Card, CardBody, Image, Text, Center, Box } from '@chakra-ui/react';

interface Props {
  anime: Media;
}
const DisplayCard = ({ anime }: Props) => {
  return (
    <Card
      borderRadius='10px'
      overflow='hidden'
      height={{ base: '249px', md: '315px' }}
    >
      {anime.coverImage.large ? (
        <Image
          src={anime.coverImage.large}
          minHeight={'200px'}
          height={'80%'}
        ></Image>
      ) : (
        <Center
          minHeight={'200px'}
          height={'80%'}
          bg={`${anime.coverImage.color}`}
        >
          Image not available.
        </Center>
      )}

      <CardBody padding={'6px'}>
        {anime.title.userPreferred ? (
          <Text noOfLines={2} fontSize={{ base: 'xs', md: 'md' }}>
            {anime.title.userPreferred}
          </Text>
        ) : (
          <Box>Missing title.</Box>
        )}
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
