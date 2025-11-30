import { createSlice } from "@reduxjs/toolkit";
import { type AuthType } from "./types";



interface IAuthModalStatus {
    status: AuthType;
}

const initialState: IAuthModalStatus = {
    status: 'login',
};

export const authModalStatusSlice = createSlice({
    name: "authModalStatus",
    initialState,
    reducers: {
        setAuthModalStatus(state, action: { payload: AuthType }) {
            state.status = action.payload;
        },
    },

    selectors: {
        selectAuthModalStatus: (state) => state.status,
    },
});

export const { setAuthModalStatus } = authModalStatusSlice.actions;
export const { selectAuthModalStatus } = authModalStatusSlice.selectors;

export default authModalStatusSlice.reducer;
