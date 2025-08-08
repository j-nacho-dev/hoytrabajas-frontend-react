import { getProducts } from "../../actions/get-products.action"
import { ProductItem } from "./ProductItem"
import style from './ProductList.module.css'


export const ProductList = () => {

  getProducts()

  return (
    <div className={ style.container_list } >
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}
