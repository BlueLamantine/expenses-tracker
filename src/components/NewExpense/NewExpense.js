import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const saveExpDataHandelr = enteredData => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdit(false);
  };

  const [isEdit, setIsEdit] = useState(false);
  const editingHandler = () => {
    setIsEdit(true);
  };
  const stopEditingHandler = () => {
    setIsEdit(false);
  }
  return (
    <div className="new-expense p-5">
      {!isEdit && (
        <button
          onClick={editingHandler}
          onCances={stopEditingHandler}
          className="md:bg-gray-500 md:hover:bg-gray-700 text-gray-100 p-2 rounded"
        >
          Add New Expense
        </button>
      )}
      {isEdit && <ExpenseForm onSaveExpenseDate={saveExpDataHandelr} />}
    </div>
  );
};

export default NewExpense;
