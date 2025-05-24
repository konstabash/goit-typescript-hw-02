export interface ImageUrls {
  small: string;
  regular: string;
}

export interface ItemHit {
  id: string;
  description: string;
  alt_description: string;
  urls: ImageUrls;
}

export interface Hits {
  results: ItemHit[];
  total_pages: number;
}
