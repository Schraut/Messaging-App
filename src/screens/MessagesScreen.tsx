import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Theme, useTheme } from "../../resources/theme/theme";

export default function MessagesScreen() {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages Screen</Text>
    </View>
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
    text: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textPrimary.fontSize,
    },
  });
