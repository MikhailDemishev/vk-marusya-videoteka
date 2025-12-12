import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type screenType = "desktop" | "tablet" | "mobile";

interface IViewPortSizeState {
    screenType: screenType;

}

const initialState: IViewPortSizeState = {
    screenType: "desktop",
};

export const viewPortSizeSlice = createSlice({
    name: "viewPortSize",
    initialState,
    reducers: {
        setPortSize(
            state,
            action: PayloadAction<{ screenType: screenType }>
        ) {
            const { screenType } = action.payload;
            state.screenType = screenType;
        },
    },

    selectors: {

        selectScreenType: (state) => state.screenType,
    },
});

export const { setPortSize } = viewPortSizeSlice.actions;
export const { selectScreenType } = viewPortSizeSlice.selectors;

export default viewPortSizeSlice.reducer;
