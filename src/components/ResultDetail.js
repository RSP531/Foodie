import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultDetail = ({ restaurantName }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>One Detail{restaurantName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultDetail;
