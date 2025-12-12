import { createSlice } from "@reduxjs/toolkit";


const savedTheme = localStorage.getItem("themeColor") ?? "dark";

export type ThemeSliceState = {
    color: string
}
const initialState: ThemeSliceState = {
    color: savedTheme
}

export const themeSwitcherSlice = createSlice({
    name: "themeSwitcher",
    initialState,
    reducers: {

        setColor(state, action: { payload: string }) {
            state.color = action.payload;
        }
    },
    selectors: {
        selectColor: themeSwitcher => themeSwitcher.color,
    },
});
export const { selectColor } = themeSwitcherSlice.selectors


export const { setColor } = themeSwitcherSlice.actions;
export default themeSwitcherSlice.reducer;
