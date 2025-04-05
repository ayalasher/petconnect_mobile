import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import appcolors from "./assets/colors/colors";

import {} from "@react-navigation/native-stack";
import store from "./assets/redux/Store";

export default function App() {
  const [isauthenticated, setIsauthenticated] = useState(false);
  const [theme, setTheme] = useState("");

  let colorScheme = useColorScheme();

  // let colorscheme2 = Appearance.getColorScheme();
  // let listenToChange = Appearance.addChangeListener();
  // setTheme(colorscheme2);

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.testingtxt}>react native hoyee!!!</Text>
        <Text style={styles.testingtxt}>
          {theme === "dark" ? "Dark theme " : "light theme"}
        </Text>

        <ActivityIndicator size="large" />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  testingtxt: {
    color: "green",
    // fontSize:""
  },
});
