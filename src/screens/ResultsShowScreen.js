import React from "react";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
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

  return (
    <View>
      <Text>REsults {id}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ResultsShowScreen;
