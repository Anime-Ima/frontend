import { Card, CardBody, Image, Text } from '@chakra-ui/react';
import { Media } from '../hooks/getAnime';

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
      <Image
        src={anime.coverImage.large}
        minHeight={'200px'}
        maxHeight={'80%'}
      ></Image>
      <CardBody padding={'6px'}>
        <Text noOfLines={2} fontSize={{ base: 'xs', md: 'md' }}>
          {anime.title.userPreferred}
        </Text>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
