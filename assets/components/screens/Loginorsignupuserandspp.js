import { Pressable, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function Loginorsignupuserandspp({ navigation }) {
  // const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.userTheme);

  // let colorScheme = useColorScheme();

  const screencolor =
    userTheme === "dark"
      ? styles.darkmodescreencolor
      : styles.lightmodescreencolor;

  const textcolor =
    userTheme === "dark" ? styles.darkmodeTextcolor : styles.lightmodeTextcolor;

  function continueAsUserHandler() {
    navigation.navigate("User Auth screens");
  }
  function continueAsSpphandler() {
    navigation.navigate("Spp Auth screens");
  }
  return (
    <View style={[styles.container, screencolor]}>
      <View style={[styles.itemscontainer]}>
        <Text style={[textcolor, styles.headertext]}>
          Continue as a user or sevice provider.
        </Text>
      </View>
      <Pressable onPress={continueAsUserHandler} style={[styles.loginbutton]}>
        <Text style={[textcolor, styles.btntxt]}>Contniue as user</Text>
      </Pressable>

      <Pressable onPress={continueAsSpphandler} style={[styles.loginbutton]}>
        <Text style={[textcolor, styles.btntxt]}>
          Contniue as service or product provider
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btntxt: {
    fontSize: 17,
  },
  headertext: {
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 20,
  },
  itemscontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
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
  loginbutton: {
    borderRadius: 15,
    backgroundColor: "#f07b2c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    width: "90%",
  },
});
