import type { Product } from "../../interface"
import style from './CartView.module.css'

export const CartView = ({ cart }: { cart: Product[] }) => {

  

  if( !cart.length ) return <h3 style={{ textAlign: 'center' }}>Empty Cart</h3>
  
  return (
    <div className={ style.container_cart }>
      <h2 className={ style.title_cart } >Cart </h2>
      <div className={style.products_cart} >

          {
            cart.map( ({ id, name, price }) => (
              <div key={id}>
                  <p className={ style.text_cart }>{ name } - ${ price }</p>
              </div>
            ) )
          }
      </div>
    </div>
    


    
  )
}
