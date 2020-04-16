import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Other App goes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
