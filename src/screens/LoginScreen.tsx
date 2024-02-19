import React, { useEffect, useState } from 'react';
import SafeAreaWrapper from '@/components/shared/SafeAreaWrapper';
import { GenericImage, GenericText, GenericTouchableOpacity, GenericView } from '@/assets/css';
import CustomInput from '@/components/shared/CustomInput';
import { colors, dWidth } from '@/constants';
import financialReport from '@/assets/images/financial-report.png';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { IUser } from '@/types/dataTypes';
import { loginThunk } from '@/store/reducers';
import { StorageService } from '@/utils/storage';


const LoginScreen: React.FC = ({ navigation }: any) => {
    const dispatch = useDispatch<AppDispatch>();

    const [user, setUser] = useState<IUser>({ username: 'kminchelle', password: '0lelplR' });


    const handleLogin = () => {
        // login işlemleri burada yapılabilir
        dispatch(loginThunk({ user, navigation }))
            .then(() => {
                setUser({ username: '', password: '' });
            })
            .catch((error) => {
                console.log("LoginScreen :::::: ", error);
            });
    };

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        let token = await StorageService.getItem("token");
        if (token) {
            navigation.navigate('DrawerNavigator');
        }
    }

    const handleRegister = () => {
        /* navigation.navigate('register'); */
    }

    return (
        <SafeAreaWrapper>
            <GenericView flex={1} padding={dWidth * .05}>
                <GenericView flex={3} center>
                    <GenericImage
                        source={financialReport}
                        width={dWidth * .35}
                        height={dWidth * .35}
                    />
                </GenericView>
                <GenericView flex={1}>
                    <CustomInput
                        label='Kullanıcı Adı'
                        value={user.username}
                        onChangeText={(username: string) => setUser({ ...user, username })}
                    />
                </GenericView>
                <GenericView flex={1}>
                    <CustomInput
                        label='Şifre'
                        value={user.password}
                        onChangeText={(password: string) => setUser({ ...user, password })}
                        secureTextEntry
                    />
                </GenericView>
                <GenericView flex={1}>
                    <GenericTouchableOpacity
                        onPress={() => handleLogin()}
                        center
                        padding={10}
                        backgroundColor={colors.primary}
                        borderRadius={10}
                    >
                        <GenericText color={colors.white} bold>Giriş Yap</GenericText>
                    </GenericTouchableOpacity>
                </GenericView>
                <GenericView flex={3} justifyContent='center'>
                    <GenericTouchableOpacity
                        onPress={handleRegister}
                        center
                        padding={10}
                        backgroundColor={colors.primary}
                        borderRadius={10}
                    >
                        <GenericText color={colors.white} bold>Kayıt Ol</GenericText>
                    </GenericTouchableOpacity>
                </GenericView>
            </GenericView>
        </SafeAreaWrapper>
    );
};


export default LoginScreen;
