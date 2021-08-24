function ExpenseDate({expenseDate}) {
  const month = expenseDate.toLocaleString('en-US', { month: 'short' });
  const day = expenseDate.toLocaleString('en-US', { day: '2-digit' });
  const year = expenseDate.getFullYear();

  return (
    <div className="expense-item__date p-2">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
