//import liraries
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./WelcomeScreen";
import HomeScreen from "./HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import CartComponent from "./CartComponent";
import SearchComponent from "./SearchComponent";
const shopsData = require("../assets/data/shops.json");
const Menuitems = require("../assets/data/menuitems.json");
import {
  createShopsTable,
  createMenuTable,
  insertShopDetails,
  insertMenuItem,
  emptyShopsTable,
  emptyMenuItemsTable,
} from "../database";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// create a component
const RootComponent = () => {
  const [shopData, setShopData] = useState(shopsData);
  const [menuData, setMenuData] = useState(Menuitems);
  const [insertedData, setInsertedData] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await createShopsTable();
        await createMenuTable();
        await emptyShopsTable();
        await emptyMenuItemsTable();
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
            tabBarStyle: styles.nav,
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
              return <Ionicons name={iconName} size={35} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarAllowFontScaling: true,
            tabBarLabelStyle: styles.navText,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cart" component={CartComponent} />
          <Tab.Screen name="Search" component={SearchComponent} />
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          {/* <Tab.Screen name="Promo" component={PromoComponent} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  nav: {
    height: 80,
    fontSize: 20,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
  },
  navText: { fontSize: 15, lineHeight: 15, marginBottom: 5 },
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default RootComponent;
