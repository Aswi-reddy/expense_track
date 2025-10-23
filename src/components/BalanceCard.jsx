import '../styles/BalanceCard.css'

function BalanceCard({ balance, income, expense }) {
  return (
    <div className="balance-card">
      <div className="balance-main">
        <p className="balance-label">Your Balance</p>
        <h2 className={`balance-amount ${balance < 0 ? 'negative' : ''}`}>
          ₹ {balance.toFixed(2)}
        </h2>
      </div>

      <div className="balance-split">
        <div className="income-box">
          <p className="label">Income</p>
          <p className="amount income">₹ {income.toFixed(2)}</p>
        </div>
        <div className="expense-box">
          <p className="label">Expense</p>
          <p className="amount expense">₹ {expense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default BalanceCard