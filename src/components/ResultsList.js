import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ headerText, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{headerText}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultDetail restaurantName={item.name} result={item} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultsList;
