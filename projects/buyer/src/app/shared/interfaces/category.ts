export interface Category {
  id: number;
  name: string;
  image: string;
  products_id: number[];
  deals_id: number[];
  keywords_id: number[];
  sellers_id: number[];
  suppliers_id: number[];
  orders_id: number[];
  advertisements_id: number[];
  related_categories: number[];
  daily_sales_rate: number[];
  sales_rate: number;
  profit: number;
  num_view_search: number;
  customer_view_search_id: number[];
  num_view: number;
  customer_view_id: number[];
}
