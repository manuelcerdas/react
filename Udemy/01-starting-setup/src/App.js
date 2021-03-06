import ExpenseComponent from "./components/ExpenseItem/ExpenseItem";
import Card from './components/Card/Card';
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Card className="expenses">
      {
        expenses.map(expense => (
          <Card key={expense.id}>
            <ExpenseComponent title={expense.title} date={expense.date} amount={expense.amount} />
          </Card>
        ))
      }      
      </Card>
    </div>
    
  );
}

export default App;
