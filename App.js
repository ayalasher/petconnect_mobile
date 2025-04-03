import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useState } from "react";

export default function App() {
  const [isauthenticated, setIsauthenticated] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Pet connect mobile</Text>
      <ActivityIndicator size="large" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
