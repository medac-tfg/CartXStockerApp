import { StackNavigationProp } from "@react-navigation/stack";
import { ProductData } from "./product";

type RootStackParamList = {
  ScanRFID: { productData: ProductData | undefined };
  Home: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList> & {
  reset: (state: { index: number; routes: { name: "ScanRFID" | "Home" }[] }) => void;
};
