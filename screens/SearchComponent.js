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

export default SearchComponent;
