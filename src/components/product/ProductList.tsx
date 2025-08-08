import { useEffect, useState } from "react"
import { addToCart, getProducts } from "../../actions"
import { ProductItem } from "./ProductItem"

import type { Product } from "../../interface/product.interface"
import style from './ProductList.module.css'


export const ProductList = () => {

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

    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  

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
