import cosmetics from '../assets/img/icon/cosmetics.svg';
import heart from '../assets/img/icon/heart.svg';
import smile from '../assets/img/icon/smile.svg';
import './Benefits.scss';

const Benefits = () => {
    return (<section className="benefits">
        <div className="benefits__block">
            <img loading="lazy" src={cosmetics} alt="cosmetics pic" />
                <h3>responsibly sourced brands</h3>
        </div>
        <div className="benefits__block">
            <img loading="lazy" src={heart} alt="heart pic" />
                <h3>Sutainable packaging</h3>
        </div>
        <div className="benefits__block">
            <img loading="lazy" src={smile} alt="smile pic" />
                <h3>24/7 customer service</h3>
        </div>
    </section>)
}

export default Benefits;
