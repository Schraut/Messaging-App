import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import { Theme, useTheme } from "../../../resources/theme/theme";
import SettingsHeader from "./SettingsHeader";
import SettingsButton from "../../components/buttons/SettingsButton";
import Icon from "../../components/icon/Icon";

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
      <View style={styles.settingsButtonContainer}>
        <SettingsButton
          onPress={() => console.log("Goes to Account Settings")}
          text="Account Settings"
          icon={
            <Icon
              iconName="account-circle"
              size={24}
              iconType="MaterialCommunityIcons"
              color={theme.colors.inverseBackground}
            />
          }
        />
        <SettingsButton
          onPress={() => console.log("Goes to Edit Profile")}
          text="Edit Profile"
          icon={
            <Icon
              iconName="edit"
              size={18}
              iconType="FontAwesome5"
              color={theme.colors.inverseBackground}
            />
          }
        />
        <SettingsButton
          onPress={() => console.log("Goes to Language")}
          text="Language"
          icon={
            <Icon
              iconName="language"
              size={24}
              iconType="Ionicons"
              color={theme.colors.inverseBackground}
            />
          }
        />
      </View>
      <View style={{ height: theme.spacing(6) }} />
      <View style={styles.settingsButtonContainer}>
        <SettingsButton
          onPress={() => console.log("Goes to Account Settings")}
          text="Privacy Policy"
          icon={
            <Icon
              iconName="account-circle"
              size={24}
              iconType="MaterialCommunityIcons"
              color={theme.colors.inverseBackground}
            />
          }
        />
        <SettingsButton
          onPress={() => console.log("Goes to Edit Profile")}
          text="Security"
          icon={
            <Icon
              iconName="edit"
              size={18}
              iconType="FontAwesome5"
              color={theme.colors.inverseBackground}
            />
          }
        />
      </View>
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
    settingsButtonContainer: {
      backgroundColor: theme.colors.background,
      width: theme.spacing(85),
      padding: theme.spacing(4),
      borderRadius: theme.spacing(2),
      elevation: 2, //come back to compare android and ios later
      shadowColor: theme.colors.staticGrey, //shadow for ios
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.6,
      justifyContent: "center",
      alignItems: "flex-start",
    },
  });
