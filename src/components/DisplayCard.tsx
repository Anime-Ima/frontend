import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Media } from '../hooks/getAnime';

interface Props {
  anime: Media;
}
const DisplayCard = ({ anime }: Props) => {
  return (
    <Card
      borderRadius='10px'
      overflow='hidden'
      width={'100%'}
      height={{ base: '249px', md: '265px' }}
    >
      <Image
        src={anime.coverImage.large}
        minHeight={'200px'}
        maxHeight={'50%'}
        // maxHeight={{ sm: '120px', md: '200px', lg: '235px' }}
      ></Image>
      <CardBody padding={'6px'}>
        <Text noOfLines={2} fontSize={{ base: 'xs' }}>
          {anime.title.userPreferred}
        </Text>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
