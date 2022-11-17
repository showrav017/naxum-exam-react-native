import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "styled-components/native";
import Authentication from "./Authentication";

import {
    createStackNavigator,
    CardStyleInterpolators
  } from "@react-navigation/stack";
import { RootStackParamList } from "~src/@types/react-navigation.d";
import { SceneName } from "~src/@types/SceneName";


const Stack = createStackNavigator<RootStackParamList>();

function Router() {
    const theme = useContext(ThemeContext);
  
    return (
        <Stack.Navigator
          initialRouteName={SceneName.Authentication}
          screenOptions={{
            headerShown: false,
            headerBackTitle: "Voltar",
            headerTitleAlign: "center",
            headerStyle: {
             backgroundColor: theme.colors.background,
            },
            headerTitleStyle: {
             fontFamily: theme.typography.fontFamily.bold,
             fontSize: 20,
             color: theme.colors.text,
            },
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        >
          <Stack.Group>
            <Stack.Screen
              name={SceneName.Authentication}
              component={Authentication}
            />
          </Stack.Group>
        </Stack.Navigator>
      );
}

export default Router;