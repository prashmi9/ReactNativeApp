import React from "react";
import { View, Text, Pressable } from "react-native";
import commonStyles from "../styles/style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Pressable
        style={commonStyles.buttonCloseContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={commonStyles.buttonCloseText}>Login</Text>
      </Pressable>
    </View>
  );
};
export default WelcomeScreen;
