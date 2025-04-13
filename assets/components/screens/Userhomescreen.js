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

export default function Userhomescreen({ navigation, route }) {
  const userTheme = useSelector((state) => state.userTheme);
  // const userData = route.params.userDataFromSecureStore;

  // let colorScheme = useColorScheme();

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  return (
    <View style={[styles.container, screencolor]}>
      <Text style={[textcolor]}>User home screen</Text>
      {/* <Text style={[textcolor]}> {userData.User_Email} </Text> */}
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
});
