import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import MessagesScreen from "../screens/messages/MessagesScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import TestScreen from "../screens/test_screen/TestScreen";
import { Theme, useTheme } from "../../resources/theme/theme";
import { StyleSheet } from "react-native";
import Icon from "../components/icon/Icon";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.colors.inverseBackground,
        tabBarInactiveTintColor: theme.colors.staticGrey,
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Messages":
              iconName = "chat-outline";
              break;
            case "Profile":
              iconName = "account-circle-outline";
              break;
            case "Testing":
              iconName = "flask-outline";
              break;
            default:
              iconName = "alert-circle-outline";
          }

          return (
            <Icon
              iconName={iconName}
              iconType="MaterialCommunityIcons"
              size={28}
              color={theme.colors.inverseBackground}
            />
          );
        },
      })}
      sceneContainerStyle={styles.container}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen
        name="Profile"
        children={() => (
          <ProfileScreen //We may end up changing the structure of this when Redux is implemented
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
