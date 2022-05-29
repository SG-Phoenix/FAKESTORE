import { Order } from './order';
export interface OrderPage {
  content: Order[],
  totalElements:number,
  totalPages:number
}
