import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthState = "authorized" | "noAuthorized";


const savedAuthStatus = localStorage.getItem("authStatus") as AuthState ?? 'noAuthorized';



export type AuthStatusSliceState = {
    authState: AuthState
}
const initialState: AuthStatusSliceState = {
    authState: savedAuthStatus
}


export const authStatusSlice = createSlice({
    name: "authStatus",
    initialState,
    reducers: {
        setAuthStatus(state, action: PayloadAction<AuthState>) {
            state.authState = action.payload;
            localStorage.setItem("authStatus", action.payload);

        },
    },

    selectors: {
        selectAuthStatus: (state) => state.authState,
    },
});

export const { setAuthStatus } = authStatusSlice.actions;
export const { selectAuthStatus } = authStatusSlice.selectors;

export default authStatusSlice.reducer;
