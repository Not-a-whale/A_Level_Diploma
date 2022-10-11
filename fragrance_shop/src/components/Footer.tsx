import './Footer.scss';
import facebook from '../assets/img/facebook.svg';
import twitter from '../assets/img/twitter.svg';
import instagram from '../assets/img/instagram.svg';
import youtube from '../assets/img/youtube.svg';
import visa from '../assets/img/visa.svg';
import mastercard from '../assets/img/mastercard.svg';
import amex from '../assets/img/amex.svg';
import paypal from '../assets/img/paypal.svg';
import diners_club from '../assets/img/diners-club.svg';
import discover from '../assets/img/discover.svg';
import arrow_down from '../assets/img/arrow_down.svg';

export const Footer = () => {
    return (<footer className="main-footer">
        <div className="footer__wrapper">
            <div className="footer__top">
                <div className="footer__creds">
                    <h3 className="footer__heading">Beauty store</h3>
                    <p className="footer-__copyright">&#169; 2020 Troop Themes</p>
                    <p>Built exclusively for Shopify's theme store</p>
                    <div className="footer__links-block">
                        <a href="http://www.facebook.com" className="footer__link footer__link--pic">
                            <img loading="lazy" src={facebook} alt="facebook pic" />
                        </a>
                        <a href="http://www.twitter.com" className="footer__link footer__link--pic">
                            <img loading="lazy"  src={twitter} alt="twitter pic" />
                        </a>
                        <a href="http://www.instagram.com" className="footer__link footer__link--pic">
                            <img loading="lazy" src={instagram} alt="instagram pic" />
                        </a>
                        <a href="http://www.youtube.com" className="footer__link footer__link--pic">
                            <img loading="lazy" src={youtube} alt="youtube pic" />
                        </a>
                    </div>
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
                </div>
                <div className="footer__info">
                    <h3 className="footer__heading">info</h3>
                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a href="/about" className="footer__link">About us</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/approach" className="footer__link">Our Approach</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/contact" className="footer__link">Contact</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="/faq" className="footer__link">FAQs</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__subscription">
                    <h3 className="footer__heading">subscribe</h3>
                    <p className="footer-__copyright">&#169; 2020 Troop Themes</p>
                    <p>Sign up to our emails for VIP offers and new product offers</p>
                    <form method="POST" accept-charset="UTF-8" action="/contact#footerForm" id="footerForm"
                          className="footer__form">
                        <input type="email" id="footerEmail" placeholder="Your Email" name="contact[email]"
                               className="footer__input" />
                            <button type="submit" value="Ok" className="footer__button medium-button">Ok</button>
                    </form>
                    <div className="payment-icons__block">
                        <ul className="payment-icons__list">
                            <li className="payment-icons__list-item">
                                <img loading="lazy" src={visa} alt="visa pic" />
                            </li>
                            <li className="payment-icons__list-item">
                                <img loading="lazy" src={mastercard} alt="mastercard pic" />
                            </li>
                            <li className="payment-icons__list-item">
                                <img loading="lazy" src={amex} alt="amex pic" />
                            </li>
                            <li className="payment-icons__list-item">
                                <img loading="lazy" src={paypal} alt="paypal pic" />
                            </li>
                            <li className="payment-icons__list-item">
                                <img loading="lazy" src={diners_club} alt="diners-club pic" />
                            </li>
                            <li className="payment-icons__list-item">
                                <img loading="lazy" src={discover} alt="discover pic" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
}
