import img from '../assets/img/just_dropped/0/1.jpg';
import cross from '../assets/img/icon/cross.svg';
import './SideMenu.scss'
import {useEffect, useState} from "react";
import {ModalSerivce} from "../services/ModalSerivce";
import {SideMenuItem} from "./SideMenuItem";
import {CartService} from "../services/CartService";
import {IProduct} from "../interfaces/IProduct";
import {ProductsService} from "../services/ProductsService";

export const SideMenu = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsArray = (await ProductsService.getAllProducts())?.data;
                setProducts(productsArray as IProduct[]);
            } catch (err) {

            }
        }
        getProducts();
    }, []);
    console.log(products)
    const [isOpen, setModalOpen] = useState<boolean>(ModalSerivce.isModalOpen);
    const handleCrossClick = () => {
        const overlay = document.getElementsByClassName('overlay');
        overlay[0].classList.toggle('overlay-active');
    }
    return (
        <div className="overlay overlay--right">
            <div className="overlay__shopping-cart">
                <h2 className="text-center mt-4">Your cart</h2>
                <div className="shopping-cart__container">
                    {products.map((item: IProduct) => {
                        if(CartService.cart.some(cartItem => cartItem.id === item.id)) {
                           return (<SideMenuItem product={item} />)
                        } else {
                            return;
                        }
                    })}
                </div>
            </div>
            <div className="overlay-cross--right" onClick={() => handleCrossClick()}>
                <img src={cross} alt="cross img" />
            </div>
        </div>);
}
