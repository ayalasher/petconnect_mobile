import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  useColorScheme,
} from "react-native";
import { updateUserTheme } from "../../redux/Store";
import { useSelector, useDispatch } from "react-redux";

export default function LaunchScreen() {
  const [isauthenticated, setIsauthenticated] = useState(false);

  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.userTheme);

  let colorScheme = useColorScheme();

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  useEffect(() => {
    dispatch(updateUserTheme(colorScheme));
  }, [colorScheme]);

  return (
    <View style={[styles.container, screencolor]}>
      <Text style={styles.testingtxt}>react native hoyee!!!</Text>
      <Text style={styles.testingtxt}>
        {userTheme === "dark" ? "Dark theme " : "light theme"}
      </Text>

      <ActivityIndicator size="large" />
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
});
