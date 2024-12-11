import { Grid, GridItem, Show, Flex, Box } from '@chakra-ui/react'; // Flex and Box for layout
import { useState } from 'react';
import AnimeGrid from './components/AnimeGrid';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

function App() {
  const [selectedFilters, setSelectedFilter] = useState<SearchFilters | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,   // Stacked layout for small screens
          lg: `"nav" "search" "main" "footer"`,  // Layout for large screens (search across top)
        }}
        gridTemplateColumns={{
          base: '1fr',  // Full width for small screens
          lg: '1fr',    // Full width for large screens as well (search form and main grid stacked)
        }}
      >
        {/* Navbar */}
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>

        {/* Search Form - Placed across the top on large screens */}
        <Show above="lg">
          <GridItem area={'search'}>
            <Box padding="10px">
              <Flex wrap="wrap" gap={4} justify="space-between">
                <Box flex="1" minWidth="150px">
                  <SearchForm
                    onSelectFilter={(selectedFilters) => setSelectedFilter(selectedFilters)}
                  />
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Show>

        {/* Main Grid with Anime Results */}
        <GridItem area={'main'}>
          <AnimeGrid searchQuery={selectedFilters} />
        </GridItem>

        {/* Footer */}
        <GridItem height={'300px'} area={'footer'}></GridItem>
      </Grid>
    </div>
  );
}

export default App;

