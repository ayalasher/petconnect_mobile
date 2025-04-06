import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useSelector } from "react-redux";

export default function UserLoginscreen({ navigation }) {
  const userTheme = useSelector((state) => state.userTheme);

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

  function loginHandler() {
    alert("User logged in");
  }

  return (
    <View style={[styles.screencontainer, screencolor]}>
      <View style={[styles.loginFormcontainer]}>
        <Text style={[textcolor, styles.headertext]}>Log in</Text>

        <View>
          <Text style={[textcolor, styles.inputlables]}>Email </Text>
          <TextInput style={[styles.textinputs]} placeholder="Enter email" />
        </View>
        <View>
          <Text style={[textcolor, styles.inputlables]}>Password </Text>
          <TextInput style={[styles.textinputs]} placeholder="Enter password" />
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
    borderColor: "#999999",
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
