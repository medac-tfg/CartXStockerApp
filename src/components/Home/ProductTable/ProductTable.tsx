import { View, StyleSheet } from "react-native";

import { ProductTableProps } from "../../../screens/Home/@types/table";

import Header from "./Header/Header";
import Search from "./Search/Search";
import Table from "./Table/Table";

const ProductTable = ({ item }: ProductTableProps) => {
  return (
    <View style={styles.container}>
      <Header title={item.title} />
      <View style={styles.productContainer}>
        <Search />
        <Table productList={item.productList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "92.5%",
    marginTop: 20,
    alignSelf: "center",
  },
  productContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ProductTable;
