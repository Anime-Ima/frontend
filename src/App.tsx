import { Grid, GridItem, Show } from '@chakra-ui/react';
import AnimeGrid from './components/AnimeGrid';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav nav" "aside main main" "footer footer footer"`,
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
        <GridItem height={'300px'} area={'footer'}></GridItem>
      </Grid>
    </div>
  );
}

export default App;
