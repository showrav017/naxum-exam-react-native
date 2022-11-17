import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View , Text} from "react-native";
import { Container, Description, Title} from "./styles";
import { KeyboardAvoidingView, Platform } from "react-native";
import Button from "~components/Button";

export const useCustomBottomInset = () => {
    const insets = useSafeAreaInsets();
    return Math.max(20, insets.bottom + 5);
};


const Authentication = () => {
    const insets = useSafeAreaInsets();
    const bottomInset = useCustomBottomInset();
    const themeContext = useContext(ThemeContext);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
  
    /**
     * For demo purposes, we'll just log the user in
     */
    const handleLogin = async () => {
    //   setLoading(true);
    //   setTimeout(() => {
    //     navigation.navigate(SceneName.OneTimeCode);
    //     setLoading(false);
    //   }, 1000);
    };
  
    return (
      <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flexGrow: 1 }}
      >
        <Text style={{textAlign:"center"}}>Mass Destriction</Text>
        <Button style={{width:100}}>Hi</Button>
      </KeyboardAvoidingView>
    </Container>
    );
  };
  
  export default Authentication;
  