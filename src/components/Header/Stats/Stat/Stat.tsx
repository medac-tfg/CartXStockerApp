import { View, Text, StyleSheet } from "react-native";

import { StatProps } from "./@types/stat";

const Stat = ({ title, value }: StatProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "31.5%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 10,
  },
  statTitle: {
    fontSize: 14,
    color: "#000",
    fontFamily: "Montserrat-Medium",
  },
  statValue: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Montserrat-Bold",
  },
});

export default Stat;
