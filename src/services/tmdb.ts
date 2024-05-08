import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import configuration from "../configuration";

/*
backdrop_sizes
:
(4) ['w300', 'w780', 'w1280', 'original']
base_url
:
"http://image.tmdb.org/t/p/"
logo_sizes
:
(7) ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original']
poster_sizes
:
(7) ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
profile_sizes
:
(4) ['w45', 'w185', 'h632', 'original']
secure_base_url
:
"https://image.tmdb.org/t/p/"
still_sizes
:
(4) ['w92', 'w185', 'w300', 'original']*/

export interface PageResponse<TResult> {
  page: number;
  results: TResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  id: number;
  genre_ids: number[];
  title: string;
  overview: string;
  popularity: number;
  backdrop_path?: string | null;
  poster_path?: string | null;
}

export interface MoviesFilters {
  keywords?: number[];
  genres?: number[];
}

export interface MoviesQuery {
  page: number;
  filters: MoviesFilters;
}

export interface Genre {
  id: number;
  name: string;
}

type LogoSize = "w45" | "w92" | "w154" | "w185" | "w300" | "w500" | "original";
type PosterSize =
  | "w92"
  | "w154"
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "original";
type ProfileSize = "w45" | "w185" | "h632" | "original";
type StillSize = "w92" | "w185" | "w300" | "original";
type BackdropSize = "w300" | "w780" | "w1280" | "original";

export interface Configuration {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: BackdropSize[];
    logo_sizes: LogoSize[];
    poster_sizes: PosterSize[];
    profile_sizes: ProfileSize[];
    still_sizes: StillSize[];
  };
}

export interface KeywordItem {
  id: number;
  name: string;
}

export interface MoviesState {
  results: MovieDetails[];
  lastPage: number;
  hasMorePages: boolean;
}

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${configuration.apiUrl}/3`,
    prepareHeaders(headers) {
      headers.set("Accept", "application/json");
      headers.set("Authorization", `Bearer ${configuration.apiToken}`);
    },
  }),
  endpoints: (builder) => ({
    getConfiguration: builder.query<Configuration, void>({
      query: () => "/configuration",
    }),
    getMovies: builder.query<MoviesState, MoviesQuery>({
      query(moviesQuery) {
        const params = new URLSearchParams({
          page: moviesQuery.page.toString(),
        });

        if (moviesQuery.filters.keywords?.length) {
          params.append(
            "with_keywords",
            moviesQuery.filters.keywords.join("|"),
          );
        }

        if (moviesQuery.filters.genres?.length) {
          params.append("with_genres", moviesQuery.filters.genres.join(","));
        }

        const query = params.toString();
        return `/discover/movie?${query}`;
      },
      transformResponse(response: PageResponse<MovieDetails>, _, arg) {
        return {
          results: response.results,
          lastPage: arg.page,
          hasMorePages: arg.page < response.total_pages,
        };
      },
      serializeQueryArgs({ endpointName }) {
        return endpointName;
      },
      merge(currentCacheData, responseData) {
        if (responseData.lastPage === 1) {
          currentCacheData.results = responseData.results;
        } else {
          currentCacheData.results.push(...responseData.results);
        }

        currentCacheData.hasMorePages = responseData.hasMorePages;
        currentCacheData.lastPage = responseData.lastPage;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getByGenre: builder.query<MoviesState, number>({
      query: (genreId: number) => `/discover/movie?with_genres=${genreId}`,
      transformResponse: (response: PageResponse<MovieDetails>) => ({
        results: response.results,
        lastPage: 1,
        hasMorePages: false,
      }),
    }),
    getKeywords: builder.query<KeywordItem[], string>({
      query: (query) => `/search/keyword?query=${query}`,
      transformResponse: (response: PageResponse<KeywordItem>) =>
        response.results,
    }),
    getGenres: builder.query<Genre[], void>({
      query: () => "/genre/movie/list",
      transformResponse: (response: { genres: Genre[] }) => response.genres,
    }),
    getPopularMovies: builder.query<MoviesState, void>({
      query: () => "/movie/popular",
      transformResponse: (response: PageResponse<MovieDetails>) => ({
        results: response.results,
        lastPage: 1,
        hasMorePages: false,
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetConfigurationQuery,
  useGetKeywordsQuery,
  useGetGenresQuery,
  useGetByGenreQuery,
  useGetPopularMoviesQuery,
} = tmdbApi;
