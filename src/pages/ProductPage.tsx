import { useCallback, useEffect, useState } from 'react'
import { CartView } from '../components/cart/CartView'
import { ProductList } from '../components/product/ProductList'
import style from './ProductPage.module.css'
import type { Product } from '../interface'
import { getProductCart } from '../actions'

export const ProductPage = () => {   
    
  const [cart, setCart] = useState<Product[]>([])

  const onGetCartProduct = useCallback(( cartProduct:Product[] ) => {
    // console.log({cartProduct})
    setCart( cartProduct )
  },[])

  const loadCart = useCallback(async () => {
    const cartProductLoad = await getProductCart();
    setCart(cartProductLoad);
  }, []);

  useEffect(() => {
    loadCart()
  }, [loadCart])
  
  

  return (
   <main>

        <h1 className={ style.title_page }> Prueba Técnica - Productos + Carrito de Compras</h1>

        <div className={ style.sections_container }>
            <section>
                <ProductList onGetCartProduct={ onGetCartProduct } />
            </section>

            <aside>
                <CartView cart={ cart } />
            </aside>
        </div>
        

   </main>
  )
}
