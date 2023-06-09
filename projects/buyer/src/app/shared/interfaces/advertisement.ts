export interface Advertisement {
  id: number;
  title: string;
  description: string;
  for_profile: boolean;
  products_id: number[];
  date_start: string;
  date_end: string;
  num_views: string;
  pay: number;
  keywords_id: number[];
  categories_id: number[];
}
