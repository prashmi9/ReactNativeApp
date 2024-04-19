//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Pressable,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Carousel from "react-native-snap-carousel";
import ImageView from "../components/ImageView";
import { getShops } from "../database";
import * as SQLite from "expo-sqlite";

const imageData = [
  {
    image: "winebottles",
    title: "Finca Las Moras",
    description: "Lorem ipsum simply dummy text",
    price: "$22.50",
    discounted: "$18.50",
  },
  {
    image: "salad",
    title: "Fruit Salad",
    description: "Simply dummy text",
    price: "$24.50",
    discounted: "$18.00",
  },
  // ... more items
];

// create a component
const HomeScreen = ({ navigation }) => {
  const colorShceme = useColorScheme();
  const [getShopData, setShopData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // const shops = await getShops();
        // setShopData(shops);
        // console.log("in home getshops", getShopData);
      } catch (error) {
        console.log("Error in fetching shop data", error);
      }
    })();
  }, []);

  const renderImageItem = ({ item }) => (
    <View style={styles.slide}>
      <ImageView imageName={item.image} />
      <View style={styles.descSection}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.discounted}</Text>
          <Text style={styles.crossedPrice}>{item.price}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <>
      <View
        style={[
          styles.container,
          colorShceme === "light"
            ? { backgroundColor: "#FFFFFF" }
            : { backgroundColor: "#CDDC39" },
        ]}
      >
        <View style={styles.IconWrapper}>
          <Icon
            name="notifications-circle"
            size={60}
            style={styles.notificationBell}
          />
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.HeaderText}>Hello, There</Text>
          <Text style={styles.subheadingText}>What do you want to shop?</Text>
        </View>
        <View style={styles.OfferSectionWrapper}>
          <Text style={styles.HeaderText}>Today's Offer</Text>
          <Pressable onPress={() => navigation.navigate("Promo")}>
            <Text style={styles.SeeAllText}>See All</Text>
          </Pressable>
        </View>
        <View style={styles.CarouselView}>
          <Carousel
            data={imageData}
            renderItem={renderImageItem}
            sliderWidth={410}
            itemWidth={340}
          />
        </View>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 0,
  },
  sectionWrapper: {
    margin: 0,
    paddingLeft: 20,
  },
  IconWrapper: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  notificationBell: {
    color: "#f35658",
  },
  OfferSectionWrapper: {
    flexDirection: "row",
    justifyContent: "start",
    marginTop: 100,
    paddingLeft: 20,
  },
  SeeAllText: {
    color: "#f35658",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 100,
    alignSelf: "flex-end",
  },
  HeaderText: {
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "left",
  },
  subheadingText: {
    fontSize: 24,
    color: "grey",
    textAlign: "left",
    marginTop: 20,
  },
  CarouselView: {
    height: 400,
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
  },
  slide: {
    justifyContent: "left",
    alignItems: "center",
  },
  descSection: {
    alignItems: "left",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#FFFFFF",
    width: 280,
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
  description: {
    fontSize: 20,
    color: "#333333",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  crossedPrice: {
    fontSize: 20,
    textDecorationLine: "line-through",
    color: "grey",
    marginLeft: 10,
  },
});

//make this component available to the app
export default HomeScreen;
