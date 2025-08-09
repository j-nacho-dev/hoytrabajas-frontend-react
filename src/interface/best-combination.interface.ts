import type { Product } from "./product.interface";

export interface Result { 
    items: Product[]; 
    total: number 
};

export interface Combination { 
    items: Product[]; 
    sum: number 
};