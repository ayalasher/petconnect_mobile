// import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
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

export default function App() {
  const Stack = createNativeStackNavigator();

  function Authscreens() {
    <Stack.Navigator>
      <Stack.Screen
        name="User log in  screen"
        component={UserLoginscreen}
        options={{}}
      />

      <Stack.Screen
        name="User sign up  screen"
        component={UserSignupscreen}
        options={{}}
      />

      <Stack.Screen
        name="SPP Log in  up  screen"
        component={SppLoginscreen}
        options={{}}
      />

      <Stack.Screen
        name="SPP sign up screen"
        component={SppSigupscreen}
        options={{}}
      />
    </Stack.Navigator>;
  }

  function Appnavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Laucnh"
            options={{ headerShown: false, title: "Lauch Screen" }}
            component={LaunchScreen}
          />
          <Stack.Screen
            name="Auth screens"
            options={{ headerShown: false, title: "Lauch Screen" }}
            component={Authscreens}
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
});
