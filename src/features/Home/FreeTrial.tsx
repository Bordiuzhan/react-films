import styles from "./FreeTrial.module.scss";
import { Movie } from "./Home";
import { useGetConfigurationQuery } from "../../services/tmdb";

interface FreeTrialProps {
  movies: Movie[] | undefined;
  isFetching: boolean;
}

const FreeTrial = ({ movies, isFetching }: FreeTrialProps) => {
  const { data: configuration } = useGetConfigurationQuery();

  function formatImageUrl(imagePath?: string | null): string | undefined {
    return imagePath && configuration
      ? `${configuration.images.base_url}w92${imagePath}`
      : undefined;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.images}>
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
        <div className={styles.content}>
          <div className={styles.text}>
            <h2>Start your free trial today!</h2>
            <p>
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <button className={styles.freeTrialButton}>Start a Free Trial</button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
