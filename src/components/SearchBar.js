import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = ({ input, onInputChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome5 style={styles.iconStyle} name="search" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={input}
        onChangeText={e => onInputChange(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#BEE9E8",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,

    fontSize: 20
  },
  iconStyle: {
    fontSize: 40,
    alignSelf: "center",
    margin: 10,
    marginRight: 15
  }
});

export default SearchBar;
