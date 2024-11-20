import { useState } from "react";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getProductByBarcode } from "../../api/endpoints/barcode";

import Overlay from "./Overlay/Overlay";
import Modal from "./ProductModal/ProductModal";

import { ProductData } from "./@types/product";

const width = Dimensions.get("window").width;

const ScanBarcode = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [barcodeScanned, setBarcodeScanned] = useState(false);
  const [productData, setProductData] = useState<ProductData>();
  const [modalVisible, setModalVisible] = useState(false);
  const { navigate, goBack } = useNavigation<any>();

  const onBarcodeScanned = async (barcodeScanResult: BarcodeScanningResult) => {
    try {
      const barcode = barcodeScanResult.data;
      setBarcodeScanned(true);

      const data = await getProductByBarcode(barcode);
      if (!data) {
        Alert.alert("Error", "Product not found.", [
          {
            text: "OK",
            onPress: () => {
              setTimeout(() => setBarcodeScanned(false), 2000);
            },
          },
        ]);
        return;
      }

      setProductData(data);
      setModalVisible(true);
    } catch (error) {
      console.error("Error fetching product data:", error);
      Alert.alert("Error", "An error occurred while fetching product data.", [
        {
          text: "OK",
          onPress: () => {
            setTimeout(() => setBarcodeScanned(false), 2000);
          },
        },
      ]);
    }
  };

  const handleProductConfirmation = (confirmed: boolean) => {
    setModalVisible(false);
    if (confirmed) {
      navigate("ScanRFID", { productData });
      return;
    }

    setTimeout(() => setBarcodeScanned(false), 2000);
  };

  if (!permission || !permission.granted) {
    return (
      <View style={styles.noPermissionContainer}>
        <Text style={styles.noPermissionText}>
          Please grant camera permissions to proceed with scanning.
        </Text>
        <Button title="Grant Permission" onPress={requestPermission} />
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <CameraView
        facing="back"
        style={styles.camera}
        onBarcodeScanned={barcodeScanned ? undefined : onBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: [
            "ean13",
            "ean13",
            "ean8",
            "upc_e",
            "code39",
            "code93",
            "itf14",
            "codabar",
            "code128",
          ],
        }}
      >
        <Overlay />
      </CameraView>

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.step}>Step 1</Text>
        <Text style={styles.title}>Scan Product Barcode</Text>
      </View>

      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        productData={productData}
        handleProductConfirmation={handleProductConfirmation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  noPermissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noPermissionText: {
    fontSize: 20,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 15,
    textAlign: "center",
  },
  camera: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    marginTop: 120,
  },
  step: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat-Medium",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Montserrat-SemiBold",
  },
});

export default ScanBarcode;
