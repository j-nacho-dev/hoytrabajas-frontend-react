import { useCallback, useEffect, useState } from 'react'
import { CartView, BestCombination, ProductList } from '../components'
import { getProductCart, getProducts } from '../actions'

import style from './ProductPage.module.css'
import type { Product } from '../interface'




export const ProductPage = () => {   
  
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>([])

  const fetchProducts = async() => {
    try {
      const productsApi = await getProducts()
      setProducts(productsApi) 
      
    } catch (error) {
      console.log(error)
    } 
  }

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

  useEffect(() => {
    fetchProducts() 
  }, [])


  return (
   <main>

        <div className={ style.sections_container }>
          
            <section>
              <h1 className={ style.title_page }> Prueba Técnica - Productos + Carrito de Compras</h1>
                <ProductList products={products} onGetCartProduct={ onGetCartProduct } />
            </section>

            <aside className={ style.aside_page }>
                <CartView cart={ cart } />
                <BestCombination products={ products } />
            </aside>
        </div>
        

   </main>
  )
}
