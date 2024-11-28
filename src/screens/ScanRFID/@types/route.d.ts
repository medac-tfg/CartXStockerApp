import { RouteProp } from "@react-navigation/native";
import { ProductData } from "../../ScanBarcode/@types/product";

export type ScanRFIDRouteProp = StackScreenProps<
  { params: { productData: ProductData } },
  "params"
>;
