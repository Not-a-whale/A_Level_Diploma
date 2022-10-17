import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {IProduct} from "../interfaces/IProduct";
import {ProductsService} from "../services/ProductsService";
import {Footer} from "../components/Footer";
import Announcement from "../sections/Announcement";
import Header from "../components/Header";
import twitter_pic from "../assets/img/twitter.svg";
import facebook from "../assets/img/facebook.svg";
import pinterest_pic from "../assets/img/pinterest.png";
import './Product.scss';
import {Breadcrumbs} from "../components/Breadcrumbs";

export const Product = () => {
    const location = useLocation();
    let id = location.pathname.split("/")[2];
    const [product, setProduct] = useState<any>({});

    useEffect(() => {
        const getProducts = async () => {
            try {
                const product: IProduct = (await ProductsService.getSingleProduct(id))?.data;
                const parsedProduct = {...product, description: [...Object.values(product.description)]}
                setProduct(parsedProduct);
                console.log(parsedProduct)
            } catch (err) {

            }
        }
        getProducts();
    }, []);
    return (<div>
    <Announcement />
    <Header />
    <Breadcrumbs />
       <section className="product">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 product__buttons product__section">
                        <h2 id="productHeading">
                            {product.name}
                        </h2>
                        <h3 id="priceText" className="mb-3">{product.currency}{product.price}</h3>
                        <div className="product__buttons-container">
                            <button className="big-button big-button--white mb-3">add to cart</button>
                            <button className="big-button">buy it now</button>
                        </div>
                        <div className="gift-card__bottom-selection product__selection">
                            {product?.img_links?.map((imgPath, index) => {
                                return (<div className={`gift-card__selection-item ${index === 0 ? 'circled-gift-card' : ''}`} onClick={id = index}>
                                    <img loading="lazy" src={`../img/just_dropped/${
                                        id
                                    }/${index}.jpg`} alt="item 1 small" />
                                </div>)
                            })}
                        </div>
                        <div className="product__text .d-none .d-md-block .d-lg-none">
                            {product?.description?.map((desc, index) => {
                                return (<p className="mb-3 textBlock1">
                                    {desc}
                                </p>);
                            })};
                        </div>
                    </div>
                    <div
                        className="col-xl-4 col-lg-6 col-md-6 product__img product__section d-flex align-items-md-start align-items-lg-center justify-content-md-start">
                        {product?.img_links?.map((link, index) => {
                            if(index === 0) {
                                return (
                                    <img loading="lazy" src={`../img/just_dropped/${
                                        id
                                    }/0.jpg`} alt={"DESCRIPTION OF A PRODUCT IMG: " + index}
                                         id="mainProductImage" />)
                            }
                        })}
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 product__text product__section">
                        {product?.description?.map((desc, index) => {
                            return (<p className="mb-3 textBlock1">
                                {desc}
                            </p>);
                        })};
                    </div>
                </div>
            </div>
        </section>
        <section className="product__share">
            <h2>Share this</h2>
            <div className="product__social-networks">
                <a href="http://www.twitter.com" className="product__social-network">
                    <img loading="lazy" src={twitter_pic} alt="twitter icon" />
                        <h4>Tweet</h4>
                </a>
                <a href="http://www.facebook.com" className="product__social-network product__social-network--facebook">
                    <img loading="lazy" src={facebook} alt="facebook icon" />
                        <h4>Like</h4>
                </a>
                <a href="http://www.twitter.com" className="product__social-network">
                    <img loading="lazy" src={pinterest_pic} alt="pinterest icon" />
                        <h4>Tweet</h4>
                </a>
            </div>
        </section>
        <Footer />
    </div>);
}
