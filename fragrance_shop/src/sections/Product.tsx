import {IProduct} from "../interfaces/IProduct";
import plus from '../assets/img/icon/plus.svg';
import icons8_iphone_spinner from '../assets/img/icon/icons8-iphone-spinner.gif';
import {CartService} from "../services/CartService";

const Product = (props: {product: IProduct, isCollection: boolean}) => {
    const handleAddToCart = async (e, id: string) => {
        e.preventDefault();
        const overlay = document.getElementsByClassName('overlay');
        overlay[0].classList.toggle('overlay-active');
        await CartService.addToCart(id);
    }
    return (<a href={'products/' + props.product.id} className={`just-dropped__item carousel__item carousel__item--${props.product.id} ${props.isCollection ? 'col-lg-3 col-md-6 col-sm-6 my-4 mx-0' : ''}`}>
        <div className="just-dropped__img-container carousel__img-container">
            {props.product.price_discount ? <div
                className="just-dropped__badge just-dropped__badge--sale carousel__badge carousel__badge--sale">Sale</div> : ""}
            <img loading="lazy" className="just-dropped__img carousel__img" src={`img/just_dropped/${
        props.product.id
      }/0.jpg`} alt={`${props.product.name} img`} />
            {/* TODO: Add click down below */}
            <div className="just-dropped__badge just-dropped__badge--plus carousel__badge--plus" onClick={(e) => handleAddToCart(e, props.product.id)}>
                <img loading="lazy" src={plus} className="plusImg" alt="plus" />
                <img src={icons8_iphone_spinner} className="spinnerGif" alt="iphone spinner" />
            </div>
        </div>
        <h4 className="just-dropped__heading carousel__heading">
            {props.product.name}
        </h4>
        <div className="just-dropped__price carousel__price">
            {props.product.price_discount ? <span
                className="just-dropped__crossed carousel__crossed">{props.product.currency}${props.product.price_discount}</span> : ""}
            <span>{props.product.currency}${props.product.price}</span>
        </div>
    </a>)
}

export default Product;
