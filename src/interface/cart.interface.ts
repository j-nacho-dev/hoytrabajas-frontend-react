import type { Product } from "./product.interface";

export interface AddToCartResponse {
    ok: boolean;
    message: string;
    product: Product;
  }