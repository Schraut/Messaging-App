import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme, useTheme } from "../../resources/theme/theme";
import i18n from "../../resources/i18n/internationalization";
import { useColorScheme } from "react-native";

const TestComponent = () => {
  //We import the theme and use the stylesHandler to get the styles
  const theme = useTheme();
  const styles = stylesHandler(theme);
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t("Hello")}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(colorScheme);
        }}
      />
    </View>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background, //example of using theme colors. This will flip based on the darkmode/lightmode
      width: "100%",
      height: theme.spacing(40), //example of using theme spacing
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme.colors.inverseBackground, //example of using theme colors
      fontFamily: theme.font.textPrimary.fontFamily, //example of using theme fonts
      fontSize: theme.font.textPrimary.fontSize,
      fontWeight: theme.font.textPrimary.fontWeight,
    },
    button: {
      width: theme.spacing(20), //example of using theme spacing
      height: theme.spacing(5),
      backgroundColor: "green", //can still use inline styles
    },
  });

export default TestComponent;
