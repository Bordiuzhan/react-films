import styles from "./MoviesHeroSlider.module.scss";
import { Movie } from "../Home/Home";
import { useRef } from "react";
import { Configuration, formatImageUrl } from "../../utils/formatImageUrl";
import { Carousel, SlideHandle } from "nuka-carousel";
import { useGetConfigurationQuery } from "../../services/tmdb";

interface MoviesHeroSliderProps {
  movies: Movie[];
}

const MoviesHeroSlider = ({ movies }: MoviesHeroSliderProps) => {
  const { data: configuration } = useGetConfigurationQuery();

  const ref = useRef<SlideHandle>(null);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Carousel
          ref={ref}
          className={styles.carousel}
          children={
            movies &&
            movies.map((movie) => (
              <div key={movie.id}>
                <img
                  src={formatImageUrl(
                    movie.backdrop_path,
                    configuration as Configuration,
                    "w1280",
                  )}
                  alt={movie.title}
                />
                <div>{movie.title}</div>
                <div>{movie.overview}</div>
                <div>{movie.popularity}</div>
              </div>
            ))
          }
        />
      </div>
    </div>
  );
};

export default MoviesHeroSlider;
