//import liraries
import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";

// create a component
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
          <Pressable style={styles.button} onPress={() => setLoggedIn(false)}>
            <Text style={styles.buttonText}>Log out</Text>
          </Pressable>
        </>
      )}
      {!loggedIn && (
        <SafeAreaView keyboardDismissMode="on-drag">
          <Text>Login To Continue</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={lastName}
            onChangeText={setLastName}
            clearButtonMode="always"
          ></TextInput>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          ></TextInput>
          <Pressable
            style={styles.button}
            onPress={() => {
              setLoggedIn(!loggedIn);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </SafeAreaView>
      )}
    </KeyboardAvoidingView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    margin: 20,
  },
  feedbackInput: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    margin: 20,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

//make this component available to the app
export default LoginScreen;
