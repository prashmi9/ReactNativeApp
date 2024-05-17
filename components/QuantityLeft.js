import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import commonStyles from "../styles/style";
const QuantityLeft = ({ quantity }) => {
  return (
    <View style={commonStyles.qtyContainer}>
      <Text style={commonStyles.text}>${quantity} Left</Text>
    </View>
  );
};

export default QuantityLeft;
