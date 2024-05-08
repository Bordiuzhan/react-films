import { ArrowLeft, ArrowRight } from "../../images";
import CardGenres from "./CardGenres";
import { useGetGenresQuery } from "../../services/tmdb";
import styles from "./Categories.module.scss";
import { Carousel, SlideHandle } from "nuka-carousel";
import { useRef, useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: genres, isLoading: genresLoading } = useGetGenresQuery();

  const ref = useRef<SlideHandle>(null);

  const pages = genres ? Math.ceil(genres.length / 4) : 0;

  const getDotClassName = (index: number) => {
    let className = styles.dot;
    if (activeIndex === index) {
      className += ` ${styles.activeDot}`;
    }
    return className;
  };

  const goToPage = (index: number) => () => {
    setActiveIndex(index);
    ref.current?.goToPage(index);
  };

  const onNextClick = () => {
    if (activeIndex === pages - 1) return;
    ref.current?.goForward();
    setActiveIndex(activeIndex + 1);
  };

  const onBackClick = () => {
    if (activeIndex === 0) return;
    ref.current?.goBack();
    setActiveIndex(activeIndex - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            Explore our wide variety of categories
          </h3>
          <div className={styles.paragraph}>
            <p>
              Whether you&#039;re looking for a comedy to make you laugh, a
              drama to make you think, or a documentary to learn something new
            </p>
          </div>
        </div>
        <div className={styles.navigation}>
          <button className={styles.button} onClick={onBackClick}>
            <ArrowLeft />
          </button>
          <div className={styles.indicators}>
            {genres &&
              pages > 1 &&
              Array.from({ length: pages }).map((_, index) => (
                <button
                  key={index}
                  onClick={goToPage(index)}
                  className={` ${getDotClassName(index)} 
                                `}
                />
              ))}
          </div>
          <button className={styles.button} onClick={onNextClick}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <Carousel
        ref={ref}
        className={styles.carousel}
        children={
          genres &&
          genres.map((g) => <CardGenres key={g.id} genre={g.name} id={g.id} />)
        }
      />
    </div>
  );
};

export default Categories;
