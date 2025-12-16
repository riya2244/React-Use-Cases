import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import Summary from './components/Summary'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Expense Tracker</h1>
        <p>Track your expenses with Zustand state management</p>
      </header>
      
      <main className="app-main">
        <Summary />
        <ExpenseForm />
        <ExpenseList />
      </main>
    </div>
  )
}

export default App
