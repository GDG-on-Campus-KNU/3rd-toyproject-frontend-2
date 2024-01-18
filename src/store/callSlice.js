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
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.amount = action.payload.amount;
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
