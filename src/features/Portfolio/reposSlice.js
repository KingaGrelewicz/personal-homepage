import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
    name: 'repos',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        fetchReposStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchReposFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchReposSuccess: (state, { payload: repos }) => {
            state.loading = false;
            state.data = repos;
        },
    }
});

export const {
    fetchReposStart,
    fetchReposFailure,
    fetchReposSuccess,
} = reposSlice.actions;

export const selectReposState = state => state.repos.data;

export default reposSlice.reducer;