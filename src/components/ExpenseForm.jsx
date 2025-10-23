import { useState } from 'react'
import '../styles/ExpenseForm.css'

function ExpenseForm({ onAddExpense, onAddIncome }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [showIncomeForm, setShowIncomeForm] = useState(false)

  const handleAddExpense = (e) => {
    e.preventDefault()
    if (description.trim() && amount > 0) {
      onAddExpense({
        description,
        amount: parseFloat(amount),
        date: new Date().toLocaleDateString()
      })
      setDescription('')
      setAmount('')
    }
  }

  const handleAddIncome = (e) => {
    e.preventDefault()
    if (amount > 0) {
      onAddIncome(parseFloat(amount))
      setAmount('')
      setShowIncomeForm(false)
    }
  }

  if (showIncomeForm) {
    return (
      <div className="expense-form income-form">
        <h3>Add Income</h3>
        <form onSubmit={handleAddIncome}>
          <div className="form-group">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter your income amount..."
              className="input-field"
              step="0.01"
              min="0"
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="add-btn income-btn">
              ✓ Add Income
            </button>
            <button 
              type="button" 
              className="cancel-btn"
              onClick={() => {
                setShowIncomeForm(false)
                setAmount('')
              }}
            >
              ✕ Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="expense-form">
      <h3>Expense Tracker</h3>
      <form onSubmit={handleAddExpense}>
        <div className="form-group">
          <label>Expense Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your Expense Description..."
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter your Amount, Expense[s] or Income [...]"
            className="input-field"
            step="0.01"
            min="0"
          />
        </div>

        <button type="submit" className="add-btn">
          + Add Expense
        </button>
      </form>

      <button 
        className="income-toggle-btn"
        onClick={() => setShowIncomeForm(true)}
      >
        💵 Add Income
      </button>
    </div>
  )
}

export default ExpenseForm