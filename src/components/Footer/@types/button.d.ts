import { SharedValue } from "react-native-reanimated";

export type FloatingActionButtonProps = {
  isExpanded: SharedValue<boolean>;
  index: number;
  IconProvider: any;
  icon: string;
  label: string;
  targetScreen: string;
  color: string;
};