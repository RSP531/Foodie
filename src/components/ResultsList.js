import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ headerText, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{headerText}</Text>
      {/* <Text>Results: {results.length}</Text> */}
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  },
  titleStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  }
});

export default ResultsList;
