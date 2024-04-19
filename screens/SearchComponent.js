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
import { getShops } from "../database";
import { getSectionListData } from "../components/utils";
// create a component
const Item = ({ id, name, address }) => (
  <View key={id} style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.title}>{address}</Text>
  </View>
);
const SearchComponent = ({ navigation }) => {
  const [shopData, setShopData] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    (async () => {
      try {
        await getShops()
          .then((shops) => {
            if (shops.length === 0) {
              console.log("No shops found");
              return;
            } else {
              const sections = getSectionListData(shops);
              setShopData(shops);
            }
          })
          .catch((error) => {
            console.log("Error in Search fetching shop data", error);
          });
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
            <Text style={styles.heading}>The Corner Shop</Text>
            <FlatList
              data={shopData}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  name={item.shopname}
                  address={item.address}
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
  searchTextbox: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    paddingLeft: 10,
  },
  container: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    marginTop: 20,
  },
  topBar: {
    width: "100%",
    padding: 10,
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
