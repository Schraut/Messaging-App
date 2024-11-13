import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({ title }: HeaderTitleProps) => {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.inverseBackground,
      fontWeight: "bold",
      fontSize: 24,
    },
  });

export default HeaderTitle;
