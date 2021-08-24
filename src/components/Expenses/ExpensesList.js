import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <ul>
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          expenseTitle={expense.title}
          expenseDate={expense.date}
          expenseAmount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
