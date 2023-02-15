export interface ICar {
  id: string;
  title: string;
  price: string;
  previewImg: string;
  detailUrl: string;
  description: string;
}

export interface ICarDetail {
  images: string[];
  description: string[];
}
