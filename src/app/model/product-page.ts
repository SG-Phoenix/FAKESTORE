import { Product } from "./product"
export interface ProductPage {
  content: Product[],
  totalElements:number,
  totalPages:number
}
