import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, NotificationScreen } from '@/screens';
import DrawerNavigator from './DrawerNavigator';


export type RootStackParamList = {
    LoginScreen: undefined;
    NotificationScreen: undefined;
    DrawerNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();



const AppStackNavigator = () => {

    useEffect(() => {

    }, []);

    return (
        <Stack.Navigator
            /* initialRouteName="AppStackNavigator" */
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} />
            <Stack.Screen name={"NotificationScreen"} component={NotificationScreen} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;