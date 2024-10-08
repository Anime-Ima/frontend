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
        const formattedShort = format.split('_');
        return (
          formattedShort[0] +
          ' ' +
          formattedShort[1].charAt(0).toUpperCase() +
          formattedShort[1].slice(1).toLowerCase()
        );
      case 'ONE_SHOT':
        const formattedShot = format.split('_');
        return (
          formattedShot[0].charAt(0).toUpperCase() +
          formattedShot[0].slice(1).toLowerCase() +
          ' ' +
          formattedShot[1].charAt(0).toUpperCase() +
          formattedShot[1].slice(1).toLowerCase()
        );
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
            {anime.season && (
              <Heading as='h2' size='md'>
                {anime.season.charAt(0).toUpperCase() +
                  anime.season.slice(1).toLowerCase() +
                  ' ' +
                  anime.seasonYear}
              </Heading>
            )}

            {anime.studios.edges && (
              <Text
                mb={'6px'}
                as='b'
                color={`${anime.coverImage.color || '#3E88D7'}`}
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
                  bg={anime.coverImage.color || '#3E88D7'}
                  mb={'100px'}
                  padding={'5px'}
                  margin={'5px'}
                  key={genre}
                >
                  <Text color='black'>{genre}</Text>
                </Tag>
              ))}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CardPopover;
