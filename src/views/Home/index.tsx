import React, { useState, useContext } from "react";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    Button,
} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import ContactList from "~src/views/Home/ContactList";
import AddContact from "~src/views/Home/AddContact";

export const useCustomBottomInset = () => {
    const insets = useSafeAreaInsets();
    return Math.max(20, insets.bottom + 5);
};


const Home = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName="ConatctList"
            drawerContent=
            {(props) => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="ConatctList" component={ContactList} />
            <Drawer.Screen name="AddContact" component={AddContact} />
        </Drawer.Navigator>
    );
};

function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;

    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Hi HI HI</Text>
                <Text>User Profile</Text>
                <Text>Log Out</Text>
            </View>
        </DrawerContentScrollView>
    );
}

export default Home;
