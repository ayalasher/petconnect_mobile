import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function UserSignupscreen({ navigation }) {
  const userTheme = useSelector((state) => state.userTheme);
  const navigator = useNavigation();

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  function navigateToUSerSignput() {
    // alert("Button testing");
    navigation.navigate("SPP sign up screen");
    // navigator.navigate(-1);
  }

  function loginHandler() {
    alert("SPP has signed up");
  }

  return (
    <View style={[styles.screencontainer, screencolor]}>
      <View style={[styles.loginContainer]}>
        <Text style={[textcolor, styles.headertext]}>
          Sign up a service or Product provider{" "}
        </Text>
        <View>
          <Text style={[textcolor, styles.inputlables]}>Name</Text>
          <TextInput
            style={[styles.textinputs]}
            placeholder="Enter establishment name"
          />
        </View>
        {/* <View>
          <Text style={[textcolor, styles.inputlables]}>Last name </Text>
          <TextInput
            style={[styles.textinputs]}
            placeholder="Enter last name"
          />
        </View> */}
        <View>
          <Text style={[textcolor, styles.inputlables]}>Email </Text>
          <TextInput
            style={[styles.textinputs]}
            placeholder="Enter establishment email"
          />
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
          <Text style={[textcolor]}>Already have an account ? </Text>
          <Pressable
            style={[styles.toSignupButton]}
            onPress={navigateToUSerSignput}
          >
            <Text style={[textcolor]}>Log in</Text>
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
