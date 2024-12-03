import { StyleSheet, TouchableOpacity } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";

interface RoundButtonProps {
  onPress: () => void;
  color?: string;
  icon?: any;
}

const RoundButton = ({ onPress, icon, color }: RoundButtonProps) => {
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
      {icon}
    </TouchableOpacity>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      width: theme.spacing(10),
      height: theme.spacing(10),
      borderRadius: theme.spacing(10),
      justifyContent: "center",
      alignItems: "center",
    },
  });

export default RoundButton;
