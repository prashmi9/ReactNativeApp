//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const image = require("../assets/images/restobanner2.jpeg");

const CartComponent = ({ navigation }) => {
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
          <Text>Tabs</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  menuListContainer: {
    marginTop: 20,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
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
    marginTop: 60,
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
});

//make this component available to the app
export default CartComponent;
