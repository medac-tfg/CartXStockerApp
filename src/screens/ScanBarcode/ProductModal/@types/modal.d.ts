import { ProductData } from "../../@types/product";

export type ProductModalProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  productData: ProductData | undefined;
  handleProductConfirmation: (confirmed: boolean) => void;
};