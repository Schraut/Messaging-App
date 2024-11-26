import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";

const screenWidth = Dimensions.get("window").width;

interface SettingsButtonProps {
  onPress: () => void;
  text: string;
  icon?: React.ReactNode;
}

const SettingsButton = ({ onPress, text, icon }: SettingsButtonProps) => {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <View style={styles.title}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      height: theme.spacing(12),
      paddingHorizontal: theme.spacing(1),
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    title: {
      flexDirection: "row",
      gap: theme.spacing(2),
      alignItems: "center",
    },
    iconContainer: {
      width: theme.spacing(7),
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textSecondary.fontSize,
      fontWeight: theme.font.textPrimary.fontWeight,
    },
  });

export default SettingsButton;
