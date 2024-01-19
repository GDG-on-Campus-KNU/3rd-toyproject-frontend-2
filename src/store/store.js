import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './toastSlice';
import callSlice from './callSlice';

export const store = configureStore({
    reducer: {
        toast: toastReducer,
        call: callSlice.reducer,
    },
});
