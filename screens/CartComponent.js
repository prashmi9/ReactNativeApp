import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import commonStyles from "../styles/style";
const image = require("../assets/images/restobanner2.jpeg");
import { clearCart } from "../store/cart/cartSlice";
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
  const cartQty = useSelector((state) => state.cart.cartItemsCount);
  const [totalPrice, setTotalPrice] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatchClearCart = useDispatch();
  const [success, setSuccessMsg] = useState("");
  const [orderFail, setOrderFailed] = useState(false);
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
    const cartId = Math.floor(Math.random() * 1000) + 1;

    const cartData = {
      id: cartId.toString(),
      orderqty: cartQty,
      orderprice: totalPrice,
      itemlist: [product],
    };
    fetch("http://10.0.2.2:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(cartData),
    }).then((response) => {
      if (response.status == 201) {
        setSuccessMsg("Order placed successfully!");
        setModalVisible(!modalVisible);
      } else {
        setOrderFailed(true);
        setModalVisible(!modalVisible);
      }
    });
  };
  closeModal = () => {
    setModalVisible(!modalVisible);
    dispatchClearCart(clearCart());
    navigation.navigate("Home");
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
            <TouchableOpacity onPress={() => placeOrder()}>
              <View style={commonStyles.totalContainer}>
                <Text style={commonStyles.buttonText}>Place Order</Text>
                <Text style={commonStyles.buttonTotalText}>${totalPrice}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={commonStyles.centeredView}>
              {orderFail && (
                <View>
                  <Text>Order Failed</Text>
                  <View style={commonStyles.buttonCloseContainer}>
                    <TouchableOpacity
                      style={commonStyles.buttonText}
                      onPress={() => closeModal()}
                    >
                      <Text style={commonStyles.buttonCloseText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              {!orderFail && (
                <View style={commonStyles.modalView}>
                  <Text style={commonStyles.modalText}>{success}</Text>
                  <Text style={commonStyles.modalNormalText}>
                    Order Details
                  </Text>
                  <View style={commonStyles.flatListContainer}>
                    <FlatList
                      data={product}
                      renderItem={({ item }) => (
                        <Item
                          price={item.price}
                          name={item.item}
                          quantity={item.qty}
                        />
                      )}
                    />
                  </View>
                  <View style={commonStyles.buttonCloseContainer}>
                    <TouchableOpacity
                      style={commonStyles.buttonText}
                      onPress={() => closeModal()}
                    >
                      <Text style={commonStyles.buttonCloseText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CartComponent;
