import type { Product } from "../interface";


interface ProductInCart {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }

export const duplicateProductCart = ( cart: Product[] ): ProductInCart[] => {

    const newCart = cart.reduce<ProductInCart[]>( ( acc, current ) => {

        const foundProduct = acc.find( product => product.id === current.id )

        if( foundProduct ) {
            foundProduct.quantity += 1;
        } else {
            acc.push({
                id: current.id,
                name: current.name,
                price: current.price,
                quantity: 1,
              })
        }

        return acc

    }, [] )

    return newCart

}