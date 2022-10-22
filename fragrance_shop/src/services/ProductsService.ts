import axios from "axios";
import {reactLocalStorage} from "reactjs-localstorage";
import {LocalStorageKeysEnum} from "../enums/LocalStorageKeys.enum";
import {IProduct} from "../interfaces/IProduct";
import {axiosPaginatedResponseResopnseInterface} from "../interfaces/axiosResopnse.interface";

export const ProductsService = {

    link: 'https://localhost:7000/api/product/',

    getAllProducts: async () => {
        return axios.get( ProductsService.link );
    },

    getSingleProduct(id: string) {
        return axios.get( ProductsService.link + id);
    },

    getAllProductsWithPagination(productsPerPage: number = 3, page: number = 1): Promise<axiosPaginatedResponseResopnseInterface> {
        return axios.get(ProductsService.link + productsPerPage + '/' + page )
    }
}
