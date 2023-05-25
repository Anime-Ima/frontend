import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Media } from '../hooks/getAnime';

interface Props {
  anime: Media;
}

const DisplayCard = ({ anime }: Props) => {
  return (
    <Card borderRadius='10px' overflow='hidden'>
      <Image src={anime.coverImage.large}></Image>
      <CardBody>
        <Text fontSize='md'>{anime.title.userPreferred}</Text>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
