import { api } from "../api/api"
import type { AddToCartResponse } from "../interface/cart.interface"



export const addToCart = async( id: number ): Promise<AddToCartResponse> => {

    const response = await api.post<AddToCartResponse>(`/cart/${ id }`)
    return response.data

}