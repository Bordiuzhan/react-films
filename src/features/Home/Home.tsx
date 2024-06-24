import styles from "./Home.module.scss";
import { useEffect, useState } from "react";
import {
  MoviesQuery,
  useGetConfigurationQuery,
  useGetMoviesQuery,
} from "../../services/tmdb";
import HeroText from "./HeroText";
import Categories from "./Categories";
import Devices from "./Devices";
import FAQ from "./FAQ";
import Plans from "./Plans";
import FreeTrial from "./FreeTrial";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const initialQuery = {
  page: 1,
  filters: {},
};

const Home = () => {
  const [query, setQuery] = useState<MoviesQuery>(initialQuery);
  const { data: configuration } = useGetConfigurationQuery();
  const { data, isFetching } = useGetMoviesQuery(query);
  const movies = data?.results;
  const hasMorePages = data?.hasMorePages;

  function formatImageUrl(imagePath?: string | null): string | undefined {
    return imagePath && configuration
      ? `${configuration.images.base_url}w185${imagePath}`
      : undefined;
  }

  console.log(movies);

  useEffect(() => {
    if (movies && movies.length < 40 && hasMorePages) {
      setQuery((q) => ({ ...q, page: q.page + 1 }));
    }
  }, [movies, hasMorePages]);

  return (
    <>
      <div className={styles.hero}>
        {movies &&
          movies.map((m) => (
            <img
              key={m.id}
              src={formatImageUrl(m.poster_path)}
              className={styles.img}
              alt="Imagen"
            />
          ))}
        <div className={styles.gradient}></div>
      </div>
      <HeroText />
      <Categories />
      <Devices />
      <FAQ />
      <Plans />
      <FreeTrial movies={movies as Movie[]} isFetching={isFetching} />
    </>
  );
};

export default Home;
