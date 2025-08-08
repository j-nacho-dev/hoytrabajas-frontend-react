
import { api } from '../api/api'
import type { GetProductsResponse, Product } from '../interface/product.interface'


export const getProducts = async(): Promise<Product[]> => {

    const response = await api<GetProductsResponse>('/products')
    return response.data.products
}