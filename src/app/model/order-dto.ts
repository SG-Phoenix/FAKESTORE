import { OrderLineDto } from "./order-line-dto"
export interface OrderDto {
  userId:number,
  country:string,
  street:string,
  postalCode:string,
  city:string,
  products: OrderLineDto[]
}
