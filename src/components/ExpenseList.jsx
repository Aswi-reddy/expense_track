import '../styles/ExpenseList.css'

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      <h3>Expense History</h3>
      
      {expenses.length === 0 ? (
        <div className="empty-state">
          <p>No expenses yet 😊</p>
          <p>Start tracking your expenses!</p>
        </div>
      ) : (
        <div className="expense-items">
          {expenses.map((expense, index) => (
            <div key={expense.id} className="expense-item">
              <div className="expense-icon">
                {index % 3 === 0 ? '🛍️' : index % 3 === 1 ? '🚗' : '🍔'}
              </div>
              <div className="expense-details">
                <p className="expense-description">{expense.description}</p>
                <p className="expense-date">{expense.date}</p>
              </div>
              <div className="expense-amount-section">
                <p className="expense-amount">₹ {expense.amount.toFixed(2)}</p>
                <button 
                  className="delete-btn"
                  onClick={() => onDeleteExpense(expense.id)}
                  title="Delete expense"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExpenseList