import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import { Theme, useTheme } from "../../resources/theme/theme";
import HeaderTitle from "../components/header_title/HeaderTitle";
import { useState } from "react";
import LongButton from "../components/buttons/LongButton";

export default function SignInScreen({ navigation }: any) {
  const theme = useTheme();
  const styles = stylesHandler(theme);
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/favicon.png")} />
      <View style={{ justifyContent: "flex-start" }}>
        <HeaderTitle title="Create Account" />
        <Text>Please sign in to continue</Text>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="EMAIL "
        />
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="PASSWORD"
        />
      </View>

      <LongButton
        onPress={() => navigation.navigate("BottomTabs")}
        text="Login"
      />

      <View style={styles.goToSignUp}>
        <Text style={styles.text}>Don't have an account, yet?</Text>
        <TouchableOpacity onPress={() => console.log("go to sign up screen")}>
          <Text style={styles.signUpText}> Sign Up.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const stylesHandler = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    text: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textPrimary.fontSize,
    },
    input: {
      height: theme.spacing(12),
      width: theme.spacing(90),
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      marginVertical: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      shadowColor: theme.colors.staticGrey,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.6,
    },
    loginButton: {
      backgroundColor: theme.colors.staticGrey,
      borderRadius: 10,
      height: theme.spacing(10),
      width: theme.spacing(30),
    },
    logo: {
      marginVertical: theme.spacing(10),
    },
    goToSignUp: {
      flexDirection: "row",
      marginTop: 16,
    },
    signUpText: {
      color: theme.colors.inverseBackground,
      fontFamily: theme.font.textPrimary.fontFamily,
      fontSize: theme.font.textPrimary.fontSize,
      fontWeight: "600",
      textDecorationLine: "underline",
    },
  });
