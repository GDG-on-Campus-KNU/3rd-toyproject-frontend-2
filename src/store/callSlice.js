import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: 0,
    name: '',
    amount: 0,
};

const callSlice = createSlice({
    name: 'call',
    initialState,
    reducers: {
        addCall: (state, action) => {
            state.id = action.payload;
            state.name = action.payload;
            state.amount += 1;
        },
        removeCall: (state, action) => {
            state.id = 0;
            state.name = '';
            state.amount = 0;
        },
    },
});

export const callActions = callSlice.actions;

export default callSlice;
