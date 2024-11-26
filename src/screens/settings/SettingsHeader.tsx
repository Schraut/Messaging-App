import { StyleSheet, Dimensions, View } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";
import RoundButton from "../../components/buttons/RoundButton";
import Icon from "../../components/icon/Icon";

const screenWidth = Dimensions.get("window").width;

interface SettingsHeaderProps {
  navigation: any;
}

const SettingsHeader = ({ navigation }: SettingsHeaderProps) => {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <View style={styles.container}>
      <RoundButton
        onPress={() => {
          console.log("Goes to Notifications");
        }}
        icon={
          <Icon
            iconName="bell-outline"
            size={24}
            iconType="MaterialCommunityIcons"
            color={theme.colors.inverseBackground}
          />
        }
        color={theme.colors.background}
      />
      <RoundButton
        onPress={() => {
          console.log("Goes to nowhere for now");
        }}
        icon={
          <Icon
            iconName="ellipsis-vertical"
            size={24}
            iconType="Ionicons"
            color={theme.colors.inverseBackground}
          />
        }
        color={theme.colors.background}
      />
    </View>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      width: screenWidth,
      height: theme.spacing(12),
      paddingHorizontal: theme.spacing(1),
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textSecondary.fontSize,
      fontWeight: theme.font.textPrimary.fontWeight,
    },
  });

export default SettingsHeader;
