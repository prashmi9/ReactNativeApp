//Plus button counter and minus button
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addProductToCart,
  removeProduct,
} from "../store/cart/cartSlice";

const AddToCartButton = (menuitem) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count < 1 ? 0 : count - 1);
  };
  const addQuantity = () => {
    increment();
    dispatch(addToCart());
    dispatch(addProductToCart({ product: menuitem }));
  };
  const removeQuantity = () => {
    decrement();
    dispatch(removeFromCart());
    dispatch(removeProduct({ product: menuitem }));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => removeQuantity()}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addQuantity()}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f5f3",
    width: 100,
    padding: 0,
  },
  button: {
    backgroundColor: "#e84d4f",
    padding: 0,
    margin: 0,
    borderRadius: 5,
    width: 40,
    height: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 26,
  },
  text: {
    color: "#3e4562",
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#f9f5f3",
    borderWidth: 1,
  },
  disabledButton: {
    backgroundColor: "#e1e1e1",
    padding: 10,
    margin: 10,
  },
});
export default AddToCartButton;
