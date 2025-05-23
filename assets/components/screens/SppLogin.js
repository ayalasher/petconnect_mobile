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
import { storeUserData } from "../../../utils/expo_secure_functions";
import { useState } from "react";

export default function UserLoginscreen({ navigation }) {
  const userTheme = useSelector((state) => state.userTheme);
  const [sppdata, setSppdata] = useState({
    establishmentEmail: "",
    establishmentPassword: "",
  });

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  function navigateToUSerSignput() {
    navigation.navigate("SPP sign up screen");
  }

  async function loginHandler() {
    try {
      let response = await axios.post("", sppdata, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      if (response.data) {
        await storeUserData(response.data);

        setSppdata({
          establishmentEmail: "",
          establishmentPassword: "",
        });

        // Navigate to home screen
        navigation.navigate("SPP bottom tab screens");
      }
    } catch (error) {
      console.log(`Error:${error}`);
    }
  }

  function captureEmailhandler(sppProvidedEmail) {
    setSppdata({ ...sppdata, establishmentEmail: sppProvidedEmail });
  }
  function capturePasswordhandler(sppProvidedPassword) {
    setSppdata({ ...sppdata, establishmentPassword: sppProvidedPassword });
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      style={{ flex: 1 }}
    >
      <View style={[styles.screencontainer, screencolor]}>
        <View style={[styles.loginFormcontainer]}>
          <Text style={[textcolor, styles.headertext]}>
            Log in as a service or Product provider
          </Text>

          <View>
            <Text style={[textcolor, styles.inputlables]}> Email </Text>
            <TextInput
              style={[styles.textinputs, textcolor]}
              placeholder="Enter establishment email"
              value={sppdata.establishmentEmail}
              onChangeText={captureEmailhandler}
              keyboardType="email-address"
            />
          </View>
          <View>
            <Text style={[textcolor, styles.inputlables]}>Password </Text>
            <TextInput
              value={sppdata.establishmentPassword}
              style={[styles.textinputs, textcolor]}
              placeholder="Enter password"
              onChangeText={capturePasswordhandler}
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
              style={[styles.toSignupButton]}
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
    borderColor: "#1f1f1f",
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
