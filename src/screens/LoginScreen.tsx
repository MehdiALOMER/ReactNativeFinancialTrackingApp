import React from 'react';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { GenericText, GenericTouchableOpacity } from '@/assets/css';



const LoginScreen: React.FC = ({ navigation }: any) => {



    return (
        <SafeAreaWrapper>
            <GenericTouchableOpacity
                onPress={() => {
                    navigation.navigate('DrawerNavigator');
                }}
            >
                <GenericText>
                    Anasayfa
                </GenericText>
            </GenericTouchableOpacity>
        </SafeAreaWrapper>
    );
};


export default LoginScreen;
