import './GiftCard.scss';
import gift_card from "../assets/img/gift_card.png";
import arrow_down from "../assets/img/arrow_down.svg";

const GiftCard = () => {
    return (<section className="gift-card">
        <div className="left">
            <div className="gift-card__top-banner">
                <div className="gift-card__badge">
                    <span id="giftCardBadgeContent" className="currency_en">25 </span>
                    <span className="currency_number_en">$</span>
                </div>
                <div className="gift-card__banner-text">
                    <h2>Beaty club</h2>
                    <h3>gift card</h3>
                </div>
            </div>
            <div className="gift-card__bottom-selection">
                <div className="gift-card__selection-item circled-gift-card">
                    <img loading="lazy" src={gift_card} alt="gift card pic" />
                </div>
                <div className="gift-card__selection-item">
                    <img loading="lazy" src={gift_card} alt="gift card pic" />
                </div>
                <div className="gift-card__selection-item">
                    <img loading="lazy" src={gift_card} alt="gift card pic" />
                </div>
            </div>
        </div>
        <div className="right">
            <h4>gift cards</h4>
            <h2>Beauty club gift card</h2>
            <h3 className="mb-3">€ 17,03</h3>
            <label className="gift-card__dropdown-title">Title</label>
            <div className="disclosure w-100" id="giftCardDisclosure">
                <div className="disclosure__block">
                    <span className="disclosure__option--current">Text</span>
                    <img loading="lazy" src={arrow_down} alt="arrow down" />
                </div>
                <ul className="disclosure__list">
                    <li className="disclosure__list-item">
                            <span className="disclosure__option">
                                AUD $
                            </span>
                    </li>
                    <li className="disclosure__list-item">
                            <span className="disclosure__option">
                                CAD $
                            </span>
                    </li>
                    <li className="disclosure__list-item">
                            <span className="disclosure__option">
                                EUR €
                            </span>
                    </li>
                    <li className="disclosure__list-item">
                            <span className="disclosure__option">
                                USD $
                            </span>
                    </li>
                </ul>
                <input type="text" className="disclosure__input" />
            </div>
            <button className="big-button big-button--white">
                add to cart
            </button>
            <button className="big-button">
                buy it now
            </button>
        </div>
    </section>)
}

export default GiftCard;
