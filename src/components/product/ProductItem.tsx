import style from './ProductItem.module.css'

interface Props {
  id: number;
  name:string;
  price: number;
  addProductToCart: (id: number) => void 
}

export const ProductItem = ({ id, name, price, addProductToCart }:Props) => {

  return (
    <div className={ style.container_item } >

        <h3 className={ style.title_item }> { name } </h3>

        <p className={ style.price_item }> ${ price } </p>

        <button 
          className={ style.button_item }
          onClick={ () => addProductToCart( id ) }
        > 
          Add To Cart 
        </button>

    </div>
  )
}
