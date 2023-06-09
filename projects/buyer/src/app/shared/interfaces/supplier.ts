export interface Supplier {
  id: number;
  name: string;
  sellers_id: number[];
  products_id: number[];
  categories_id: number[];
  deals_id: number[];
  num_item: number;
  num_item_solid: number;
  total_sales: number;
}
