import { View, StyleSheet } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";
import {
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  Entypo,
  Octicons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";

interface IconProps {
  iconName: string;
  iconType: string;
  size: number;
  color?: string;
}

const Icon = ({ iconName, iconType, size, color }: IconProps) => {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  // Map the iconType to the correct icon component
  const getIconComponent = (type: string) => {
    switch (type) {
      case "MaterialIcons":
        return MaterialIcons;
      case "Ionicons":
        return Ionicons;
      case "FontAwesome5":
        return FontAwesome5;
      case "FontAwesome":
        return FontAwesome;
      case "Entypo":
        return Entypo;
      case "Octicons":
        return Octicons;
      case "Feather":
        return Feather;
      case "AntDesign":
        return AntDesign;
      default:
        return MaterialIcons; // Default to MaterialIcons if type is not recognized
    }
  };

  // Get the appropriate Icon component based on the iconType
  const IconComponent = getIconComponent(iconType);

  return (
    <View>
      <IconComponent
        name={iconName}
        size={size}
        color={color || theme.colors.staticBlack}
      />
    </View>
  );
};

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.inverseBackground,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Icon;
