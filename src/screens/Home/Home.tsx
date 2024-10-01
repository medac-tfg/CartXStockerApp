import { View, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "#ECECEC",
  }
});

export default Home;
