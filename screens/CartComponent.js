import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import commonStyles from "../styles/style";
const image = require("../assets/images/restobanner2.jpeg");
const Item = ({ price, name, quantity }) => (
  <View style={commonStyles.cartListContainer}>
    <Text style={commonStyles.menuItem}>{name}</Text>
    <Text style={commonStyles.menuItem}>{quantity}</Text>
    <View style={commonStyles.priceContainer}>
      <Text style={commonStyles.itemPrice}>${price * quantity}</Text>
    </View>
  </View>
);
const CartComponent = ({ navigation }) => {
  const product = useSelector((state) => state.cart.productToCart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    let qtyPrice = 0;
    product.forEach((item) => {
      qtyPrice = parseInt(item.price) * parseInt(item.qty);
      total += parseInt(qtyPrice);
    });
    setTotalPrice(total.toFixed(2));
  }, [product]);
  placeOrder = () => {
    console.log("Order placed");
  };
  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={commonStyles.cartImg}
      >
        <View style={commonStyles.cartTopBar}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={commonStyles.backButton}
          >
            <Icon name="chevron-back-circle" size={45} color="white" />
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={commonStyles.heartButton}
          >
            <Icon name="heart-circle" size={45} color="white" />
          </Pressable>
        </View>

        <View style={commonStyles.cartContainer}>
          <Text style={commonStyles.titleText}>The Corner Shop</Text>
          <Text style={commonStyles.subText}>Stanmore London</Text>
          <Text style={commonStyles.normalText}>
            Open <Text style={commonStyles.subText}> 8am - 8pm</Text>
          </Text>
          <View style={commonStyles.reviewsBar}>
            <View>
              <Icon name="location-outline" size={30} color="#eda345" />
              <Text style={commonStyles.normalText}>1 Km</Text>
            </View>
            <View>
              <Icon name="star-outline" size={30} color="#eda345" />
              <Text style={commonStyles.normalText}>4.5</Text>
            </View>
            <View>
              <Icon name="checkmark-circle-outline" size={30} color="#eda345" />
              <Text style={commonStyles.normalText}>Verified</Text>
            </View>
          </View>
        </View>
        <View style={commonStyles.menuListContainer}>
          <Text style={commonStyles.cartListTitle}>Items added to Cart</Text>

          <View style={commonStyles.flatListContainer}>
            <FlatList
              data={product}
              renderItem={({ item }) => (
                <Item price={item.price} name={item.item} quantity={item.qty} />
              )}
            />
          </View>
          <View style={commonStyles.buttonContainer}>
            <TouchableOpacity
              style={commonStyles.button}
              onPress={() => placeOrder()}
            >
              <View style={commonStyles.totalContainer}>
                <Text style={commonStyles.buttonText}>Place Order</Text>
                <Text style={commonStyles.buttonTotalText}>${totalPrice}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CartComponent;
