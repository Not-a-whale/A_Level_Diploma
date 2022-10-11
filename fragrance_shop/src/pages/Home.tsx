import Announcement from "../sections/Announcement";
import Header from "../components/Header";
import MainSlider from "../sections/Slider";
import ProductsSlider from "../sections/ProductsSlider";
import {useEffect, useState} from "react";
import {ProductsService} from "../services/ProductsService";
import {LocalStorageKeysEnum} from "../enums/LocalStorageKeys.enum";
import {reactLocalStorage} from "reactjs-localstorage";
import {IProduct} from "../interfaces/IProduct";
import Highlights from "../sections/Higlights";
import MainSale from "../sections/MainSale";
import GiftCard from "../sections/GiftCard";
import Favorites from "../sections/Favorites";
import MainBlog from "../sections/MainBlog";
import Video from "../sections/Video";
import Inpress from "../sections/Inpress";
import Community from "../sections/Community";
import Benefits from "../sections/Benefits";
import BannerLow from "../sections/BannerLow";
import {Footer} from "../components/Footer";

const Home = () => {
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
    console.log(products)
    return (
        <div>
            <Announcement />
            <Header />
            <main className="main__content">
                <MainSlider />
                <ProductsSlider props={products} />
                <Highlights />
                <MainSale />
                <GiftCard />
                <Favorites />
                <MainBlog />
                <Video />
                <Inpress />
                <Community />
                <Benefits />
                <BannerLow />
            </main>
            <Footer />
        </div>
    )
}

export default Home;
