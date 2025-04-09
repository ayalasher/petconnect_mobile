import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
export default function UserSignupscreen({ navigation }) {
  const userTheme = useSelector((state) => state.userTheme);
  const navigator = useNavigation();
  const [userdata, setUserdata] = useState({
    firstname: "",
    lastname: "",
    userpassword: "",
    useremail: "",
  });

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  function navigateToUSerlogin() {
    // navigation.navigate("User log in  screen");
    navigator.goBack();
  }

  async function signUpHandler() {
    try {
      let response = await axios.post(
        "http://localhost:3000/backend/userSignUp",
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        // Save user data securely
        await SecureStore.setItemAsync("userToken", response.data.token);
        await SecureStore.setItemAsync(
          "userData",
          JSON.stringify(response.data.user)
        );

        setUserdata({
          firstname: "",
          lastname: "",
          userpassword: "",
          useremail: "",
        });

        // Navigate to home screen
        navigation.navigate("User bottom tab screens");
      }

      console.log(response.data);
    } catch (error) {
      console.log(`Error:${error}`);
    }
  }

  function captureFirstnameHandler(userProvidefirstname) {
    setUserdata({ ...userdata, firstname: userProvidefirstname });
  }

  function captureLastnameHandler(userProvidelastname) {
    setUserdata({ ...userdata, lastname: userProvidelastname });
  }

  function captureEmailHandler(userProvidedemail) {
    setUserdata({ ...userdata, useremail: userProvidedemail });
  }

  function capturePassowrdHandler(userProvidedPassword) {
    setUserdata({ ...userdata, userpassword: userProvidedPassword });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      style={{ flex: 1 }}
    >
      <View style={[styles.screencontainer, screencolor]}>
        <View style={[styles.loginContainer]}>
          <Text style={[textcolor, styles.headertext]}>Sign up </Text>
          <View>
            <Text style={[textcolor, styles.inputlables]}>First name</Text>
            <TextInput
              placeholderTextColor={" #808080"}
              style={[styles.textinputs]}
              placeholder="Enter first name"
              value={userdata.firstname}
              onChangeText={captureFirstnameHandler}
            />
          </View>
          <View>
            <Text style={[textcolor, styles.inputlables]}>Last name </Text>
            <TextInput
              placeholderTextColor={" #808080"}
              style={[styles.textinputs]}
              placeholder="Enter last name"
              value={userdata.lastname}
              onChangeText={captureLastnameHandler}
            />
          </View>
          <View>
            <Text style={[textcolor, styles.inputlables]}>Email </Text>
            <TextInput
              keyboardType="password"
              placeholderTextColor={" #808080"}
              style={[styles.textinputs]}
              placeholder="Enter email"
              value={userdata.useremail}
              onChangeText={captureEmailHandler}
            />
          </View>
          <View>
            <Text style={[textcolor, styles.inputlables]}>Password </Text>
            <TextInput
              placeholderTextColor={" #808080"}
              style={[styles.textinputs]}
              placeholder="Enter password"
              value={userdata.userpassword}
              onChangeText={capturePassowrdHandler}
              secureTextEntry={true}
            />
          </View>

          <View>
            <Pressable onPress={signUpHandler} style={[styles.loginbutton]}>
              <Text style={[textcolor]}>Sign up</Text>
            </Pressable>
          </View>

          <View style={[styles.endingsection]}>
            <Text style={[textcolor]}>Already have an account ? </Text>
            <Pressable
              style={[styles.toSignupButton]}
              onPress={navigateToUSerlogin}
            >
              <Text style={[textcolor]}>Log in</Text>
            </Pressable>
            {/* <TextInput style={[styles.textinputs]} placeholder="Enter password" /> */}
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  darkmodescreencolor: {
    backgroundColor: "black",
  },
  lightmodescreencolor: {
    backgroundColor: "white",
  },
  darkmodeTextcolor: {
    color: "white",
  },
  lightmodeTextcolor: {
    color: "black",
  },

  textcontainer: {
    // display: "flex",
    flexDirection: "column",
    // From left to right
    alignItems: "center",
    // From bottom to top
    justifyContent: "center",
  },

  headertext: {
    fontSize: 32,
    fontWeight: "bold",
    alignItems: "center",
    marginVertical: 25,
  },

  loginContainer: {
    flexDirection: "column",
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },

  textinputs: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: "100%",
    borderRadius: 10,
    marginVertical: 15,
    borderColor: "#808080",
    borderWidth: 2,
  },
  inputlables: {
    fontSize: 20,
    fontWeight: "700",
  },

  endingsection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  toSignupButton: {
    borderRadius: 15,
    backgroundColor: "#fac88e",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  loginbutton: {
    borderRadius: 15,
    backgroundColor: "#f07b2c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 45,
    marginTop: 15,
  },
});
