import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";
import i18n from "../../../resources/i18n/internationalization";
import LongButton from "../buttons/LongButton";
import Icon from "../icon/Icon";
import RoundButton from "../buttons/RoundButton";

//NOTE: Will use this component for documentation and example components
const TestComponent = () => {
  //We import the theme and use the stylesHandler to get the styles
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t("Hello")}</Text>
      {/* Long Button receives text, onPress, and then optionally icon, color*/}
      <LongButton
        onPress={() => console.log("Button Pressed")}
        text="Press Me"
        icon={
          <Icon
            iconName="add"
            iconType={"MaterialIcons"}
            size={24}
            color={theme.colors.inverseBackground}
          />
        }
      />
      {/* Long Button receives icon, onPress, and then optionally color*/}
      <RoundButton
        onPress={() => console.log("Round Button Pressed")}
        icon={
          <Icon
            iconName="add"
            iconType={"MaterialIcons"}
            size={24}
            color={theme.colors.inverseBackground}
          />
        }
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
