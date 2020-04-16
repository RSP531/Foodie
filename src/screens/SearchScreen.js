import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    searchApi("food");
  });

  const searchApi = async searchInput => {
    try {
      const res = await yelp.get("/search", {
        params: {
          searchInput,
          limit: 50,
          location: "Harrisonburg, va"
        }
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErr("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onTermSubmit={() => searchApi(input)}
      />
      {err ? <Text>{err}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
