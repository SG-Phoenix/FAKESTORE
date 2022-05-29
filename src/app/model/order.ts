import { OrderLine } from "./order-line"
import { User } from "./user"
export interface Order {
  id?:number,
  user:User,
  country:string,
  postalCode:string,
  city:string,
  street:string,
  purchaseTime?:Date,
  totalPrice:number,
  products: OrderLine[]
}
