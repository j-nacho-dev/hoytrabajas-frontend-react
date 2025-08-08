import { CartView } from '../components/CartView'
import { ProductList } from '../components/ProductList'
import style from './ProductPage.module.css'

export const ProductPage = () => {

  return (
   <main>

        <h1> Prueba Técnica - Productos + Carrito de Compras</h1>

        <div className={ style.sections_container }>
            <section>
                <ProductList />
            </section>

            <aside>
                <CartView />
            </aside>
        </div>
        

   </main>
  )
}
