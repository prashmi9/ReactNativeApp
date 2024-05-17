import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addProductToCart,
  removeProduct,
} from "../store/cart/cartSlice";
import commonStyles from "../styles/style";

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
    <View style={commonStyles.addButtonContainer}>
      <TouchableOpacity
        style={commonStyles.customButton}
        onPress={() => removeQuantity()}
      >
        <Text style={commonStyles.customButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={commonStyles.counterText}>{count}</Text>
      <TouchableOpacity
        style={commonStyles.customButton}
        onPress={() => addQuantity()}
      >
        <Text style={commonStyles.customButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCartButton;
