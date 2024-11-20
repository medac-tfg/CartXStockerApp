import React, { useState } from "react";
import { ScrollView, StyleSheet, RefreshControl } from "react-native";
import { useQueryClient } from "@tanstack/react-query";

import Header from "../../components/Home/Header/Header";
import LastStoredProducts from "../../components/Home/ProductTables/LastStoredProducts";
import TopSoldItems from "../../components/Home/ProductTables/TopSoldItems";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      // Invalidate all status queries
      await queryClient.invalidateQueries({ queryKey: ["stats"] });
      await queryClient.invalidateQueries({ queryKey: ["lastStoredProducts"] });
      await queryClient.invalidateQueries({ queryKey: ["topSoldItems"] });
    } catch (error) {
      console.error("Error invalidating queries:", error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header />
        <LastStoredProducts />
        <TopSoldItems />
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

export default Home;
