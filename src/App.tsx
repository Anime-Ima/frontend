import { Grid, GridItem, Show } from '@chakra-ui/react';
import AnimeGrid from './components/AnimeGrid';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav nav" "aside main main" "footer footer footer"`,
        }}
        gridTemplateColumns={{
          base: '1fr',
          lg: '1fr 5fr', // Adjust the values here to control the width of the aside and main sections
        }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area={'aside'}>
            <SearchForm />
          </GridItem>
        </Show>
        <GridItem area={'main'}>{/* <AnimeGrid /> */}</GridItem>
        <GridItem height={'300px'} area={'footer'}></GridItem>
      </Grid>
    </div>
  );
}

export default App;
