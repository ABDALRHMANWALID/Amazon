export interface Seller {
  user_id: number;
  level: string;
  products_id: number[];
  categories_id: number[];
  suppliers_id: number[];
  deals_id: number[];
  orders_ids: number[];
  sales_daily: number[];
  order_daily: number[];
  views_daily: number[];
  wishlisted_daily: number[];
  product_id_sold_daily: number[];
  net_profit_daily: number[];
  keywords_id: number[];
  advertisements_id: number[];
}
