import { ScrollView, StyleSheet } from "react-native";

import Header from "../../components/Home/Header/Header";
import LastStoredProducts from "../../components/Home/ProductTables/LastStoredProducts";
import TopSoldItems from "../../components/Home/ProductTables/TopSoldItems";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
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
