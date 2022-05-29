import { Product } from "./product"
export interface OrderLine {
  id?:number,
  quantity:number,
  purchasePrice: number,
  product: Product

}
