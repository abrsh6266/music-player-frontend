import { Box, Flex, Heading, Text } from 'rebass';
import { useColorMode } from '@chakra-ui/react';
import ActionIcon from './ActionIcon';

export interface Music {
  releaseDate: string;
  title: string;
  genre: string;
  id: number;
  artist: string;
}

interface Props {
  music: Music;
}

const GameCard = ({ music }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      css={{
        ':hover': {
          backgroundColor: colorMode === 'dark' ? '#6b6b8c' : '#a4d8f9',
        },
        transition: 'background-color 0.3s',
        justifyContent: 'space-between',
        backgroundColor: colorMode === 'dark' ? '#8e8eac' : '#c2ebfe',
        padding: 4,
        borderRadius: 'md',
      }}
    >
      <Flex flex="1" alignItems="center">
        <Heading fontSize="2xl">{music.title}</Heading>
      </Flex>
      <Flex flex="1" justifyContent="flex-end" alignItems="center">
        <Text fontSize="sm" marginRight={4}>
          {music.releaseDate}
        </Text>
        <Text fontSize="sm" marginRight={4}>
          {music.genre}
        </Text>
        <Text fontSize="sm">{music.artist}</Text>
      </Flex>
      <Box marginLeft={2}>
        <ActionIcon music={music} />
      </Box>
    </Flex>
  );
};

export default GameCard;
