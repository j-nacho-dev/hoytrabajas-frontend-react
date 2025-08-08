import style from './ProductItem.module.css'

export const ProductItem = () => {
  return (
    <div className={ style.container_item } >
        <h3 className={ style.title_item }> Product 1 </h3>
        <p className={ style.price_item }> $120 </p>
        <button className={ style.button_item }> Add To Cart </button>
    </div>
  )
}
