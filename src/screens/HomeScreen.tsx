import { StyleSheet, Text, View } from "react-native";
import { Theme, useTheme } from "../../resources/theme/theme";

export default function HomeScreen() {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
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
