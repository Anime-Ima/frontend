import { Grid, GridItem, Show } from '@chakra-ui/react';
import AnimeGrid from './components/AnimeGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav nav" "aside main main"`,
        }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'}>Aside</GridItem>
        </Show>
        <GridItem area={'main'}>
          <AnimeGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
