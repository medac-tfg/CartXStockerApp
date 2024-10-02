import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ScanProductHint = () => {
  const { navigate, goBack } = useNavigation<any>();

  const onOkayPress = () => navigate("ScanBarcode");

  return (
    <>
      <TouchableOpacity style={styles.overlay} onPress={goBack} />
      <View style={styles.container}>
        <Text style={styles.title}>Scan Product</Text>
        <Text style={styles.subtitle}>
          Pick up any product and scan its barcode
        </Text>

        <LottieView
          autoPlay
          style={styles.lottie}
          source={require("../../assets/lottie/scanProduct.json")}
        />

        <TouchableOpacity style={styles.button} onPress={onOkayPress}>
          <Text style={styles.buttonText}>Okay, Got it!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Montserrat-SemiBold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
  lottie: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  button: {
    height: 50,
    width: "100%",
    backgroundColor: "green",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
  },
});

export default ScanProductHint;
