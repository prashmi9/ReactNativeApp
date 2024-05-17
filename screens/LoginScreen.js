//import liraries
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";
import commonStyles from "../styles/style";

const LoginScreen = () => {
  const [lastName, setLastName] = useState("Hello");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      {loggedIn && (
        <>
          <Text>Welcome {lastName}</Text>
          <Pressable
            style={commonStyles.button}
            onPress={() => setLoggedIn(false)}
          >
            <Text style={commonStyles.buttonText}>Log out</Text>
          </Pressable>
        </>
      )}
      {!loggedIn && (
        <SafeAreaView keyboardDismissMode="on-drag">
          <Text>Login To Continue</Text>
          <TextInput
            style={commonStyles.textInput}
            placeholder="Email"
            value={lastName}
            onChangeText={setLastName}
            clearButtonMode="always"
          ></TextInput>
          <TextInput
            style={commonStyles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <Pressable
            style={commonStyles.button}
            onPress={() => {
              setLoggedIn(!loggedIn);
            }}
          >
            <Text style={commonStyles.buttonText}>Login</Text>
          </Pressable>
        </SafeAreaView>
      )}
    </KeyboardAvoidingView>
  );
};
export default LoginScreen;
