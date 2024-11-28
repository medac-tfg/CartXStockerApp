import { ProductData } from "../../@types/product";

export type AlertModalProps = {
  visible: boolean;
  message: string;
  actions: { text: string; onPress: () => void }[];
  onRequestClose: () => void;
};