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
import {ProductsService} from "../services/ProductsService";
import Product from "../sections/Product";
import {Pagination} from "../components/Pagination";


export const Collection = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [numberOfPages, setNumberOfPages] = useState<number>(1);

    const getProducts = async (itemsOnPage: number = 10, page: number = 0) => {
        try {
            const productsResponse = (await ProductsService.getAllProductsWithPagination(itemsOnPage, page ? page + 1 : 1))?.data;
            setProducts(productsResponse.products);
            setNumberOfPages(productsResponse.pages);
        } catch (err) {

        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getItems = async (itemsOnPage: number, page: number) => {
        await getProducts(itemsOnPage, page);
    }

    return (<div>
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
        <Pagination numberOfPages={numberOfPages} sendDataToParent={getItems}/>
        <section className="parallax-banner">
            <div className="parallax main-sale__parallax">
                <h2 className="text-block__heading text-block__heading--large">up to 30% off selected brands</h2>
            </div>
        </section>
    </div>);
}
