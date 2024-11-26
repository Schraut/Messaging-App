import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import { NavigationContainer } from "@react-navigation/native";
import { Theme, useTheme } from "../../resources/theme/theme";
import SignInScreen from "../screens/SignInScreen";

type RootStackParamList = {
  BottomTabs: undefined;
  SignInScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          screenOptions={{
            animation: "default",
            animationDuration: 400,
            gestureEnabled: true,
          }}
          initialRouteName="BottomTabs"
        >
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
