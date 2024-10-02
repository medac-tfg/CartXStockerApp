import { ImageSourcePropType } from "react-native";

export type Product = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  weight: string;
  quantity: string;
};

export type ProductTableProps = {
  item: {
    id: string;
    title: string;
    productList: Product[];
  };
};
