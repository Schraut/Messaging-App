import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ThemeContent from "./resources/theme/theme";
import TestComponent from "./src/components/TestComponent";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  return (
    //ThemeContent is a wrapper that provides the theme to all the components
    <ThemeContent>
      <RootNavigator />
      <StatusBar style='auto' />
    </ThemeContent>
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
