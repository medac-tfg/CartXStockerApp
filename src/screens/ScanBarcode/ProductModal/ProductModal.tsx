import { Modal, View, Text, Image, Button, StyleSheet } from "react-native";
import { ProductModalProps } from "./@types/modal";

const ProductModal = ({
  visible,
  setVisible,
  productData,
  handleProductConfirmation,
}: ProductModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.productName}>
            Product: {productData?.barcode || "Barcode"}
          </Text>
          {productData?.image && (
            <Image
              source={{ uri: productData.image }}
              style={styles.productImage}
            />
          )}
          <Text style={styles.productName}>
            {productData?.name || "Product Name"}
          </Text>
          <View style={styles.modalActions}>
            <Button
              title="Continue Product Scan"
              onPress={() => handleProductConfirmation(true)}
            />
            <Button
              title="Cancel"
              color="red"
              onPress={() => handleProductConfirmation(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default ProductModal;
