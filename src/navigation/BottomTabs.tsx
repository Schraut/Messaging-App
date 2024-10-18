import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MessagesScreen from "../screens/MessagesScreen";
import TestScreen from "../screens/TestScreen";
import { Theme, useTheme } from "../../resources/theme/theme";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: { color: theme.colors.inverseBackground },
        tabBarActiveTintColor: theme.colors.inverseBackground,
        tabBarInactiveTintColor: theme.colors.staticGrey,
        tabBarStyle: { backgroundColor: theme.colors.background },
      }}
      sceneContainerStyle={styles.container}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Testing" component={TestScreen} />
    </Tab.Navigator>
  );
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "red",
    },
  });
