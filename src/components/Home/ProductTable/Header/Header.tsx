import { Text, StyleSheet } from "react-native";

import { ProductTableHeaderProps } from "./@types/header";

const Header = ({ title }: ProductTableHeaderProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Montserrat-Bold",
  },
});

export default Header;
