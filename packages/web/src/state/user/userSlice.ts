import Cookies from 'js-cookie'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@blog/types';

interface UserState {
    isAuthenticated: boolean,
    user: User | null
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            if (state.isAuthenticated === false) state.isAuthenticated = true;
        },
        loginUser: (state, action: PayloadAction<string>) => {
            const jsonToken = JSON.stringify(action.payload)
            Cookies.set('userToken', jsonToken, { expires: 60 })
            state.isAuthenticated = true;
        },
        logOutUser: (state) => {
            Cookies.remove('userToken')
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const { setUser, loginUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;