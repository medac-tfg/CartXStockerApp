import { Image } from "expo-image";
import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning,";
  if (hour < 20) return "Good Afternoon,";
  return "Good Evening,";
};

const getFormattedDate = () =>
  new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Greetings = () => {
  const greeting = useMemo(() => getGreeting(), []);
  const formattedDate = useMemo(() => getFormattedDate(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {greeting}
        {"\n"}
        <Text style={styles.subTitle}>{formattedDate}</Text>
      </Text>
      <Image
        source={require("../../../assets/images/profilePicture.jpg")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "green",
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
  },
  subTitle: {
    color: "green",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 5,
  },
});

export default Greetings;
