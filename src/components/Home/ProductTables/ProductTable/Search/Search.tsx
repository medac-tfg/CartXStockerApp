import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";

import { SearchProps } from "../@types/search";

const Search = ({ searchText, setSearchText }: SearchProps) => {
  const clearSearch = () => {
    setSearchText("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="black" />
      <TextInput
        placeholder="Search Product"
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
      />
      {searchText ? (
        <TouchableOpacity onPress={clearSearch}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "100%",
    height: 40,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
  },
});

export default Search;
