

export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface GetProductsResponse {
    ok: boolean;
    products: Product[];
  }