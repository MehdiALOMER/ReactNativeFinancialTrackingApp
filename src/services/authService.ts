import { ApiConstant } from "@/constants/apiConstant";
import { IUser } from "@/types/dataTypes";
import { NetworkManager } from "@/utils/network/networkManager";
import { StorageService } from "@/utils/storage";
import { Alert } from "react-native";

export class AuthService {

    static async login(user: IUser) {
        try {
            let response = await NetworkManager.post(ApiConstant.loginUrl, user);
            if (response?.status === 404) {
                Alert.alert('Hata', 'Kullanıcı bulunamadı');
                return;
            }
            StorageService.setItem('token', response?.data?.token);
            return response;
        } catch (error: any) {
            return Promise.reject(error);
        }

    }

    static async logout() {
        await StorageService.clearAll();
    }

}   