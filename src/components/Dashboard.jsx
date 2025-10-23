import { useState, useEffect } from 'react'
import '../styles/Dashboard.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'
import BalanceCard from './BalanceCard'

function Dashboard({ userName, onLogout }) {
  const storageKey = `expenzo_${userName}`
  
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem(`${storageKey}_expenses`)
    return saved ? JSON.parse(saved) : []
  })
  
  const [income, setIncome] = useState(() => {
    const saved = localStorage.getItem(`${storageKey}_income`)
    return saved ? parseFloat(saved) : 0
  })

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`${storageKey}_expenses`, JSON.stringify(expenses))
  }, [expenses, storageKey])

  // Save income to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`${storageKey}_income`, income.toString())
  }, [income, storageKey])

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id))
  }

  const handleAddIncome = (amount) => {
    if (amount > 0) {
      setIncome(income + amount)
    }
  }

  const totalExpense = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0)
  const balance = income - totalExpense

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Welcome <span className="user-name">{userName}</span></h1>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </header>

      <div className="dashboard-content">
        <div className="left-section">
          <BalanceCard balance={balance} income={income} expense={totalExpense} />
          
          <ExpenseForm onAddExpense={handleAddExpense} onAddIncome={handleAddIncome} />
        </div>

        <div className="right-section">
          <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard