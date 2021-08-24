import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const selectedYear = year => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <ExpensesFilter selected={filteredYear} onChangeFilter={selectedYear} />
      <li className="container expenses-list p-2 flex flex-col justify-center aling-center">
        <Card>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </>
  );
};

export default Expenses;
