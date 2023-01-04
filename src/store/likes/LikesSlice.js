import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
        decrement: (state, /* action */ ) => {
            state.counter -= 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment, decrement } = likesSlice.actions;