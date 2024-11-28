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
} from "react-native";
import { useQueryClient } from "@tanstack/react-query";
import { scanProduct } from "../../api/endpoints/rfid";

import AlertModal from "../../components/ScanRFID/AlertModal/AlertModal";

import { ScanRFIDRouteProp } from "./@types/route";

const ScanRFID = ({ route }: { route: ScanRFIDRouteProp }) => {
  const { goBack } = useNavigation<any>();
  const [inputText, setInputText] = useState("");
  const [canScan, setCanScan] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalActions, setModalActions] = useState<
    { text: string; onPress: () => void }[]
  >([]);
  const inputRef = useRef<TextInput>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleScan = async ({
    nativeEvent: { text },
  }: {
    nativeEvent: { text: string };
  }) => {
    setInputText("");

    if (!canScan) return;

    setCanScan(false);

    if (text.length !== 24) {
      showModal("Invalid RFID tag. Please try again.", [
        { text: "OK", onPress: () => setCanScan(true) },
      ]);
      return;
    }

    const data = await scanProduct(route.params.productData._id, text);
    if (data?.error) {
      showModal(`Could not scan RFID tag. Reason: ${data.data}`, [
        { text: "OK", onPress: () => setCanScan(true) },
      ]);
      return;
    }

    await queryClient.invalidateQueries({ queryKey: ["stats"] });
    await queryClient.invalidateQueries({ queryKey: ["lastStoredProducts"] });
    await queryClient.invalidateQueries({ queryKey: ["topSoldItems"] });
    
    showModal("RFID tag scanned successfully.", [
      {
        text: "Scan Another (same product)",
        onPress: () => setCanScan(true),
      },
      {
        text: "Go Back",
        onPress: goBack,
      },
    ]);
  };

  const showModal = (
    message: string,
    actions: { text: string; onPress: () => void }[]
  ) => {
    setModalMessage(message);
    setModalActions(actions);
    setModalVisible(true);
  };

  return (
    <>
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
        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleScan}
          submitBehavior="submit"
          onBlur={() => inputRef.current?.focus()}
          autoFocus
        />
      <AlertModal
        visible={modalVisible}
        message={modalMessage}
        actions={modalActions}
        onRequestClose={() => setModalVisible(false)}
      />
      </View>
    </>
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
  hiddenInput: {
    position: "absolute",
    top: -1000,
    left: -1000,
    height: 0,
    width: 0,
  },
});

export default ScanRFID;
