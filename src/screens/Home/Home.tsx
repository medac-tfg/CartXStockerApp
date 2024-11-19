import { ScrollView, StyleSheet } from "react-native";
import Header from "../../components/Home/Header/Header";

import { ProductTableProps } from "./@types/table";
import Footer from "../../components/Footer/Footer";
import LastStoredProducts from "../../components/Home/ProductTables/LastStoredProducts";
import TopSoldItems from "../../components/Home/ProductTables/TopSoldItems";

const Home = () => {
  const data = [
    {
      id: "last_stored_products",
      title: "Last Stored Products",
      productList: [
        {
          id: "1",
          name: "Leche Pascual",
          image: require("../../assets/images/productLeche.jpg"),
          weight: "1 Kg",
          quantity: "25",
        },
        {
          id: "2",
          name: "Huevos",
          image: require("../../assets/images/productHuevos.jpg"),
          weight: "2 L",
          quantity: "13",
        },
        {
          id: "3",
          name: "Pan Bimbo",
          image: require("../../assets/images/productPanBimbo.jpg"),
          weight: "1 Kg",
          quantity: "6",
        },
      ],
    },
    {
      id: "top_sold_items",
      title: "Top Sold Items",
      productList: [
        {
          id: "1",
          name: "Cerveza",
          image: require("../../assets/images/productCerveza.jpg"),
          weight: "1 Kg",
          quantity: "259",
        },
        {
          id: "2",
          name: "Arroz",
          image: require("../../assets/images/productArroz.jpg"),
          weight: "2 L",
          quantity: "201",
        },
        {
          id: "3",
          name: "Coca Cola",
          image: require("../../assets/images/productCocaCola.jpg"),
          weight: "1 Kg",
          quantity: "152",
        },
      ],
    },
  ];

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
