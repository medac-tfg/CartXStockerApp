import { StackNavigationProp } from "@react-navigation/stack";
import { ProductData } from "./product";

type RootStackParamList = {
  ScanRFID: { productData: ProductData | undefined };
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
