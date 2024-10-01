import { View, Text, StyleSheet } from "react-native";

import Greetings from "./Greetings/Greetings";
import Stats from "./Stats/Stats";

const Header = () => {
  return (
    <View style={styles.container}>
      <Greetings />
      <Stats />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 55,
    paddingHorizontal: 17.5,
    paddingBottom: 15,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default Header;
