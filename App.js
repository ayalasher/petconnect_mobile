// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./assets/redux/Store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LaunchScreen from "./assets/components/screens/Launchscreen";
import UserLoginscreen from "./assets/components/screens/UserLoginscreen";
import UserSignupscreen from "./assets/components/screens/UserSignup";
import SppLoginscreen from "./assets/components/screens/SppLogin";
import SppSigupscreen from "./assets/components/screens/SppSignup";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Userhomescreen from "./assets/components/screens/Userhomescreen";
import Userproductscreen from "./assets/components/screens/Userproductsscreen";
import UserChatsScreen from "./assets/components/screens/Userchats";
import SppHomeScreen from "./assets/components/screens/Spphome";
import Spplisted from "./assets/components/screens/Spplisted";
import SppaddproductOrService from "./assets/components/screens/SppaddproductOrService";
import Sppsearch from "./assets/components/screens/Sppsearch";
import SppChatScreen from "./assets/components/screens/Sppchat";
import UserSettigsandlogoutScreen from "./assets/components/screens/UserSettingsandlogout";
import SpplistedEditing from "./assets/components/screens/SpplistedEditing";
import SpplistedDeleting from "./assets/components/screens/SppListeddeleting";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function UserAuthscreens() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="User log in  screen"
          component={UserLoginscreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="User sign up  screen"
          component={UserSignupscreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function Sppauthscreens() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SPP Log in  up  screen"
          component={SppLoginscreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SPP sign up screen"
          component={SppSigupscreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  function Userbottomtabscreens() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name=" User Home screen "
          component={Userhomescreen}
          options={{}}
        />

        <Tab.Screen
          name=" User products screen "
          component={Userproductscreen}
          options={{}}
        />

        <Tab.Screen
          name=" User services screen "
          component={Userproductscreen}
          options={{}}
        />

        <Tab.Screen
          name=" User chats screen "
          component={UserChatsScreen}
          options={{}}
        />
      </Tab.Navigator>
    );
  }

  function UserSettingsandLogout() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="User Settings and logout screen"
          component={UserSettigsandlogoutScreen}
          options={{}}
        />
      </Stack.Navigator>
    );
  }

  function SppBottomtabsScreens() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name=" SPP home screen "
          component={SppHomeScreen}
          options={{}}
        />

        <Tab.Screen
          name=" SPP listed screen "
          component={Spplisted}
          options={{}}
        />

        <Tab.Screen
          name=" SPP add product or service screen "
          component={SppaddproductOrService}
          options={{}}
        />

        {/* Purpose of the screen to be reviewed */}
        {/* Sellers can serach for a product to compare  prices for a product or service from other sellers */}
        <Tab.Screen
          name=" SPP search  screen "
          component={Sppsearch}
          options={{}}
        />

        <Tab.Screen
          name=" SPP chat screen "
          component={SppChatScreen}
          options={{}}
        />

        <Tab.Screen
          name=" SPP add product or service screen "
          component={SppaddproductOrService}
          options={{}}
        />
      </Tab.Navigator>
    );
  }

  function SpplitsedDeletingAndEditingScreens() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Listed and edited screen"
          component={SpplistedEditing}
          options={{}}
        />

        <Stack.Screen
          name="Listed and deleting screen"
          component={SpplistedDeleting}
          options={{}}
        />
      </Stack.Navigator>
    );
  }

  function Appnavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Laucnh"
            options={{ headerShown: false, title: "Launch Screen" }}
            component={LaunchScreen}
          />
          <Stack.Screen
            name="User Auth screens"
            options={{ headerShown: false, title: "User Auth Screen" }}
            component={UserAuthscreens}
          />

          <Stack.Screen
            name="Spp Auth screens"
            options={{ headerShown: false, title: "SPP Auth Screen" }}
            component={Sppauthscreens}
          />

          <Stack.Screen
            name="User bottom tab screens"
            options={{ headerShown: false, title: "User screens" }}
            component={Userbottomtabscreens}
          />

          <Stack.Screen
            name="SPP bottom tab screens"
            options={{ headerShown: false, title: "User screens" }}
            component={SppBottomtabsScreens}
          />

          <Stack.Screen
            name="User settings and logout screens"
            options={{ headerShown: false, title: "User screens" }}
            component={UserSettingsandLogout}
          />

          <Stack.Screen
            name="Spp listed and deleted screens"
            options={{ headerShown: false, title: "User screens" }}
            component={SpplitsedDeletingAndEditingScreens}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }

  return (
    <Provider store={store}>
      <Appnavigator />
    </Provider>
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
});
