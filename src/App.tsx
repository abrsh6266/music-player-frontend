import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { useEffect } from "react";
import MusicHeading from "./components/MusicHeading";
import MusicGrid from "./components/MusicGrid";
import {useDispatch} from 'react-redux'
import { fetchGenres, fetchMusicByGenre, musicList } from "./redux/action";
export interface GameQuery {
  sortOrder: string;
  searchText: string;
}

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(musicList())
    dispatch(fetchGenres());
  },[])
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => dispatch(fetchMusicByGenre(genre))}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <MusicHeading />
        </Box>
        <MusicGrid/>
      </GridItem>
    </Grid>
  );
}
export default App;
