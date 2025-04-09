import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

//Storing user data
// On login or signup
export const storeUserData = async (userData) => {
  try {
    // In this context, "userData" is the key while "JSON.stringify(userData)" is the value
    await SecureStore.setItemAsync("userData", JSON.stringify(userData));
  } catch (error) {
    console.log("Error storing user data:", error);
  }
};

// Checking for user data
// In the laucnh screen
export const getUserData = async () => {
  try {
    const userData = await SecureStore.getItemAsync("userData");
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.log("Error getting user data:", error);
    return null;
  }
};

// removing user data
// Logging out
export const removeUserData = async () => {
  try {
    await SecureStore.deleteItemAsync("userData");
    await SecureStore.deleteItemAsync("userToken");
  } catch (error) {
    console.log("Error removing user data:", error);
  }
};
