import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TextInput,
} from "react-native";
const image = require("../assets/images/restobanner2.jpeg");
import { getShops, getMenuItems } from "../database";
import { getSectionListData } from "../components/utils";
import Icon from "react-native-vector-icons/Ionicons";
import ImageView from "../components/ImageView";
import AddToCartButton from "../components/CustomButton";
import commonStyles from "../styles/style";

const Item = ({ id, name, address, reviews, menuitems }) => (
  <View key={id} style={commonStyles.listContainer}>
    <View style={commonStyles.titleContainer}>
      <View>
        <Text style={commonStyles.title}>{name}</Text>
        <Text style={commonStyles.address}>{address}</Text>
      </View>
      <View style={commonStyles.ratingContainer}>
        <Icon
          name="star-outline"
          size={25}
          color="#eda345"
          style={commonStyles.iconStar}
        />
        <Text style={commonStyles.ratingStar}>{reviews}</Text>
      </View>
    </View>
    <View style={commonStyles.horizontalLine}></View>
    {menuitems.map((menu, k) => {
      return (
        <View key={k} style={commonStyles.cardContainer}>
          <ImageView imageName={menu.imagename} css={commonStyles.cardImg} />

          <View style={commonStyles.descContainer}>
            <Text style={commonStyles.meniItem}>{menu.item}</Text>
            <View style={commonStyles.priceContainer}>
              <Text style={commonStyles.menuPrice}>${menu.price}</Text>
              <Text style={commonStyles.discountedPrice}>
                ${menu.discounted}
              </Text>
            </View>
            <AddToCartButton
              id={id + "" + k}
              item={menu.item}
              price={menu.price}
            />
          </View>
        </View>
      );
    })}
  </View>
);
const SearchComponent = ({}) => {
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
    return () => {
      console.log("Unmounting SearchComponent");
    };
  }, []);

  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={commonStyles.img}
      >
        <View style={commonStyles.searchContainer}>
          <TextInput
            placeholder="Search"
            value={searchText}
            style={commonStyles.searchTextbox}
            onChangeText={(text) => setSearchText(text)}
            keyboardType="default"
          />
        </View>
        <View style={commonStyles.searchContainer}>
          <View style={commonStyles.topBar}>
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
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderColor: "#cccccc",
    borderWidth: 1,
  },
  descContainer: {
    marginLeft: 20,
    width: "70%",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "start",
    marginBottom: 10,
    textAlign: "left",
  },
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
    fontSize: 18,
    color: "#000000",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  meniItem: {
    fontSize: 15,
    color: "#3e4562",
    textAlign: "left",
  },
  priceContainer: {
    flexDirection: "row",
  },
  menuPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#7e7e7e",
    textAlign: "left",
  },
  discountedPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#cacaca",
    textAlign: "left",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  listContainer: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3e4562",
    textAlign: "left",
  },
  address: {
    fontSize: 18,
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
    width: "95%",
    marginTop: 20,
  },
  topBar: {
    width: "100%",
    padding: 0,
    marginBottom: 70,
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

export default SearchComponent;
