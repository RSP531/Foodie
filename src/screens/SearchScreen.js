import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const res = await yelp.get("/search", {
        params: {
          input,
          limit: 50,
          location: "Harrisonburg, va"
        }
      });
    } catch (err) {
      console.log(err);
    }
    setResults(res.data.businesses);
  };

  return (
    <View>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onTermSubmit={searchApi}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
