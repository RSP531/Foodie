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
    <>
      <SearchBar
        input={input}
        onInputChange={setInput}
        onTermSubmit={() => searchApi(input)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
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
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          headerText={"Big Spender $$$$"}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
