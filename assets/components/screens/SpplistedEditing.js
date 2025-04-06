import { Text, View, StyleSheet } from "react-native";

export default function SpplistedEditing() {
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
