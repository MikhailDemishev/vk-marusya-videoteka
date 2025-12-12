import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { modalOpenCloseSlice } from "../features/modal/model/modalOpenCloseSlice";
import { authModalStatusSlice } from "../features/auth/model/authModalStatusSlice";
import { dropDownOpenCloseSlice } from "../features/dropdown/dropdownOpenCloseSlice";
import { trailerDataSlice } from "../features/movies/model/trailerUrlSlice";
import { themeSwitcherSlice } from "../features/theme/themeSwitcherslice";
import { viewPortSizeSlice } from "./hooks/viewPortSizeSlice";

const rootReducer = combineSlices(
    modalOpenCloseSlice,
    authModalStatusSlice,
    dropDownOpenCloseSlice,
    trailerDataSlice,
    themeSwitcherSlice,
    viewPortSizeSlice)
export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
})

export type AppStore = typeof store
export type AppDispatch = AppStore["dispatch"]
