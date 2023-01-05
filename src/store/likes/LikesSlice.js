import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        likesCounter: '',
        isSaving: true,
    },
    reducers: {
        setLikes: (state, action ) => {
            state.likesCounter = action.payload;
        },
        addLike: ( state, action ) => {
            state.likesCounter = action.payload;
        },
        removeLike: ( state, action ) => {
            state.likesCounter = action.payload;
        },
        isSaving: ( state ) => {
            state.isSaving = true;
        },
        notSaving: ( state ) => {
            state.isSaving = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setLikes, addLike, removeLike, isSaving, notSaving } = likesSlice.actions;