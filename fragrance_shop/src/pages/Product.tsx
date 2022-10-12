import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(0);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.create({
                    baseURL: 'http://localhost:3000'
                }).get("/products/"+id);
                setProduct(res.data);
                console.log(product)
            } catch {

            }
        }
        getProducts();
    }, [id]);
    return (<div></div>);
}
