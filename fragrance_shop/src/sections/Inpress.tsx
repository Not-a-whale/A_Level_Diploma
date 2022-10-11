import './Inpress.scss';
import instyle from "../assets/img/icon/instyle.svg";
import wwd from "../assets/img/icon/wwd.svg";
import vogue from "../assets/img/icon/wwd.svg";
import allure from "../assets/img/icon/allure.svg";
import gllamour from "../assets/img/icon/gllamour.svg";
import ID from "../assets/img/icon/ID.svg";

const Inpress = () => {
    return (<section className="inpress">
        <h2>in the press</h2>
        <div className="inpress__block">
        <img loading="lazy" src={instyle} alt="instyle svg" />
        <img loading="lazy" src={wwd} alt="wwd svg" />
        <img loading="lazy" src={vogue} alt="vougue svg" />
        <img loading="lazy" src={allure} alt="allure svg" />
        <img loading="lazy" src={gllamour} alt="gllamour svg" />
        <img loading="lazy" src={ID} alt="id svg" />
        </div>
    </section>)
}

export default Inpress;
