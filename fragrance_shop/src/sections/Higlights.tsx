import './Highlights.scss'
import highlights_1 from '../assets/img/highlights/1.jpg'
import highlights_2 from '../assets/img/highlights/2.jpg'
import highlights_3 from '../assets/img/highlights/3.jpg'
import highlights_4 from '../assets/img/highlights/4.jpg'

const Highlights = () => {
    return (<section className="highlights">
        <div className="highlights__block highlights__block--essentials">
            <h3 className="highlights__heading">
                At home beauty essentials
            </h3>
            <a href="./collection-en.html" className="highlights__link">
                Browse collection
            </a>
            <img loading="lazy" src={highlights_1} alt="home beauty essentials img"
                 className="highlights__img" />
        </div>
        <div className="highlights__block highlights__block--natural">
            <h3 className="highlights__heading">
                Nude and natural
            </h3>
            <a href="./collection-en.html" className="highlights__link">
                shop gloss
            </a>
            <img loading="lazy" src={highlights_2} alt="Nude and natural img"
                 className="highlights__img" />
        </div>
        <div className="highlights__block highlights__block--rollers">
            <h3 className="highlights__heading">
                FACIAL ROLLERS — BEAUTY AWARDS A-LISTER
            </h3>
            <a href="./collection-en.html" className="highlights__link">
                shop it
            </a>
            <img loading="lazy" src={highlights_3} alt="FACIAL ROLLERS img"
                 className="highlights__img" />
        </div>
        <div className="highlights__block highlights__block--body-care">
            <h3 className="highlights__heading">
                BODY CARE - SEASONAL TOP PICKS
            </h3>
            <a href="./collection-en.html" className="highlights__link">
                shop now
            </a>
            <img loading="lazy" src={highlights_4} alt="BODY CARE - SEASONAL TOP PICKS img"
                 className="highlights__img" />
        </div>
    </section>)
}

export default Highlights;
