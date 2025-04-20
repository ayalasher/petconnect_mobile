import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Button,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUserData } from "../../../utils/expo_secure_functions";

export default function Userhomescreen({ navigation, route }) {
  const userTheme = useSelector((state) => state.userTheme);
  const userData = route.params.USERDATAFROMSECURESTORE;

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  async function testBtnHandler() {
    let logOutuser = await removeUserData();

    if (!logOutuser) {
      console.log(`Error logging out user`);
    } else {
      navigation.navigate("Auth as user or SPP");
    }
  }
  useEffect(() => {
    console.log(`${typeof userData}`);
  }, []);
  return (
    <View style={[styles.container, screencolor]}>
      <Text style={[textcolor]}>User home screen</Text>
      <Pressable onPress={testBtnHandler} style={styles.testbtn}>
        <Text style={[textcolor]}>Test button</Text>
      </Pressable>
      {/* <Text style={[textcolor]}> {userData.User_Email} </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    // Horizontal allignment
    alignItems: "center",
    // Vertical allignment
    // justifyContent: "center",
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
  testbtn: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 15,
    color: "white",
    backgroundColor: "aqua",
    alignItems: "center",
    width: "50%",
  },
});
