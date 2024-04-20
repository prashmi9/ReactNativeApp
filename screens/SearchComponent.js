//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SectionList,
  FlatList,
  TextInput,
} from "react-native";
const image = require("../assets/images/restobanner2.jpeg");
import { getShops, getMenuItems } from "../database";
import { getSectionListData } from "../components/utils";
import Icon from "react-native-vector-icons/Ionicons";
// create a component
const Item = ({ id, name, address, reviews, menuitems }) => (
  <View key={id} style={styles.listContainer}>
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <Icon
          name="star-outline"
          size={25}
          color="#eda345"
          style={styles.iconStar}
        />
        <Text style={styles.ratingStar}>{reviews}</Text>
      </View>
    </View>
    <View style={styles.horizontalLine}></View>
    {menuitems.map((menu) => {
      return (
        <View>
          <Text style={styles.meniItem}>{menu.item}</Text>
          <Text style={styles.menuPrice}>${menu.price}</Text>
          <Text style={styles.discountedPrice}>${menu.discounted}</Text>
        </View>
      );
    })}
  </View>
);
const SearchComponent = ({ navigation }) => {
  const [shopData, setShopData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const [shops, menuitems] = await Promise.all([
          getShops(),
          getMenuItems(),
        ]);
        if (shops.length === 0 && menuitems.length === 0) {
          console.log("No shops and menu items found");
          return;
        } else {
          const sections = await getSectionListData(shops, menuitems);
          setShopData(sections);
        }
      } catch (error) {
        console.log("Error in Search fetching shop data", error);
      }
    })();
  }, []);

  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <View style={styles.container}>
          <TextInput
            placeholder="Search"
            value={searchText}
            style={styles.searchTextbox}
            onChangeText={(text) => setSearchText(text)}
            keyboardType="default"
          />
        </View>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <FlatList
              data={shopData}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  name={item.shopname}
                  address={item.address}
                  reviews={item.reviews}
                  menuitems={item.data}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  horizontalLine: {
    borderBottomColor: "#efeff2",
    borderBottomWidth: 4,
    borderRadius: 10,
    marginBottom: 10,
  },

  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "15%",
  },
  ratingStar: {
    fontSize: 20,
    color: "#000000",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  meniItem: {
    fontSize: 25,

    color: "#3e4562",
    textAlign: "left",
  },
  menuPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#7e7e7e",
    textAlign: "left",
  },
  discountedPrice: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#cacaca",
    textAlign: "left",
    textDecorationLine: "line-through",
  },
  listContainer: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3e4562",
    textAlign: "left",
  },
  address: {
    fontSize: 20,
    color: "#6f6f6f",
    textAlign: "left",
  },
  searchTextbox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
  },
  container: {
    width: "90%",
    marginTop: 20,
  },
  topBar: {
    width: "100%",
    padding: 0,
    marginBottom: 70,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "left",
  },
  img: {
    width: "100%",
    height: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
  },
});

//make this component available to the app
export default SearchComponent;
