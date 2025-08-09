
import { addToCart, getProductCart } from "../../actions"
import { ProductItem } from "./ProductItem"

import type { Product } from "../../interface/product.interface"
import style from './ProductList.module.css'



interface Props {
  onGetCartProduct: ( cartProduct: Product[] ) => void;
  products: Product[]
}


export const ProductList = ({onGetCartProduct, products}: Props) => {

  const onHandleProductAdd = async( id: number) => {
    try {
      await addToCart(id)
      const cartProdcuts = await getProductCart()
      onGetCartProduct( cartProdcuts )

    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <div className={ style.container_list } >

      {
        products.map( product => (
          <ProductItem  
            key={product.id} 
            {...product} 
            addProductToCart={ onHandleProductAdd }
          />
        ) )
      }

    </div>
  )
}
