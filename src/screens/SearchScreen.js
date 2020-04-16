import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [input, setInput] = useState("");

  return (
    <View>
      <SearchBar input={input} onInputChange={e => setInput(e)} />
      <Text>Other App goes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
