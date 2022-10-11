import video from "../assets/video/sample-20s.mp4";
import './Video.scss';

const Video = () => {
    return (<section className="video">
        <h2>
            join our youtube #tribe
        </h2>
        <video autoPlay muted loop className="video-bg">
            <source src={video} type="video/mp4" />
        </video>
        <a href="http://youtube.com" className="medium-button">watch and subscribe</a>
        <div className="video__background">
        </div>
    </section>)
}

export default Video;
