import { View, Text, StyleSheet } from "react-native";
import Stat from "./Stat/Stat";

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Shop Status</Text>
      <View style={styles.statsContainer}>
        <Stat title="Items Replenished" value="2.2k" />
        <Stat title={"Total\nItems Sold"} value="3.6k" />
        <Stat title="Items Removed" value="12" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Montserrat-Bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 2,
  },
});

export default Stats;
