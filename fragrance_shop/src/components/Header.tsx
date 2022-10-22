import './Header.scss'
import mobile_nav_pic from '../assets/img/icon/mobile-nav-pic.svg';
import arrow_down from '../assets/img/arrow_down.svg';
import main_logo from '../assets/img/main_logo.png';
import UAE_flag from '../assets/img/UAE_flag.png';
import US_flag from '../assets/img/US_flag.png';
import shopping_cart_icon from '../assets/img/shopping_cart_icon.svg';
import search_icon from '../assets/img/search_icon.svg';

export const Header = ({ numberOfItems }) => {

    const display = "display";

    const handleMouseOver = () => {
        const headerDropdownNav = document.getElementById("headerDropdownNav");
        DisplayElement(headerDropdownNav);
    };
    const handleMouseOut = () => {
        const headerDropdownNav = document.getElementById("headerDropdownNav");
        HideElement(headerDropdownNav);
    }

    function toggleDisplayElement(elem: any) {
        const classList = [...elem.classList];
        const parrentsArray = [];
        !classList.includes(display)
            ? elem.classList.add(display)
            : elem.classList.remove(display);
    }

    function DisplayElement(elem: any) {
        elem.classList.add(display);
    }

    function HideElement(elem: any) {
        elem.classList.remove(display);
    }

    const handleCartClick = () => {
        const overlay = document.getElementsByClassName('overlay');
        overlay[0].classList.toggle('overlay-active');
    }
    return (<header className="header__root">
        <div className="header__top">
            <div className="mobile__nav-trigger">
                <img src={mobile_nav_pic} alt="mobile nav pic" />
            </div>
            <div className="header__left">
                <div className="disclosure">
                    <div className="disclosure__block">
                        <span className="disclosure__option--current">USD $</span>
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
                <div className="search-bar">
                    <img loading="lazy" src={search_icon} alt="search image"
                         className="search-bar__img" />
                </div>
            </div>
            <div className="header__center">
                <a href="/"><img loading="lazy" src={main_logo} alt="" /></a>
            </div>
            <div className="header__right">
                <div className="flag flag__desktop">
                    <div className="flag__options">
                        <div className="flag__option">
                            <img loading="lazy" src={UAE_flag} alt="UAE flag" />
                                <p>UAE</p>
                        </div>
                    </div>
                    <ul className="flag__list">
                        <li className="flag__list-item">
                            <a href="./index-ar.html" className="flag__list-option">
                                <img loading="lazy" src={UAE_flag} alt="UAE flag" />
                                    <p>UAE</p>
                            </a>
                        </li>
                        <li className="flag__list-item">
                            <a href="./index-en.html" className="flag__list-option">
                                <img loading="lazy" src={US_flag} alt="US flag" />
                                    <p>US</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="logging logging__desktop">
                    <a href="/login" className="logging__login">Login</a>
                    <p className="logging__text">/</p>
                    <a href="/login" className="logging__sign-up">Sign up</a>
                </div>
                <div className="shopping-cart" onClick={() => handleCartClick()}>
                    <img loading="lazy" src={shopping_cart_icon} alt="shopping cart icon"
                         className="shopping-cart__icon" />
                    <span className="shopping-cart__number">
                        {numberOfItems}
                    </span>
                </div>
            </div>
        </div>
        <div className="header__bottom">
            <div className="mobile__nav-trigger">
                <img src={mobile_nav_pic} alt="mobile nav pic" />
            </div>
            <div className="logging logging__mobile">
                <a href="./login" className="logging__login">Login</a>
                <p className="logging__text">/</p>
                <a href="./login" className="logging__sign-up">Sign up</a>
            </div>
            <nav className="header__desktop-nav">
                <ul className="main-menu">
                    <li className="main-menu__item">
                        <a href="/" className="main-menu__link">home</a>
                    </li>
                    <li className="main-menu__item" id="mainMenuDropDownListItem" onMouseOver={handleMouseOver}>
                        <a className="main-menu__link">Shop beauty</a>
                        <img loading="lazy" src={arrow_down} alt="arrow down" />
                    </li>
                    <li className="main-menu__item">
                        <a href="/blog" className="main-menu__link">Blog</a>
                    </li>
                    <li className="main-menu__item">
                        <a href="/blog" className="main-menu__link">About us</a>
                    </li>
                    <li className="main-menu__item">
                        <a href="/theme-features" className="main-menu__link">Theme features</a>
                    </li>
                </ul>
            </nav>
            <div className="flag__mobile">
                <div className="flag__options">
                    <div className="flag__option">
                        <img loading="lazy" src={ UAE_flag } alt="UAE flag" />
                            <p>UAE</p>
                    </div>
                </div>
                <ul className="flag__list">
                    <li className="flag__list-item">
                        <a href="./index-ar.html" className="flag__list-option">
                            <img loading="lazy" src={ UAE_flag } alt="UAE flag" />
                                <p>UAE</p>
                        </a>
                    </li>
                    <li className="flag__list-item">
                        <a href="./index-en.html" className="flag__list-option">
                            <img loading="lazy" src={ US_flag } alt="US flag" />
                                <p>US</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="header__bottom--search">
            <div className="search-bar">
                <img loading="lazy" src={ search_icon } alt="search image" className="search-bar__img" />
            </div>
        </div>
        <div className="dropdown-nav" id="headerDropdownNav" onMouseLeave={handleMouseOut}>
            <nav className="dropdown__wrapper">
                <div className="dropdown__pick-cards dropdown__item">
                    <ul className="dropdown__list">
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link">Our pics</a>
                        </li>
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link">Gift cards</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown__shop-types dropdown__item">
                    <a href="/theme-features" className="main-menu__link main-menu__link--heading">Shop by type</a>
                    <ul className="dropdown__list">
                        <li className="main-menu__item">
                            <a href="./collection-en.html" className="main-menu__link main-menu__link--small">Shop
                                all</a>
                        </li>
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link--small">Skin care</a>
                        </li>
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link--small">Make up</a>
                        </li>
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link--small">Hair care</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown__shop-edit dropdown__item">
                    <a href="/theme-features" className="main-menu__link main-menu__link--heading">Shop the edit</a>
                    <ul className="dropdown__list">
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link--small">Home beauty
                                essentials</a>
                        </li>
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link--small">Skincare Super
                                Sellers</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown__sale dropdown__item">
                    <a href="/theme-features" className="main-menu__link main-menu__link--heading">Sale</a>
                    <ul className="dropdown__list">
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link--small">Final
                                Reductions</a>
                        </li>
                        <li className="main-menu__item">
                            <a href="/theme-features" className="main-menu__link main-menu__link--small">Fragrance
                                sale</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>);
}

export default Header;
