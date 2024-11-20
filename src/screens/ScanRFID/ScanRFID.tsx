import React, { useState, useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { scanProduct } from "../../api/endpoints/rfid";

import { ScanRFIDRouteProp } from "./@types/route";

const ScanRFID = ({ route }: { route: ScanRFIDRouteProp }) => {
  const buffer = useRef("");
  const inputRef = useRef<TextInput>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isScanning, setIsScanning] = useState(true);

  const { goBack } = useNavigation();

  useEffect(() => {
    if (!inputRef.current) return;

    // Focus the TextInput once the component mounts
    inputRef.current.focus();
  }, []);

  const handleChangeText = (text: string) => {
    buffer.current += text;

    // Clear timeout so we start another one again
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If we didn't get any more input for 500ms, we assume the scanner has typed the full RFID tag
    timeoutRef.current = setTimeout(async () => {
      setIsScanning(false);

      const data = await scanProduct(
        route.params.productData._id,
        buffer.current
      );
      if (!data) {
        Alert.alert("Error", "Could not scan RFID tag. Product not found.");
        return;
      }

      console.log("Scanned Data:", buffer.current);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.step}>Step 2</Text>
        <Text style={styles.title}>Scan RFID Tag</Text>
      </View>
      <LottieView
        autoPlay
        style={styles.lottie}
        source={require("../../assets/lottie/scanRFID.json")}
      />
      {isScanning && (
        <TextInput
          ref={inputRef}
          style={{ height: 0, opacity: 0 }}
          autoFocus={true}
          value=""
          onChangeText={handleChangeText}
          keyboardType="default"
          blurOnSubmit={false}
          showSoftInputOnFocus={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
  textContainer: {
    position: "absolute",
    top: 120,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
  lottie: {
    width: 450,
    height: 450,
    alignSelf: "center",
    marginRight: -25,
  },
});

export default ScanRFID;
