import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
    name: 'likes',
    initialState: {
        likesCounter: '',
        isLoaded: false,
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
        isLoaded: ( state ) => {
            state.isLoaded = true;
        },
        notLoaded: ( state ) => {
            state.isLoaded = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setLikes, addLike, removeLike, isSaving, notSaving, isLoaded, notLoaded } = likesSlice.actions;