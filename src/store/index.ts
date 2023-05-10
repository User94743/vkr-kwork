import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {UserReducer} from "./user.slice";


export const store = configureStore({
    reducer: {
        UserState: UserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>