import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ThemeContent from "./resources/theme/theme";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { Theme, useTheme } from "./resources/theme/theme";

export default function App() {
  return (
    //ThemeContent is a wrapper that provides the theme to all the components
    <ThemeContent>
      <RootNavigator />
      <StatusBar style="auto" />
    </ThemeContent>
  );
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
  });
