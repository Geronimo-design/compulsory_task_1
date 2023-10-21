/** @format */
// Importing all necessary dependencies
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deposit,
  withdraw,
  addInterest,
  charges,
} from './store/bankingSlice.js';

// Creating a Banker component
const Banker = () => {
  // Using useDispatch to be able to dispatch actions
  const dispatch = useDispatch();

  // Using useState to be able to set the initial state of the input field
  const [amount, setAmount] = useState();

  // Declaring that the balance must hold the current state of the balance property in the banker state slice from the bankingSlice file
  const balance = useSelector((state) => state.banker.balance);

  // Declaring a function to update the state of the input field's value
  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value));
  };

  // Declaring four handler functions for each possible action linked to their respective buttons
  const handleDeposit = () => {
    if (amount > 0) {
      dispatch(deposit(amount));
    }
  };

  const handleWithdraw = () => {
    if (amount > 0) {
      dispatch(withdraw(amount));
    }
  };

  const handleAddInterest = () => {
    if (amount > 0) {
      dispatch(addInterest(amount));
    }
  };

  const handleCharges = () => {
    if (amount > 0) {
      dispatch(charges(amount));
    }
  };

  // JSX code that returns the UI of this component
  return (
    <div>
      {/*This div contains an input field and two paragraphs*/}
      <div>
        <p>Account Balance: R{balance}</p>
        <p>
          Enter an Amount to deposit, withdraw, add interest or add charges
          below.
        </p>
        <p>
          Click on the associated button afterwards to carry out the action.
        </p>
        <input value={amount} onChange={handleAmountChange} />
      </div>

      {/*This div contains the four buttons with action dispatchers linked to them*/}
      <div className='buttons'>
        <button className='button' onClick={handleDeposit}>
          Deposit
        </button>
        <button className='button' onClick={handleWithdraw}>
          Withdraw
        </button>
        <button className='button' onClick={handleAddInterest}>
          Add Interest
        </button>
        <button className='button' onClick={handleCharges}>
          Charges
        </button>
      </div>
    </div>
  );
};

export default Banker;
