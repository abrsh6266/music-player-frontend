import { Box, Heading, Button } from 'rebass';
import { useSelector } from 'react-redux';
import { useColorMode } from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: string) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const data = useSelector((state: any) => state.musicData.genres);
  const { colorMode } = useColorMode();
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <Box as="ul" p={0} m={0}>
        {data &&
          data.map((genre: any) => (
            <Box key={genre} >
              <Button
                sx={{
                  color:colorMode === "light" ? 'black' : 'white',
                  whiteSpace: 'normal',
                  textAlign: 'left',
                  fontSize: 'lg',
                  variant: 'styles.link',
                }}
                onClick={() => onSelectGenre(genre)}
              >
                {genre}
              </Button>
            </Box>
          ))}
      </Box>
    </>
  );
};

export default GenreList;