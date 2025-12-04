import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    isOpen: boolean;
    type: string | null;
}

const initialState: ModalState = {
    isOpen: false,
    type: null,
};

export const modalOpenCloseSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action: { payload: string }) {
            state.isOpen = true;
            state.type = action.payload;
        },
        closeModal(state) {
            state.isOpen = false;
            state.type = null;
        },
    },

    selectors: {
        selectIsOpen: (state) => state.isOpen,
        selectModalType: (state) => state.type,
    },
});

export const { openModal, closeModal } = modalOpenCloseSlice.actions;
export const { selectIsOpen, selectModalType } = modalOpenCloseSlice.selectors;

export default modalOpenCloseSlice.reducer;
