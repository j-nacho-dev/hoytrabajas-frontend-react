import { useEffect, useState } from "react"
import { addToCart, getProductCart, getProducts } from "../../actions"
import { ProductItem } from "./ProductItem"

import type { Product } from "../../interface/product.interface"
import style from './ProductList.module.css'
import { findBestCombination } from "../../helpers/find-best-combination.helpers"



interface Props {
  onGetCartProduct: ( cartProduct: Product[] ) => void
}

export const ProductList = ({onGetCartProduct}: Props) => {

  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async() => {

    try {
      const productsApi = await getProducts()
      setProducts(productsApi) 
      
    } catch (error) {
      console.log(error)
    } 
  }

  const onHandleProductAdd = async( id: number) => {
    try {
      await addToCart(id)
      const cartProdcuts = await getProductCart()
      onGetCartProduct( cartProdcuts )

    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchProducts() 

  }, [])

  
  findBestCombination(products, 150)

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
