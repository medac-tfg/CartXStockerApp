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

import Overlay from "./Overlay/Overlay";

const width = Dimensions.get("window").width;

const ScanBarcode = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [barcodeScanned, setBarcodeScanned] = useState(false);
  const { navigate, goBack } = useNavigation<any>();

  const onBarcodeScanned = (barcodeScanResult: BarcodeScanningResult) => {
    Alert.alert("Barcode Scanned", barcodeScanResult.data);
    setBarcodeScanned(true);

    navigate("ScanRFID");
  };

  if (!permission || !permission.granted) {
    return (
      <View>
        <Text>Please grant camera permissions.</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <>
      <CameraView
        facing="back"
        style={styles.camera}
        onBarcodeScanned={barcodeScanned ? undefined : onBarcodeScanned}
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
    </>
  );
};

const styles = StyleSheet.create({
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
