import { Product } from "../../@types/table";

export type ProductTableProps = {
  productList: Product[];
};

export type ProductRenderItemProps = {
  item: Product;
  index: number;
};