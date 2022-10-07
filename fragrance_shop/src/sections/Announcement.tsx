import './Announcement.scss'
import icon from '../assets/img/sun-icon_50x50.png'

const Announcement = () => {
    return (<section className="announcement">
        <div className="announcement__wrapper">
            <div className="announcement__icon">
                <img loading="lazy" src={ icon } alt="announcement icon" />
            </div>
            <div className="announcement__text">
                <h5>
                    50% OFF all skincare this weekend - Enter code SKNWKND
                </h5>
            </div>
        </div>
    </section>)
};

export default Announcement;
