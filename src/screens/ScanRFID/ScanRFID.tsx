import LottieView from "lottie-react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ScanRFID = () => {
  const { goBack } = useNavigation<any>();
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
