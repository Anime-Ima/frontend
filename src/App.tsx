import { Grid, GridItem, Show } from '@chakra-ui/react';
import AnimeGrid from './components/AnimeGrid';
import NavBar from './components/NavBar';

function App() {
  // const query = `
  // query ($page: Int = 1, $id: Int, $type: MediaType, $isAdult: Boolean = false, $search: String, $format: [MediaFormat], $status: MediaStatus, $countryOfOrigin: CountryCode, $source: MediaSource, $season: MediaSeason, $seasonYear: Int, $year: String, $onList: Boolean, $yearLesser: FuzzyDateInt, $yearGreater: FuzzyDateInt, $episodeLesser: Int, $episodeGreater: Int, $durationLesser: Int, $durationGreater: Int, $chapterLesser: Int, $chapterGreater: Int, $volumeLesser: Int, $volumeGreater: Int, $licensedBy: [Int], $isLicensed: Boolean, $genres: [String], $excludedGenres: [String], $tags: [String], $excludedTags: [String], $minimumTagRank: Int, $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]) {
  //   Page(page: $page, perPage: 20) {
  //     pageInfo {
  //       total
  //       perPage
  //       currentPage
  //       lastPage
  //       hasNextPage
  //     }
  //     media(id: $id, type: $type, season: $season, format_in: $format, status: $status, countryOfOrigin: $countryOfOrigin, source: $source, search: $search, onList: $onList, seasonYear: $seasonYear, startDate_like: $year, startDate_lesser: $yearLesser, startDate_greater: $yearGreater, episodes_lesser: $episodeLesser, episodes_greater: $episodeGreater, duration_lesser: $durationLesser, duration_greater: $durationGreater, chapters_lesser: $chapterLesser, chapters_greater: $chapterGreater, volumes_lesser: $volumeLesser, volumes_greater: $volumeGreater, licensedById_in: $licensedBy, isLicensed: $isLicensed, genre_in: $genres, genre_not_in: $excludedGenres, tag_in: $tags, tag_not_in: $excludedTags, minimumTagRank: $minimumTagRank, sort: $sort, isAdult: $isAdult) {
  //       id
  //       title {
  //         userPreferred
  //       }
  //       coverImage {
  //         extraLarge
  //         large
  //         color
  //       }
  //       startDate {
  //         year
  //         month
  //         day
  //       }
  //       endDate {
  //         year
  //         month
  //         day
  //       }
  //       bannerImage
  //       season
  //       seasonYear
  //       description
  //       type
  //       format
  //       status(version: 2)
  //       episodes
  //       duration
  //       chapters
  //       volumes
  //       genres
  //       isAdult
  //       averageScore
  //       popularity
  //       nextAiringEpisode {
  //         airingAt
  //         timeUntilAiring
  //         episode
  //       }
  //       mediaListEntry {
  //         id
  //         status
  //       }
  //       studios(isMain: true) {
  //         edges {
  //           isMain
  //           node {
  //             id
  //             name
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  // `;

  // // Define our query variables and values that will be used in the query request
  // const variables = {
  //   page: 1,
  //   season: 'SUMMER',
  //   seasonYear: 2023,
  //   type: 'ANIME',
  // };

  // // Define the config we'll need for our Api request
  // const url = 'https://graphql.anilist.co',
  //   options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: query,
  //       variables: variables,
  //     }),
  //   };

  // // Make the HTTP Api request
  // fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

  // function handleResponse(response: any) {
  //   return response.json().then(function (json: object) {
  //     return response.ok ? json : Promise.reject(json);
  //   });
  // }

  // function handleData(data: object) {
  //   console.log(data);
  // }

  // function handleError(error: any) {
  //   alert('Error, check console');
  //   console.error(error);
  // }

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
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
