import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { ProductTableProps } from "../../../../screens/Home/@types/table";

import Header from "./Header/Header";
import Search from "./Search/Search";
import Table from "./Table/Table";

const ProductTable = ({ title, productList }: ProductTableProps) => {
  const [searchText, setSearchText] = useState("");

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header title={title} />
      <View style={styles.productContainer}>
        <Search searchText={searchText} setSearchText={setSearchText} />
        <Table productList={filteredProducts} />
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
