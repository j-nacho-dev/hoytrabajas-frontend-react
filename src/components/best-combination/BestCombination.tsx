import { useState } from "react"
import { findBestCombination } from "../../helpers";

import type { Product, Result } from "../../interface"
import style from './BestCombination.module.css'



export const BestCombination = ({ products }: { products: Product[] }) => {

    const [ dataResult, setDataResult] = useState<Result | null>(null)
    const [budget, setBudget] = useState<number>(150);

    const handleBestCombination = () => {
        if( !products.length ) return
        const data = findBestCombination( products, budget )
        setDataResult( data )
    }
    

  return (
    <div className={ style.container_comb }>  
        <h3 className={ style.title_comb }>Calcular Mejor Combinacion</h3>
        
        <div className={ style.container_section }>
            <input 
                type="number" 
                min={ 1 }
                value={ budget }
                onChange={(e) => setBudget( Number(e.target.value) ) }
            />
            <button 
                className={ style.button }
                onClick={ handleBestCombination }
            > 
                Calcular 
            </button>
        </div>

        <div className={ style.container_card }>
            {
               dataResult && dataResult.items.map( ({ id, name, price}) => (
                    <div key={id} className={ style.card } >
                        <p className={ style.card_text } >{ name }</p>
                        <p> ${ price }</p>
                    </div>
                ) )
            }   
        </div>
          

        {
            dataResult && <p className={ style.total } > Total: ${ dataResult.total }</p>
        }
    </div>
  )
}
