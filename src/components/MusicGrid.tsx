import { SimpleGrid } from "@chakra-ui/react";
import MusicCard from "./MusicCard";
import MusicCardContainer from "./MusicCardContainer";
import { useSelector } from "react-redux";

function MusicGrid() {
  const data = useSelector((state: any) => state.musicData.data);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 1, xl: 1 }}
      spacing={10}
      padding={6}
    >
      {data &&
        data.map((music: any) => (
          <MusicCardContainer key={music.id}>
            <MusicCard music={music} />
          </MusicCardContainer>
        ))}
    </SimpleGrid>
  );
}
export default MusicGrid;
