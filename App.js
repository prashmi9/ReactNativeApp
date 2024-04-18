import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import RootComponent from "./screens/RootComponent";

export default function App() {
  return (
    <>
      <RootComponent />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 2,
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  },
  viewContainer: {
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: "#2c3e50",
    margin: 0,
    padding: 0,
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    margin: 20,
  },
  textStyle: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    marginTop: 20,
  },
});
