import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather name="plus" size={32} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "green",
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Footer;
