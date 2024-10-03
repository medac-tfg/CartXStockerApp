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
      <>
        <View style={styles.noPermissionContainer}>
          <Text style={styles.noPermissionText}>
            Please grant camera permissions to proceed with scanning.
          </Text>
          <Button title="Grant Permission" onPress={requestPermission} />
        </View>
        <TouchableOpacity style={styles.backButton} onPress={goBack}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
      </>
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
