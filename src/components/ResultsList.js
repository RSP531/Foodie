import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ headerText, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{headerText}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
    marginBottom: 3
  },
  titleStyle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultsList;
