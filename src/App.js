import { useState } from 'react';
import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Car',
    amount: 1000,
    date: new Date(2019, 1, 1),
  },
];
function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="conteiner max-w-screen-xl bg-gray-100 flex flex-col justify-center items-center p-10 m-10 rounded">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
