import Announcement from "../sections/Announcement";
import Header from "../components/Header";
import {Footer} from "../components/Footer";
import '../App.css';
import '../index.css'
import '../components/Header.scss'
import '../components/Footer.scss'
import './Collection.scss'
import {Breadcrumbs} from "../components/Breadcrumbs";
import {CollectionControls} from "../components/CollectionControls";
import {IProduct} from "../interfaces/IProduct";
import {useEffect, useState} from "react";
import {reactLocalStorage} from "reactjs-localstorage";
import {LocalStorageKeysEnum} from "../enums/LocalStorageKeys.enum";
import {ProductsService} from "../services/ProductsService";
import Product from "../sections/Product";


export const Collection = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                let productsArray = reactLocalStorage.getObject(LocalStorageKeysEnum.allProducts);
                if(Object.values(productsArray).length > 0) {
                    setProducts(productsArray as IProduct[]);
                } else {
                    productsArray = (await ProductsService.getAllProducts())?.data;
                    reactLocalStorage.setObject(LocalStorageKeysEnum.allProducts, productsArray);
                    setProducts(productsArray as IProduct[]);
                }
            } catch (err) {

            }
        }
        getProducts();
    }, []);

    return (<div>
        <Announcement />
        <Header />
        <section className="collection__banner">
            <h1>All products</h1>
        </section>
        <Breadcrumbs />
        <CollectionControls />
        <div className="container-fluid" id="overallContainer">
            <div className="row productsContainer px-4" id="productsRowContainer-1">
                {
                    products.map((product, index) => {
                        let props = {
                            product,
                            isCollection: true
                        }
                        return (<Product { ...props }/>)
                    })
                }
            </div>
        </div>
        <section className="parallax-banner">
            <div className="parallax main-sale__parallax">
                <h2 className="text-block__heading text-block__heading--large">up to 30% off selected brands</h2>
            </div>
        </section>
        <Footer />
    </div>);
}
