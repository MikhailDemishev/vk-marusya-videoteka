import { createSlice } from "@reduxjs/toolkit";

export type ModalType = "auth" | null;

interface ModalState {
    isOpen: boolean;
    type: ModalType;
}

const initialState: ModalState = {
    isOpen: false,
    type: null,
};

export const modalOpenCloseSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal(state, action: { payload: Exclude<ModalType, null> }) {
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
