import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { modalOpenCloseSlice } from "../features/modal/modalOpenCloseSlice";
import { authModalStatusSlice } from "../features/auth/model/authModalStatusSlice";
import { authStatusSlice } from "../features/auth/model/authStatusSlice";

const rootReducer = combineSlices(modalOpenCloseSlice, authModalStatusSlice, authStatusSlice)
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
})

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
