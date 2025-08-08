import { duplicateProductCart } from "../../helpers/duplicate-product-cart.helper"
import type { Product } from "../../interface"
import style from './CartView.module.css'

export const CartView = ({ cart }: { cart: Product[] }) => {

  const newCart = duplicateProductCart( cart )


  if( !cart.length ) return <h3 style={{ textAlign: 'center' }}>Empty Cart</h3>
  
  return (
    <div className={ style.container_cart }>
      <h2 className={ style.title_cart } >Cart </h2>
      <div className={style.products_cart} >

          {
            newCart.map( ({ id, name, price, quantity }) => (
              <div key={id}>
                  <p className={ style.text_cart }>{ name } - ${ price } - count: { quantity }</p>
              </div>
            ) )
          }
      </div>
    </div>
    


    
  )
}
