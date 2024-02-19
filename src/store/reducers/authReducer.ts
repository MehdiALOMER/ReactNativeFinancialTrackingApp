import { setLoading } from "./loadingReducer";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@/services/authService';
import { IUser } from "@/types/dataTypes";

const loginThunk = createAsyncThunk("auth/login", async (payload: { user: IUser, navigation: any }, { dispatch }) => {

    dispatch(setLoading(true));

    let response = await AuthService.login(payload.user);

    if (response?.status === 200) {
        payload.navigation.navigate("DrawerNavigator");
        dispatch(setLoading(false));
        return response?.data?.token;
    }
    else {
        dispatch(setLoading(false));
        return Promise.reject(response);
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        user: {},
        status: "idle",
    },
    reducers: {
        logout: (state) => {
            state.user = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.status = "success";
            state.token = action.payload;
        });
    }
});

export const { logout } = authSlice.actions;
export { loginThunk };

export default authSlice.reducer;