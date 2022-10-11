import '../pages/Collection.scss';
import arrow_down from '../assets/img/arrow_down.svg'
import two_two from '../assets/img/icon/2x2.svg'
import three_three from '../assets/img/icon/3x3.svg'

export const CollectionControls = () => {
    return (
    <div className="coninainer-fluid">
        <div className="row d-flex mx-4">
            <div className="sorting col-lg-7 col-md-12">
                <div className="sorting__wrapper">
                    <div className="sorting__sorter">
                        <p className="sorting__sorter-text">
                            sort by:
                        </p>
                        <div className="disclosure">
                            <div className="disclosure__block">
                                <span className="disclosure__option--current pagination__option--current">a-z</span>
                                <img loading="lazy" src={arrow_down} alt="arrow down" />
                            </div>
                            <ul className="disclosure__list">
                                <li className="disclosure__list-item pagination__option">
                                        <span className="disclosure__option">
                                            a-z
                                        </span>
                                </li>
                                <li className="disclosure__list-item pagination__option">
                                        <span className="disclosure__option">
                                            z-a
                                        </span>
                                </li>
                            </ul>
                            <input type="text" className="disclosure__input " />
                        </div>
                    </div>
                    <div className="sorting__sorter">
                        <p className="sorting__sorter-text">
                            category:
                        </p>
                        <div className="disclosure">
                            <div className="disclosure__block">
                                <span
                                    className="disclosure__option--current pagination__option--current">products</span>
                                <img loading="lazy" src={arrow_down} alt="arrow down" />
                            </div>
                            <ul className="disclosure__list">
                                <li className="disclosure__list-item pagination__option">
                                        <span className="disclosure__option">
                                            products
                                        </span>
                                </li>
                                <li className="disclosure__list-item pagination__option">
                                        <span className="disclosure__option">
                                            on sale
                                        </span>
                                </li>
                            </ul>
                            <input type="text" className="disclosure__input " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pads col-lg-5 col-md-12 mt-md-2 d-flex align-items-md-end">
                <div className="pads__wrapper">
                    <div className="pads__item" id="tilesByTwo">
                        <img src={two_two} alt="2x2 pic" />
                    </div>
                    <div className="pads__item" id="tilesByThree">
                        <img src={three_three} alt="3x3 pic" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
