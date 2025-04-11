import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";

export default function UserLoginscreen({ navigation }) {
  const userTheme = useSelector((state) => state.userTheme);

  const [userdata, setUserdata] = useState({
    userEmail: "",
    password: "",
  });

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  function navigateToUSerSignput() {
    navigation.navigate("User sign up  screen");
  }

  async function loginHandler() {
    // console.log(`Before the try`);
    try {
      // route is set to localhost for testing purposes
      console.log(`Inside the try`);

      const response = await axios.post(
        "http://192.168.100.10:3000/backend/userLogin",
        userdata,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      if (response.data) {
        // Save user data securely
        await SecureStore.setItemAsync("userToken", response.data.token);
        await SecureStore.setItemAsync(
          "userData",
          JSON.stringify(response.data.user)
        );

        setUserdata({
          userEmail: "",
          password: "",
        });

        // Navigate to home screen
        navigation.navigate("User bottom tab screens");
      }
    } catch (error) {
      console.log(`Error:${error}`);
    }
  }

  function captureEmailHanlder(userEnteredEmail) {
    setUserdata({ ...userdata, userEmail: userEnteredEmail });
  }

  function capturePassowrdHandler(userEnteredPassword) {
    setUserdata({ ...userdata, password: userEnteredPassword });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      style={{ flex: 1 }}
    >
      <View style={[styles.screencontainer, screencolor]}>
        <View style={[styles.loginFormcontainer]}>
          <Text style={[textcolor, styles.headertext]}>Log in</Text>

          <View>
            <Text style={[textcolor, styles.inputlables]}>Email </Text>
            <TextInput
              placeholderTextColor={" #808080"}
              style={[styles.textinputs, textcolor]}
              placeholder="Enter email"
              value={userdata.userEmail}
              onChangeText={captureEmailHanlder}
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={[textcolor, styles.inputlables]}>Password </Text>
            <TextInput
              placeholderTextColor={" #808080"}
              style={[styles.textinputs, textcolor]}
              placeholder="Enter password"
              value={userdata.password}
              onChangeText={capturePassowrdHandler}
              secureTextEntry={true}
            />
          </View>

          <View>
            <Pressable onPress={loginHandler} style={[styles.loginbutton]}>
              <Text style={[textcolor]}>Log in</Text>
            </Pressable>
          </View>

          <View style={[styles.endingsection]}>
            <Text style={[textcolor]}>Haven an account ? </Text>
            <Pressable
              style={[
                styles.toSignupButton,
                ({ pressed }) =>
                  pressed
                    ? styles.toSignupButton && styles.btnopacity
                    : styles.toSignupButton,
              ]}
              onPress={navigateToUSerSignput}
            >
              <Text style={[textcolor]}>Sign up</Text>
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
  btnopacity: {
    opacity: 0.3,
  },

  headertext: {
    fontSize: 32,
    fontWeight: "bold",
    alignItems: "center",
    marginVertical: 25,
  },

  loginFormcontainer: {
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
