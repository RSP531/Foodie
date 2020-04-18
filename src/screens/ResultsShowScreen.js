import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);

  const [businessInfo, setBusinessInfo] = useState(null);
  const [errMsg, setErr] = useState("");

  useEffect(() => {
    getBusinessInfo(id);
  }, []);

  const getBusinessInfo = async id => {
    try {
      const res = await yelp.get(`/${id}`);
      console.log(res.data);
      setBusinessInfo(res.data);
    } catch (err) {
      setErr("Something went wrong");
    }
  };

  if (!businessInfo) {
    return null;
  }
  return (
    <View>
      <Text>{businessInfo.name}</Text>
      <FlatList
        data={businessInfo.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
