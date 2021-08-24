import { useState } from 'react';
const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = event => {
    event.preventDefault();

    const extanseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseDate(extanseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form className="flex items-center" onSubmit={submitHandler}>
      <fieldset className="new-expense__controls">
        <div className="new-expense__control p-3 flex justify-between">
          <label>Title</label>
          <input
            type="text"
            className="md:bg-gray-200 md:focus:bg-white ml-5 rounded"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control p-3 flex justify-between">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="ml-5 rounded"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control p-3 flex justify-between">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            className="ml-5 rounded"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </fieldset>
      <div className="new-expense__actions p-3 text-center flex justify-center flex-col-reverse">
        <button
          onClick={props.onCancel}
          className="md:bg-gray-500 md:hover:bg-gray-700 text-gray-100 p-2 m-3 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="md:bg-gray-500 md:hover:bg-gray-700 text-gray-100 p-2 m-3 rounded"
        >
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
