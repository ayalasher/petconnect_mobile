import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function SppHomeScreen({ navigation }) {
  // const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.userTheme);

  // let colorScheme = useColorScheme();

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;
  return (
    <View style={[styles.container, screencolor]}>
      <Text style={[textcolor]}>Spp Home screen</Text>
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
