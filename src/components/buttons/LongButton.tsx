import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";

interface LongButtonProps {
  onPress: () => void;
  text: string;
  color?: string;
  icon?: any;
}

const LongButton = ({ onPress, text, icon, color }: LongButtonProps) => {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color || theme.colors.staticGrey },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      width: theme.spacing(80),
      height: theme.spacing(12),
      borderRadius: theme.spacing(8),
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textPrimary.fontSize,
      fontWeight: theme.font.textPrimary.fontWeight,
    },
  });

export default LongButton;
