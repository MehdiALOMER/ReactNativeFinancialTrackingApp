import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from './CustomDrawerContent';
import { BudgetScreen, TransactionScreen } from '@/screens';
import { colors } from "@/constants";
import BottomTabNavigator from "./BottomTabNavigator";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="BottomTabNavigator"
            drawerContent={props => <CustomDrawerContent {...props} />}
            //overlayColor="rgba(0, 100, 102, 1)"
            screenOptions={{
                drawerPosition: 'left',
                drawerStyle: {
                    backgroundColor: colors.white
                },
                drawerType: "front",
            }}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="TransactionScreen"
                component={TransactionScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="BudgetScreen"
                component={BudgetScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Drawer.Navigator>
    )
}