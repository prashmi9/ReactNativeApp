//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const QuantityLeft = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>${quantity} Left</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eda345",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
  },
});
export default QuantityLeft;
