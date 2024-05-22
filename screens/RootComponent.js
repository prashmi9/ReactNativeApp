//import liraries
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "./HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import CartComponent from "./CartComponent";
import SearchComponent from "./SearchComponent";
const shopsData = require("../assets/data/shops.json");
const Menuitems = require("../assets/data/menuitems.json");
import commonStyles from "../styles/style";
import {
  createShopsTable,
  createMenuTable,
  insertShopDetails,
  insertMenuItem,
  emptyShopsTable,
  emptyMenuItemsTable,
} from "../database";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopData } from "../store/menuitems/menuSlice";
import MenulistComponent from "./MenulistComponent";
const Tab = createBottomTabNavigator();
// create a component
const RootComponent = () => {
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
  const shopDispatch = useDispatch();
  const [shopData, setShopData] = useState(shopsData);
  const [menuData, setMenuData] = useState(Menuitems);
  const [insertedData, setInsertedData] = useState(false);
  useEffect(() => {
    fetch("http://10.0.2.2:5000/shopsdata")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        shopDispatch(fetchShopData(data));
      });
  }, []);
  useEffect(() => {
    (async () => {
      try {
        await createShopsTable();
        await createMenuTable();
        await emptyShopsTable();
        await emptyMenuItemsTable();
        // await showTableColumns();
        if (insertedData) return;
        shopData.shops.forEach(async (shop) => {
          await insertShopDetails(
            shop.shopid.toString(),
            shop.shopname.toString(),
            shop.shopaddress.toString(),
            shop.reviews.toString()
          );

          setInsertedData(true);
        });
        menuData.menuitems.forEach(async (menu) => {
          await insertMenuItem(
            menu.id.toString(),
            menu.shopid.toString(),
            menu.item.toString(),
            menu.imagename.toString(),
            menu.description.toString(),
            menu.price.toString(),
            menu.discounted
          );
        });
      } catch (error) {
        console.log("Error in inserting shop data", error);
      }
    })();
  }, []);
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: commonStyles.nav,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Cart") {
                iconName = focused ? "cart" : "cart-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search-outline";
              } else if (route.name === "Welcome") {
                iconName = focused ? "person" : "person-outline";
              }
              return (
                <>
                  <Ionicons name={iconName} size={35} color={color} />
                  {cartItemsCount > 0 && route.name === "Cart" && (
                    <Text style={commonStyles.counter}>{cartItemsCount}</Text>
                  )}
                </>
              );
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarAllowFontScaling: true,
            tabBarLabelStyle: commonStyles.navText,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartComponent} />
          <Tab.Screen name="Search" component={MenulistComponent} />
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          {/* <Tab.Screen name="Promo" component={PromoComponent} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

//make this component available to the app
export default RootComponent;
