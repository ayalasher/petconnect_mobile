import { Text, View, StyleSheet, Pressable } from "react-native";
import { removeUserData } from "../../../utils/expo_secure_functions";

export default function UserSettigsandlogoutScreen({ navigation }) {
  const userTheme = useSelector((state) => state.userTheme);

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  async function logoutHandler() {
    let logOutuser = await removeUserData();

    if (!logOutuser) {
      console.log(`Error logging out user`);
    } else {
      navigation.navigate("Auth as user or SPP");
    }
  }
  return (
    <View style={[styles.container, screencolor]}>
      <Text style={[textcolor]}>User settings and logout screen </Text>
      <Pressable onPress={logoutHandler} style={styles.logoutbtn}>
        <Text style={[textcolor]}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  testingtxt: {
    color: "green",
    // fontSize:""
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
  logoutbtn: {
    borderRadius: 15,
    backgroundColor: "#f07b2c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 45,
    marginTop: 15,
  },
});
