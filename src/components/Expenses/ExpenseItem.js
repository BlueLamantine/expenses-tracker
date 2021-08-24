import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem({ expenseDate, expenseTitle, expenseAmount }) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car';
  // const expenseAmount = 1000;

  return (
    <Card className="expense-item container flex text-center p-3 mt-8 items-center bg-white text-gray-800 border border-gray-300 shadow-inner rounded">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__desc container flex justify-around p-3">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price p-2">${expenseAmount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
