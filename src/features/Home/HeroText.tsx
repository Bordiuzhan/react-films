import styles from "./Home.module.scss";
import {ReactComponent as Play} from "../../images/play.svg";


const HeroText = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.heading}>The Best Streaming Experience</div>
                <div className={styles.paragraph}>
                    StreamVibe is the best streaming experience for watching your favorite
                    movies and shows on demand, anytime, anywhere. With StreamVibe, you
                    can enjoy a wide variety of content, including the latest
                    blockbusters, classic movies, popular TV shows, and more. You can also
                    create your own watchlists, so you can easily find the content you
                    want to watch.
                </div>
            </div>
            <button className={styles.button}>
                <Play/>
                <div className={styles.text}>Start Watching Now</div>
            </button>
        </div>
    );
};

export default HeroText;