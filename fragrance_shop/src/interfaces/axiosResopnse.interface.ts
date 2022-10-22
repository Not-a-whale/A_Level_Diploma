import {IProduct} from "./IProduct";

export interface axiosPaginatedResponseResopnseInterface {
    data: PagintedProducts;
    status: number;
    statusText: string;
    headers: object;
    config: object;
    request: object;
}

export interface PagintedProducts {
    pages: number;
    currentPage: number;
    products: IProduct[]
}

