import {
  MoviesQuery,
  useGetConfigurationQuery,
  useGetPopularMoviesQuery,
} from "../../services/tmdb";
import { useState } from "react";
import MoviesHeroSlider from "./MoviesHeroSlider";
import { Movie } from "../Home/Home";

/*interface MoviesProps {
    movies: Movie[]
}*/

const initialQuery = {
  page: 1,
  filters: {},
};
const Movies = () => {
  const [query, setQuery] = useState<MoviesQuery>(initialQuery);

  const { data: configuration } = useGetConfigurationQuery();
  const { data, isFetching } = useGetPopularMoviesQuery();

  const movies = data?.results;

  console.log(movies);

  return (
    <div>
      <MoviesHeroSlider movies={movies as Movie[]} />
      {/* <h1>Movies</h1>
      {isFetching && <div>Loading...</div>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <img
            src={formatImageUrl(
              movie.poster_path,
              configuration as Configuration,
              "w342",
            )}
            alt={movie.title}
          />
          <div>{movie.title}</div>
          <div>{movie.overview}</div>
          <div>{movie.popularity}</div>
        </div>
      ))}*/}
    </div>
  );
};

export default Movies;
