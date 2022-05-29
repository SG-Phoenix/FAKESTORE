import { Category } from './category';
import { Product } from './product';
export interface Selling {
  id:number,
  quantity:number,
  purchasePrice:number,
  country:string,
  city:string,
  postalCode:string,
  street:string,
  product:Product,
  category: Category,
  orderId: number,
  orderDate: Date
}
