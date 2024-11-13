import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";
import SettingsButton from "../../components/buttons/SettingsButton";
import Icon from "../../components/icon/Icon";
import SettingsHeader from "./SettingsHeader";

interface SettingsScreenProps {
  navigation: any; //we may not need this. Depends on if we take it out of bottomtabs
  firstName: string;
  lastName: string;
  username: string;
  profileImage: string;
}

export default function SettingsScreen({
  navigation,
  firstName,
  lastName,
  username,
  profileImage,
}: SettingsScreenProps) {
  const theme = useTheme();
  const styles = stylesHandler(theme);

  return (
    <SafeAreaView style={styles.container}>
      <SettingsHeader navigation={navigation} />
      <View style={styles.accountInfo}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Text style={styles.nameText}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.usernameText}>{username}</Text>
      </View>
      <SettingsButton
        onPress={() => {}}
        text="Account"
        icon={
          <Icon
            iconName="settings"
            size={24}
            iconType="MaterialIcon"
            color={theme.colors.inverseBackground}
          />
        }
      />
      <SettingsButton
        onPress={() => {}}
        text="Notifications"
        icon={
          <Icon
            iconName="settings"
            size={24}
            iconType="MaterialIcon"
            color={theme.colors.inverseBackground}
          />
        }
      />
      <SettingsButton
        onPress={() => {}}
        text="Privacy Policy"
        icon={
          <Icon
            iconName="settings"
            size={24}
            iconType="MaterialIcon"
            color={theme.colors.inverseBackground}
          />
        }
      />
      <SettingsButton
        onPress={() => {}}
        text="Ratings"
        icon={
          <Icon
            iconName="settings"
            size={24}
            iconType="MaterialIcon"
            color={theme.colors.inverseBackground}
          />
        }
      />
      <Text style={styles.text}>Buttons above for testing</Text>
    </SafeAreaView>
  );
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: "center",
    },
    accountInfo: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: theme.spacing(4),
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.staticGrey,
    },
    profileImage: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      borderRadius: theme.spacing(25) / 2, //to get 50
    },
    nameText: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.header.fontFamily,
      fontSize: theme.font.header.fontSize,
    },
    usernameText: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textPrimary.fontSize,
    },
    text: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textPrimary.fontSize,
      marginTop: theme.spacing(2),
    },
  });
