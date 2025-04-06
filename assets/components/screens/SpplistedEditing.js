import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function SpplistedEditing() {
  const userTheme = useSelector((state) => state.userTheme);

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;
  return (
    <View>
      <Text>Edit the listed products and services</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screencontainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
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
