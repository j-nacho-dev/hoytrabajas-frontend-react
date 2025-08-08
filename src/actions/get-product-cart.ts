import { api } from "../api/api";
import type { GetProductCartResponse, Product } from "../interface";


export const getProductCart = async(): Promise<Product[]> => {

    const response = await api<GetProductCartResponse>('/cart')
    console.log(response.data.cart)
    return response.data.cart

}