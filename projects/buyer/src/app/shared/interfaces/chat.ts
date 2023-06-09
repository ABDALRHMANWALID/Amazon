export interface Chat {
  id: number;
  seller_id: number;
  buyer_id: number;
  messages_id: number;
  rating_buyer_id: number;
  rating_seller_id: number;
  product_id: number;
  deal_id: number;
  buying: boolean;
  buying_time: number;
}
