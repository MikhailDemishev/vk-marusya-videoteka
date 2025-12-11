import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ITrailerData {
    trailerUrl: string | null | undefined;
    trailerDesc: string | null | undefined;
}

const initialState: ITrailerData = {
    trailerUrl: null,
    trailerDesc: null,
};

export const trailerDataSlice = createSlice({
    name: "trailerDataSlice",
    initialState,
    reducers: {
        setTrailerData(
            state,
            action: PayloadAction<{ trailerUrl: string | null | undefined; trailerDesc: string | null | undefined }>
        ) {
            state.trailerUrl = action.payload.trailerUrl;
            state.trailerDesc = action.payload.trailerDesc;
        },

        resetTrailerData(state) {
            state.trailerUrl = null;
            state.trailerDesc = null;
        },
    },

    selectors: {
        selectTrailerUrl: (state) => state.trailerUrl,
        selectTrailerDesc: (state) => state.trailerDesc,
        selectTrailerData: (state) => state,
    },
});

export const { setTrailerData, resetTrailerData } = trailerDataSlice.actions;
export const { selectTrailerUrl, selectTrailerDesc, selectTrailerData } =
    trailerDataSlice.selectors;

export default trailerDataSlice.reducer;
