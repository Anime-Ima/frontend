import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
  Tag,
  Heading,
} from '@chakra-ui/react';
import { Media } from '../hooks/getAnime';

interface Props {
  children: React.ReactNode;
  anime: Media;
}

const CardPopover = ({ children, anime }: Props) => {
  // format types
  // TV, TV_SHORT, MOVIE, SPECIAL, OVA, ONA, MUSIC, MANGA, NOVEL, ONE_SHOT
  const Format = (format: string) => {
    switch (format) {
      case 'ONA':
      case 'OVA':
        return format;
      case 'TV_SHORT':
        const formatted = format.split('_');
        return (
          formatted[0] +
          ' ' +
          formatted[1].charAt(0).toUpperCase() +
          formatted[1].slice(1).toLowerCase()
        );
      case 'ONE_SHOT':
        return 'One Shot';
      case 'TV':
        return format + ' Show';
      default:
        return format.charAt(0).toUpperCase() + format.slice(1).toLowerCase();
    }
  };

  return (
    <div>
      <Popover
        closeDelay={0}
        isLazy={true}
        trigger='hover'
        gutter={20}
        placement={'right'}
      >
        <PopoverTrigger>{children}</PopoverTrigger>

        <PopoverContent>
          <PopoverArrow />

          <PopoverBody>
            <Heading as='h2' size='md'>
              {anime.season.charAt(0).toUpperCase() +
                anime.season.slice(1).toLowerCase() +
                ' ' +
                anime.seasonYear}
            </Heading>
            {anime.studios.edges && (
              <Text
                mb={'6px'}
                as='b'
                color={`${anime.coverImage.color}`}
                fontSize='sm'
              >
                {anime.studios.edges?.map((edge) => {
                  return `${edge.node.name}`;
                })}
              </Text>
            )}

            {anime.format && (
              <Text mb={'10px'} fontSize='sm'>
                {Format(anime.format)}
              </Text>
            )}

            {anime.description && (
              <Text
                noOfLines={15}
                fontSize='sm'
                mb={'10px'}
                dangerouslySetInnerHTML={{ __html: anime.description }}
              />
            )}

            {anime.genres &&
              anime.genres?.map((genre) => (
                <Tag
                  textTransform={'lowercase'}
                  bg={`${anime.coverImage.color}`}
                  mb={'100px'}
                  padding={'5px'}
                  margin={'5px'}
                  key={genre}
                >
                  <Text color={'white'}>{genre}</Text>
                </Tag>
              ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CardPopover;
