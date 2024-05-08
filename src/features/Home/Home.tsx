import styles from "./Home.module.scss"
import {useEffect, useState} from "react";
import {MoviesQuery, useGetConfigurationQuery, useGetMoviesQuery} from "../../services/tmdb";
import HeroText from "./HeroText";
import Categories from "./Categories";


const initialQuery = {
    page: 1,
    filters: {},
};


const Home = () => {
    const [query, setQuery] = useState<MoviesQuery>(initialQuery);
    const {data: configuration} = useGetConfigurationQuery();
    const {data, isFetching,} = useGetMoviesQuery(query);
    const movies = data?.results;
    const hasMorePages = data?.hasMorePages;

    function formatImageUrl(imagePath?: string | null): string | undefined {
        return imagePath && configuration ? `${configuration.images.base_url}w185${imagePath}` : undefined;
    }

    useEffect(() => {
        if (movies && movies.length < 40 && hasMorePages) {
            setQuery((q) => ({...q, page: q.page + 1}));
        }
    }, [movies, hasMorePages]);



    return (
        <>
            <div className={styles.hero}>
                {movies && movies.map(m => (
                        <img key={m.id} src={formatImageUrl(m.poster_path)} className={styles.img} alt="Imagen"/>
                    )
                )}
                <div className={styles.gradient}></div>
            </div>
            <HeroText/>
            <Categories/>
        </>
    );
};

export default Home;