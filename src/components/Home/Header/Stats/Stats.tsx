import { View, Text, StyleSheet } from "react-native";
import { useStats } from "../../../../api/hooks/useStats";

import Stat from "./Stat/Stat";

const Stats = () => {
  const { data } = useStats();

  const formatNumber = (num: number = 0) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Shop Status</Text>
      <View style={styles.statsContainer}>
        <Stat
          title="Total Products"
          value={formatNumber(data?.productsCount)}
        />
        <Stat
          title={"Total\nItems Sold"}
          value={formatNumber(data?.soldProductsCount)}
        />
        <Stat
          title="Items Replenished"
          value={formatNumber(data?.scannedProductsCount)}
        />
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
