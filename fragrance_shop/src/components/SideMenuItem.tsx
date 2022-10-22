import img from "../assets/img/just_dropped/0/1.jpg";
import {IProduct} from "../interfaces/IProduct";
import {CartService} from "../services/CartService";

export const SideMenuItem = (props: {product: IProduct}) => {
    const addItem = async (id) => {
        await CartService.addToCart(props.product.id);
    }

    const removeItem = async (id) => {
        await CartService.deleteFromTheCart(props.product.id);
    }

    const deleteAllItemsOfType = async (id) => {
        await CartService.deleteFromTheCart(props.product.id, true);
    }

    return (<div className="shopping-cart__item">
                <h3>{props.product.name}</h3>
                <div className="shopping-cart__item-block">
                    <div className="shopping-cart__item-left">
                        <img src={`img/just_dropped/${
                            props.product.id
                        }/0.jpg`} alt="cart item" />
                    </div>
                    <div className="shopping-cart__item-right">
                        <h4 className="carousel__crossed">{props.product.currency}{props.product.price}</h4>
                        <p className="text-uppercase">Buy one get one free ({props.product.currency}{props.product.price_discount})</p>
                        <div className="shopping-cart__plus-minus">
                            <div className="shopping-cart__minus" onClick={() => removeItem(props.product.id)}>&#8722;</div>
                            <div className="shopping-cart__selection-number">{CartService.cart.find(cartItem => cartItem.id === props.product.id)!.quantity}</div>
                            <div className="shopping-cart__plus" onClick={() => addItem(props.product.id)}>
                                +
                            </div>
                        </div>
                        <a className="shopping-cart__link" onClick={() => deleteAllItemsOfType(props.product.id)}>Remove</a>
                    </div>
                </div>
            </div>);
}
