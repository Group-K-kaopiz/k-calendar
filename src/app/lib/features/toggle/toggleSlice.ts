'use client'

import { createSlice } from '@reduxjs/toolkit';
import { State } from '../../definitions';

const initialState: State = {
    toggleSideNav: false,
};

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleSideNav(state) {
            state.toggleSideNav = !state.toggleSideNav;
        },
    }
});

export const { toggleSideNav } = toggleSlice.actions;

export default toggleSlice.reducer;