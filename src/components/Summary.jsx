import useExpenseStore from '../store/expenseStore';
import './Summary.css';

const Summary = () => {
  const expenses = useExpenseStore((state) => state.expenses);
  const getTotal = useExpenseStore((state) => state.getTotal);
  const getExpensesByCategory = useExpenseStore((state) => state.getExpensesByCategory);

  const total = getTotal();
  const categoryTotals = getExpensesByCategory();

  return (
    <div className="summary">
      <div className="summary-card total-card">
        <h3>Total Expenses</h3>
        <p className="total-amount">${total.toFixed(2)}</p>
        <p className="total-count">{expenses.length} transaction{expenses.length !== 1 ? 's' : ''}</p>
      </div>
      
      {Object.keys(categoryTotals).length > 0 && (
        <div className="summary-card category-card">
          <h3>By Category</h3>
          <div className="category-breakdown">
            {Object.entries(categoryTotals)
              .sort(([, a], [, b]) => b - a)
              .map(([category, amount]) => (
                <div key={category} className="category-item">
                  <span className="category-name">{category}</span>
                  <span className="category-amount">${amount.toFixed(2)}</span>
                  <div className="category-bar">
                    <div
                      className="category-bar-fill"
                      style={{ width: `${(amount / total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
