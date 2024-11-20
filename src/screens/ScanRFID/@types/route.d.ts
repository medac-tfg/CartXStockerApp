import { RouteProp } from "@react-navigation/native";
import { ProductData } from "../../ScanBarcode/@types/product";

export type ScanRFIDRouteProp = RouteProp<
  { params: { productData: ProductData } },
  "params"
>;
