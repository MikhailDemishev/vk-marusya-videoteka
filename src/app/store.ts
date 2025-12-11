import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { modalOpenCloseSlice } from "../features/modal/model/modalOpenCloseSlice";
import { authModalStatusSlice } from "../features/auth/model/authModalStatusSlice";
import { dropDownOpenCloseSlice } from "../features/dropdown/dropdownOpenCloseSlice";
import { trailerDataSlice } from "../features/movies/model/trailerUrlSlice";

const rootReducer = combineSlices(modalOpenCloseSlice, authModalStatusSlice, dropDownOpenCloseSlice, trailerDataSlice)
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
})

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
