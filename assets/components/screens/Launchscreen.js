import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  useColorScheme,
  Button,
  Pressable,
} from "react-native";
import { updateUserTheme } from "../../redux/Store";
import { useSelector, useDispatch } from "react-redux";

export default function LaunchScreen({ navigation }) {
  const [isauthenticated, setIsauthenticated] = useState(false);

  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.userTheme);

  let colorScheme = useColorScheme();

  function navigationTesting() {
    navigation.navigate("User Auth screens");
    // alert("Navigation testing");
  }

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  useEffect(() => {
    dispatch(updateUserTheme(colorScheme));
  }, [colorScheme]);

  return (
    <View style={[styles.container, screencolor]}>
      <Text style={[textcolor]}>react native hoyee!!!</Text>
      <Text style={[textcolor]}>
        {userTheme === "dark" ? "Dark theme " : "light theme"}
      </Text>
      <ActivityIndicator size="large" />

      <Pressable onPress={navigationTesting} style={[styles.buttonTeststyles]}>
        <Text>Navigation testing</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  buttonTeststyles: {
    // color: "",
    backgroundColor: "yellow",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
  },
});
