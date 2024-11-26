import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Theme, useTheme } from "../../resources/theme/theme";
import HeaderTitle from "../components/header_title/HeaderTitle";
import { useState } from "react";
import LongButton from "../components/buttons/LongButton";

export default function SignInScreen({ navigation }: any) {
  const theme = useTheme();
  const styles = stylesHandler(theme);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/favicon.png")} />
      <View style={styles.infoContainer}>
        <HeaderTitle title="Create Account" />
        <Text style={{ color: theme.colors.inverseBackground }}>
          Please sign in to continue
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
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
    infoContainer: {
      justifyContent: "flex-start",
      marginBottom: theme.spacing(3),
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
