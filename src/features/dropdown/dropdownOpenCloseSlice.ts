import { createSlice } from "@reduxjs/toolkit";

interface DropDownState {
    isOpen: boolean;
}

const initialState: DropDownState = {
    isOpen: false,
};

export const dropDownOpenCloseSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        openDropDown(state) {
            state.isOpen = true;
        },
        closeDropDown(state) {
            state.isOpen = false;
        },
    },

    selectors: {
        selectDropDownIsOpen: (state) => state.isOpen,
    },
});

export const { openDropDown, closeDropDown } = dropDownOpenCloseSlice.actions;
export const { selectDropDownIsOpen } = dropDownOpenCloseSlice.selectors;

export default dropDownOpenCloseSlice.reducer;
