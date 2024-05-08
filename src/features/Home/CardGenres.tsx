import React from 'react';
import {Link} from "react-router-dom";
import styles from "./CardGenres.module.scss";
import {ArrowRight} from "../../images";
import {useGetByGenreQuery, useGetConfigurationQuery,} from "../../services/tmdb";

interface CardGenresProps {
    id: number;
    genre: string;
}

const CardGenres = ({genre, id}: CardGenresProps) => {
        const {data: configuration} = useGetConfigurationQuery();
        const {data: movies, isLoading} = useGetByGenreQuery(id)

        function formatImageUrl(imagePath?: string | null): string | undefined {
            return imagePath && configuration ? `${configuration.images.base_url}w92${imagePath}` : undefined;
        }


        return (
            <div className={styles.card}>
                <div className={styles.images}>
                    {movies && movies.results.slice(0, 4).map((movie, index) => <img key={index}
                                                                                     className={styles.image}
                                                                                     src={formatImageUrl(movie.poster_path)}
                                                                                     alt="Img"/>)}
                </div>
                <Link to="#" className={styles.link}>
                    <div className={styles.title}>{genre}</div>
                    <ArrowRight/>
                </Link>
            </div>
        );
    }
;

export default CardGenres;
