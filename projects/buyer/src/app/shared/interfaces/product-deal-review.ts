export interface ProductDealReview {
  id: number;
  title: string;
  description: string;
  rating_id: number;
  buyer_id: number;
  review_date: string;
  product_id: number;
  deal_id: number;
  like: number;
  dislike: number;
}
