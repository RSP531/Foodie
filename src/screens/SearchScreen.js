import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [searchApi, results, errMsg] = useResults();

  return (
    <View>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onTermSubmit={() => searchApi(input)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList headerText={"Cost Effective"} />
      <ResultsList headerText={"More Expensive"} />
      <ResultsList headerText={"Most Expensive $$$$"} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
