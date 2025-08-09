import type { Combination, Product, Result } from "../interface";


export function findBestCombination(products: Product[], budget: number): Result {

  let bestTotal = 0
  let bestItems: Product[] = []

  let combinations: Combination[] = [{ items: [], sum: 0 }]


  for (const product of products) {
    const nextCombinations: Combination[] = [...combinations]

    for (const combo of combinations) {
      const candidateSum = combo.sum + product.price

      if (candidateSum <= budget) {
        const candidateCombo: Combination = {
          items: [...combo.items, product],
          sum: candidateSum,
        }
        nextCombinations.push(candidateCombo)

        if (candidateSum > bestTotal) {
          bestTotal = candidateSum;
          bestItems = candidateCombo.items;
        }
      }
    }

    combinations = nextCombinations
  }


  return { 
        items: bestItems, 
        total: bestTotal 
    }
}
