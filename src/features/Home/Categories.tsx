import {ArrowLeft, ArrowRight} from "../../images";
import CardGenres from "./CardGenres";
import {useGetGenresQuery} from "../../services/tmdb";
import styles from "./Categories.module.scss";
import {Carousel, SlideHandle, useCarousel} from 'nuka-carousel';
import {useRef} from "react";




const Categories = () => {
    const {data: genres, isLoading: genresLoading} = useGetGenresQuery();
    const ref = useRef<SlideHandle>(null);
    const { totalPages, currentPage, goToPage } = useCarousel();
    console.log(totalPages)
    const getDotClassName = (index: number) => {
        let className = styles.dot; // Access CSS module class
        if (currentPage === index) {
            className += ` ${styles.activeDot}`; // Add active dot style if current page
        }
        return className;
    };




    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h3 className={styles.title}>Explore our wide variety of categories</h3>
                    <div className={styles.paragraph}>
                        <p>Whether you&#039;re looking for a comedy to make you laugh, a drama to
                            make you think, or a documentary to learn something new</p>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <button className={styles.button} onClick={() => ref.current?.goBack()}>
                        <ArrowLeft/>
                    </button>
                    <div className={styles.indicators}>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToPage(index)}
                                className={getDotClassName(index)}
                            />
                        ))}
                    </div>
                    <button className={styles.button} onClick={() => ref.current?.goForward()}>
                        <ArrowRight/>
                    </button>
                </div>
            </div>
            <Carousel
                ref={ref}
                className={styles.carousel}
                children={genres && genres.map((g) => <CardGenres key={g.id} genre={g.name} id={g.id}/>)}/>
        </div>
    );
}

export default Categories;