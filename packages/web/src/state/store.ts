import {configureStore} from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddelware) => getDefaultMiddelware({serializableCheck: false}),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;