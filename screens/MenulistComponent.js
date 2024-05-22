import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, FlatList, TextInput } from "react-native";
const image = require("../assets/images/restobanner2.jpeg");
import Icon from "react-native-vector-icons/Ionicons";
import ImageView from "../components/ImageView";
import AddToCartButton from "../components/CustomButton";
import commonStyles from "../styles/style";
import { useSelector } from "react-redux";

const Item = ({ id, item, price, discounted, description, imagename }) => (
  <View style={commonStyles.listContainer}>
    <View style={commonStyles.cardContainer}>
      <ImageView imageName={imagename} css={commonStyles.cardImg} />

      <View style={commonStyles.descContainer}>
        <Text style={commonStyles.meniItem}>{item}</Text>
        <View style={commonStyles.priceContainer}>
          <Text style={commonStyles.menuPrice}>${price}</Text>
          <Text style={commonStyles.discountedPrice}>${discounted}</Text>
        </View>
        <AddToCartButton id={id} item={item} price={price} />
      </View>
    </View>
  </View>
);
const MenulistComponent = ({}) => {
  const shopFromStore = useSelector((state) => state.menu.shopdata);
  const [searchText, setSearchText] = useState("");

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
        <View style={commonStyles.shopDataContainer}>
          <View style={commonStyles.titleContainer}>
            <View>
              <Text style={commonStyles.title}>{shopFromStore.shopname}</Text>
              <Text style={commonStyles.address}>
                {shopFromStore.shopaddress}
              </Text>
            </View>
            <View style={commonStyles.ratingContainer}>
              <Icon
                name="star-outline"
                size={25}
                color="#eda345"
                style={commonStyles.iconStar}
              />
              <Text style={commonStyles.ratingStar}>
                {shopFromStore.reviews}
              </Text>
            </View>
          </View>
          <View style={commonStyles.horizontalLine}></View>
          <View style={commonStyles.menuListTopBar}>
            <FlatList
              data={shopFromStore.menuitems}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  item={item.item}
                  price={item.price}
                  discounted={item.discounted}
                  description={item.description}
                  imagename={item.imagename}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MenulistComponent;
