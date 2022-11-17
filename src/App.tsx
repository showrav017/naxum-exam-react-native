import React, { useMemo } from "react";
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo'; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import { enableScreens } from "react-native-screens";
import { useFonts } from "@use-expo/font";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Font, LightTheme, DarkTheme } from "./themes";
import { Loading, SafeComponent } from "~components";
import { Provider } from "react-redux";
import { store } from "./store";
import Router from "./views/index.routes";

enableScreens();

export default function App() {

  let [fontsLoaded] = useFonts({
    [Font.GilroyBold]: require("~assets/fonts/Gilroy-Bold.ttf"),
    [Font.GilroyExtraBold]: require("~assets/fonts/Gilroy-ExtraBold.ttf"),
    [Font.GilroyLight]: require("~assets/fonts/Gilroy-Light.ttf"),
    [Font.GilroyMedium]: require("~assets/fonts/Gilroy-Medium.ttf"),
    [Font.GilroyRegular]: require("~assets/fonts/Gilroy-Regular.ttf"),
    [Font.GilroySemiBold]: require("~assets/fonts/Gilroy-SemiBold.ttf"),
  });

  const colorScheme = useColorScheme();
  const theme = useMemo(() => {
    if (!colorScheme) return DefaultTheme;
    return colorScheme === "dark" ? DarkTheme : LightTheme;
  }, [colorScheme]);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SafeComponent request={{ loading: !fontsLoaded, data: true }}>
          <Provider store={store}>
            <StatusBar style="dark" />
            <NavigationContainer theme={theme as any}>
              <Router />
            </NavigationContainer>
          </Provider>
        </SafeComponent>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

registerRootComponent(App);