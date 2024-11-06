import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import MessagesScreen from "../screens/messages/MessagesScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import TestScreen from "../screens/test_screen/TestScreen";
import { Theme, useTheme } from "../../resources/theme/theme";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.inverseBackground,
        tabBarInactiveTintColor: theme.colors.staticGrey,
        tabBarStyle: { backgroundColor: theme.colors.background },
      }}
      sceneContainerStyle={styles.container}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen
        name="Settings"
        children={() => (
          <SettingsScreen //We may end up changing the structure of this when Redux is implemented
            navigation={null}
            firstName="John"
            lastName="Doe"
            username="@johndoe"
            profileImage="https://picsum.photos/200"
          />
        )}
      />
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
