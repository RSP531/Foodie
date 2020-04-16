import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}> {result.name}</Text>
      <Text style={styles.rating}>
        {" "}
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4
    // marginBottom: 5
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  rating: {
    fontSize: 12
  }
});

export default ResultDetail;
