import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
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
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
