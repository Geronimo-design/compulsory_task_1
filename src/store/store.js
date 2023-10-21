/** @format */

// Importing all necessary dependencies
import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import bankingReducer from './bankingSlice.js';

// Configuring a Redux store to contain the banking reducer created in the bankingSlice.js file
const store = configureStore({
  reducer: {
    banker: bankingReducer,
  },
});

export default store;
