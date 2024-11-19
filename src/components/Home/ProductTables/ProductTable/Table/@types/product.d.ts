import { Product } from "../../../../../../screens/Home/@types/table";

export type ProductTableProps = {
  productList: Product[];
};

export type ProductRenderItemProps = {
  item: Product;
};