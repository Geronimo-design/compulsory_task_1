/** @format */

// Importing all necessary dependencies
import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

// Initialising the state of the account balance
const initialState = {
  balance: 0,
};

// Setting the interest rate to 5%
const interestRate = 0.05;

// Setting the charges rate to 15%
const chargesRate = 0.15;

//Creating a slice of state for the banking app, passing its name, initial state, and action creators to it
const bankingSlice = createSlice({
  name: 'banking',
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
    addInterest: (state, action) => {
      state.balance += action.payload * interestRate;
    },
    charges: (state, action) => {
      state.balance -= action.payload * chargesRate;
    },
  },
});

// Exporting the action creators and reducer
export const { deposit, withdraw, addInterest, charges } = bankingSlice.actions;
export default bankingSlice.reducer;
