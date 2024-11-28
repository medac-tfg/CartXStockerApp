import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { ProductTableProps } from "./@types/product";
import { ProductRenderItemProps } from "./@types/product";

const Table = ({ productList }: ProductTableProps) => {
  const renderItem = ({ item, index }: ProductRenderItemProps) => (
    <View style={styles.row} key={index}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        contentFit="contain"
      />
      <Text style={styles.productName} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.productWeight} numberOfLines={1}>
        {item.weight}
      </Text>
      <Text style={styles.productQuantity} numberOfLines={1}>
        {item.quantity}
      </Text>

      <TouchableOpacity style={styles.confirmButton}>
        <Feather name="check" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Product</Text>
        <Text style={styles.headerText}>Weight</Text>
        <Text style={styles.headerText}>Quantity</Text>
      </View>

      {productList.length > 0 ? (
        productList.map((item, index) => renderItem({ item, index }))
      ) : (
        <Text style={styles.noProductsText}>No products found</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 10,
  },
  headerText: {
    flex: 1,
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    textAlign: "center",
  },
  noProductsText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  checkbox: {
    marginHorizontal: 10,
  },
  productImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
  },
  productName: {
    flex: 2,
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    maxWidth: 70,
    overflow: "hidden",
  },
  productWeight: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  productQuantity: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
  },
  editButton: {
    marginHorizontal: 10,
  },
  confirmButton: {
    marginLeft: -15,
  },
});

export default Table;
