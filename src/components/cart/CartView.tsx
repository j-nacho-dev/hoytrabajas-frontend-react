import { duplicateProductCart } from "../../helpers"

import style from './CartView.module.css'
import type { Product } from "../../interface"

export const CartView = ({ cart }: { cart: Product[] }) => {

  const newCart = duplicateProductCart( cart )


  if( !cart.length ) return <h3 style={{ textAlign: 'center' }}>Carro Vacio</h3>
  
  return (
    <div className={ style.container_cart }>
      <h2 className={ style.title_cart } >Carro </h2>
      <div className={style.products_cart} >

          {
            newCart.map( ({ id, name, price, quantity }) => (
              <div key={id}>
                  <p className={ style.text_cart }>{ name } - ${ price } - cant: { quantity }</p>
              </div>
            ) )
          }
      </div>
    </div>
    


    
  )
}
