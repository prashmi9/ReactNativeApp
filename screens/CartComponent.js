//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
const image = require("../assets/images/restobanner2.jpeg");
const Item = ({ price, name, quantity }) => (
  <View style={styles.listContainer}>
    <Text style={styles.menuItem}>{name}</Text>
    <Text style={styles.menuItem}>{quantity}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.itemPrice}>${price * quantity}</Text>
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
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <View style={styles.TopBar}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="chevron-back-circle" size={45} color="white" />
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.heartButton}
          >
            <Icon name="heart-circle" size={45} color="white" />
          </Pressable>
        </View>

        <View style={styles.container}>
          <Text style={styles.titleText}>The Corner Shop</Text>
          <Text style={styles.subText}>Stanmore London</Text>
          <Text style={styles.normalText}>
            Open <Text style={styles.subText}> 8am - 8pm</Text>
          </Text>
          <View style={styles.reviewsBar}>
            <View>
              <Icon name="location-outline" size={30} color="#eda345" />
              <Text style={styles.normalText}>1 Km</Text>
            </View>
            <View>
              <Icon name="star-outline" size={30} color="#eda345" />
              <Text style={styles.normalText}>4.5</Text>
            </View>
            <View>
              <Icon name="checkmark-circle-outline" size={30} color="#eda345" />
              <Text style={styles.normalText}>Verified</Text>
            </View>
          </View>
        </View>
        <View style={styles.menuListContainer}>
          <Text style={styles.cartListTitle}>Items added to Cart</Text>

          <View style={styles.flatListContainer}>
            <FlatList
              data={product}
              renderItem={({ item }) => (
                <Item price={item.price} name={item.item} quantity={item.qty} />
              )}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => placeOrder()}
            >
              <View style={styles.totalContainer}>
                <Text style={styles.buttonText}>Place Order</Text>
                <Text style={styles.buttonTotalText}>${totalPrice}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  buttonText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  buttonTotalText: {
    color: "#ffffff",
    fontSize: 26,
  },
  buttonContainer: {
    padding: 20,
    backgroundColor: "#e84d4f",
    borderRadius: 10,
  },
  flatListContainer: {
    borderWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
    marginBottom: 10,
    height: 250,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuListContainer: {
    marginTop: 10,
    backgroundColor: "white",
    width: "100%",
    height: "80%",
    padding: 20,
  },
  reviewsBar: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
    width: "100%",
  },
  titleText: { fontSize: 30, color: "black" },
  subText: { fontSize: 20, color: "grey" },
  normalText: {
    fontSize: 20,
    color: "black",
  },
  TopBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heartButton: {
    marginTop: 20,
    marginRight: 20,
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width: 360,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  cartListTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3e4562",
    textAlign: "left",
  },
  listContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "left",
  },
  menuItem: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    textAlign: "left",
  },
});

//make this component available to the app
export default CartComponent;
