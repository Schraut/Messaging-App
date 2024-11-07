import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";
import Icon from "../icon/Icon";

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
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
      <Icon
        iconName="chevron-right"
        size={28}
        iconType="MaterialIcon"
        color={theme.colors.inverseBackground}
      />
    </TouchableOpacity>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    button: {
      flexDirection: "row",
      width: screenWidth,
      height: theme.spacing(12),
      paddingHorizontal: theme.spacing(1),
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.staticGrey,
    },
    title: {
      flexDirection: "row",
      gap: theme.spacing(2),
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
