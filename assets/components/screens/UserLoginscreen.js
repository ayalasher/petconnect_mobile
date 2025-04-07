import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";

export default function UserLoginscreen({ navigation }) {
  const userTheme = useSelector((state) => state.userTheme);

  const [userdata, setUserdata] = useState({
    useremail: "",
    userPassword: "",
  });

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  function navigateToUSerSignput() {
    // alert("Button testing");
    navigation.navigate("User sign up  screen");
  }

  async function loginHandler() {
    // route is set to localhost for testing purposes
    const response = await axios.post(
      "http://localhost:3000/backend/userLogin",
      userdata,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);

    try {
    } catch (error) {
      console.log(`Error:${error}`);
    }
  }

  function captureEmailHanlder(userEnteredEmail) {
    setUserdata({ ...userdata, useremail: userEnteredEmail });
  }

  function capturePassowrdHandler(userEnteredPassword) {
    setUserdata({ ...userdata, userPassword: userEnteredPassword });
  }

  return (
    <View style={[styles.screencontainer, screencolor]}>
      <View style={[styles.loginFormcontainer]}>
        <Text style={[textcolor, styles.headertext]}>Log in</Text>

        <View>
          <Text style={[textcolor, styles.inputlables]}>Email </Text>
          <TextInput
            placeholderTextColor={" #808080"}
            style={[styles.textinputs]}
            placeholder="Enter email"
            value={userdata.useremail}
            onChangeText={captureEmailHanlder}
          />
        </View>
        <View>
          <Text style={[textcolor, styles.inputlables]}>Password </Text>
          <TextInput
            placeholderTextColor={" #808080"}
            style={[styles.textinputs]}
            placeholder="Enter password"
            value={userdata.userPassword}
            onChangeText={capturePassowrdHandler}
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
