export interface Order {
  id: number;
  products_id: number[];
  deals_id: number[];
  categories_id: number[];
  buyer_id: number;
  sellers_id: number[];
  total_cost: number;
  date_order: string;
  date_delivery: string;
  address: string;
}
