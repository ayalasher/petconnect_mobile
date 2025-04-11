import * as SecureStore from "expo-secure-store";

//Storing user data
// On login or signup
export const storeUserData = async (userData) => {
  try {
    // Checking if the userData being received is already astring
    if (typeof userData === "string") {
      console.log(`User data  is already a string`);
    }

    if (typeof userData === "object") {
      console.log(`The user data is an object.`);
    }

    if (typeof userData === "undefined") {
      console.log(`userData data type is undefined`);
    }
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

// Below is a template we are going to use with the logout function to remove data from the secure-store
// import { removeUserData } from '../../utils/secureStorage';

// const handleLogout = async () => {
//   await removeUserData();
//   navigation.navigate('Laucnh'); // Navigate back to launch screen
// };
