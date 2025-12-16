import useExpenseStore from '../store/expenseStore';
import './ExpenseList.css';

const ExpenseList = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const deleteExpense = useExpenseStore((state) => state.deleteExpense);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="expense-list">
      <h2>Expense History</h2>
      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses yet. Add your first expense above!</p>
      ) : (
        <div className="expenses">
          {expenses.map((expense) => (
            <div key={expense.id} className="expense-item">
              <div className="expense-details">
                <div className="expense-header">
                  <span className="expense-description">{expense.description}</span>
                  <span className="expense-amount">${expense.amount.toFixed(2)}</span>
                </div>
                <div className="expense-meta">
                  <span className="expense-category">{expense.category}</span>
                  <span className="expense-date">{formatDate(expense.date)}</span>
                </div>
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteExpense(expense.id)}
                aria-label="Delete expense"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
