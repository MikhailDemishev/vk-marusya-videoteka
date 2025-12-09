import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ITrailerUrl {
    trailerUrl: string | null | undefined;
}

const initialState: ITrailerUrl = {
    trailerUrl: null,
};

export const trailerUrlSlice = createSlice({
    name: "trailerUrlSlice",
    initialState,
    reducers: {
        setTrailerUrl(state, action: PayloadAction<string | null | undefined>) {
            state.trailerUrl = action.payload;
        },
        resetTrailerUrl(state) {
            state.trailerUrl = null;
        },
    },

    selectors: {
        selectTrailerUrl: (state) => state.trailerUrl,
    },
});

export const { setTrailerUrl, resetTrailerUrl } = trailerUrlSlice.actions;
export const { selectTrailerUrl } = trailerUrlSlice.selectors;

export default trailerUrlSlice.reducer;
