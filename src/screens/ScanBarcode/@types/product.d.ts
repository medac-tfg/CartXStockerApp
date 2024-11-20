export type ProductData = {
  _id: string;
  name: string;
  description?: string;
  image: string;
  priceNoVat?: number;
  tax?: number;
  weight?: number;
  category?: string;
  barcode: string;
  createdAt?: string;
};