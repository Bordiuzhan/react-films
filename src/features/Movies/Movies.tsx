import MovieCard from "./MovieCard";
import styles from "./Movies.module.scss"
import {MoviesQuery, useGetConfigurationQuery, useGetMoviesQuery} from "../../services/tmdb";
import {useState} from "react";

/*interface MoviesProps {
    movies: Movie[]
}*/

const initialQuery = {
    page: 1,
    filters: {},
};
const Movies = () => {
    const [query, setQuery] = useState<MoviesQuery>(initialQuery);

    const {data: configuration} = useGetConfigurationQuery();
    const {data, isFetching} = useGetMoviesQuery(query);
    const movies = data?.results;

    return (
        <section>
            <div className={styles.list}>
                {movies && movies.map(({id, title, overview, popularity}) => <MovieCard key={id} id={id} title={title}
                                                                                        overview={overview}
                                                                                        popularity={popularity}/>)}
            </div>
        </section>
    );
};


export default Movies;