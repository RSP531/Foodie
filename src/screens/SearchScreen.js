import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [input, setInput] = useState("");
  const [searchApi, results, errMsg] = useResults();

  const filterResultsByPrice = price => {
    //price === '$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onTermSubmit={() => searchApi(input)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList
        results={filterResultsByPrice("$")}
        headerText={"Cost Effective"}
      />
      <ResultsList
        results={filterResultsByPrice("$$")}
        headerText={"Treat Yo Self"}
      />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        headerText={"Big Spender $$$$"}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
