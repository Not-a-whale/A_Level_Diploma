import axios from "axios";
import {reactLocalStorage} from "reactjs-localstorage";
import {LocalStorageKeysEnum} from "../enums/LocalStorageKeys.enum";

export const ProductsService = {
    getAllProducts: async () => {
        return axios.get( "http://localhost:3000/products");
    },
}
