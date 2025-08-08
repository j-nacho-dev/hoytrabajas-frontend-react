import { ProductItem } from "./ProductItem"
import style from './ProductList.module.css'


export const ProductList = () => {

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
