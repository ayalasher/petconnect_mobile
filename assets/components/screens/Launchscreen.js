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
import { getUserData } from "../../../utils/expo_secure_functions";

export default function LaunchScreen({ navigation }) {
  const [isauthenticated, setIsauthenticated] = useState(false);
  const [userdata, setUserData] = useState(null);

  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.userTheme);

  let colorScheme = useColorScheme();

  function navigationTesting() {
    navigation.navigate("Auth as user or SPP");
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

  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const datafetching = getUserData() && getUserData() && getUserData();

        console.log(`Data fetched:${datafetching}`);

        // Setting the userData to data fetching...
        setUserData(datafetching);
        console.log(`Type of userData : ${typeof userdata}`);

        // Auth if the data being fetched is not available.
        if (!datafetching) {
          setIsauthenticated(false);

          navigation.navigate("Auth as user or SPP");
        }
        console.log(userdata);
        if (userdata.User_Email) {
          // User is authenticated
          setIsauthenticated(true);
          // navigating to the preffered screen set.
          navigation.navigate("User bottom tab screens", {
            // userDataFromSecureStore: userdata,
          });
        } else if (userdata.Establishment_email) {
          setIsauthenticated(true);
          // navigating to the preffred screen set.
          navigation.navigate("SPP bottom tab screens", {
            // sppDataFromTheSecureStore: userdata,
          });
        } else {
          // No valid user data found
          setIsauthenticated(false);
          navigation.navigate("Auth as user or SPP");
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsauthenticated(false);
        navigation.navigate("Auth as user or SPP");
      }
    };

    checkUserAuth();
  }, [navigation]);

  return (
    <View style={[styles.container, screencolor]}>
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
