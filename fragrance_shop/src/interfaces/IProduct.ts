export interface IProduct {
    id: string;
    name: string;
    price: string;
    price_discount: string;
    currency: string;
    description: {
        description_1: string;
        description_2: string;
        description_3: string;
    }
    img_links: string[];
}
