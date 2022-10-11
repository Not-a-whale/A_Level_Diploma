import {IProduct} from "../interfaces/IProduct";
import plus from '../assets/img/icon/plus.svg';
import icons8_iphone_spinner from '../assets/img/icon/icons8-iphone-spinner.gif';

const Product = (props: {props: IProduct}) => {
    return (<a href={'product/' + props.props.id} className={`just-dropped__item carousel__item carousel__item--${props.props.id}`}>
        <div className="just-dropped__img-container carousel__img-container">
            {props.props.price_discount ? <div
                className="just-dropped__badge just-dropped__badge--sale carousel__badge carousel__badge--sale">Sale</div> : ""}
            <img loading="lazy" className="just-dropped__img carousel__img" src={`img/just_dropped/${
        props.props.id
      }/0.jpg`} alt={`${props.props.name} img`} />
            {/* TODO: Add click down below */}
            <div className="just-dropped__badge just-dropped__badge--plus carousel__badge--plus">
                <img loading="lazy" src={plus} className="plusImg" alt="plus" />
                <img src={icons8_iphone_spinner} className="spinnerGif" alt="iphone spinner" />
            </div>
        </div>
        <h4 className="just-dropped__heading carousel__heading">
            {props.props.name}
        </h4>
        <div className="just-dropped__price carousel__price">
            {props.props.price_discount ? <span
                className="just-dropped__crossed carousel__crossed">{props.props.currency}${props.props.price_discount}</span> : ""}
            <span>{props.props.currency}${props.props.price}</span>
        </div>
    </a>)
}

export default Product;
