import React from "react";
import { View, Text, Pressable } from "react-native";
import commonStyles from "../styles/style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Text>WelcomeScreen</Text>
      <Pressable
        style={commonStyles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={commonStyles.buttonText}>Go Back</Text>
      </Pressable>
    </View>
  );
};
export default WelcomeScreen;
