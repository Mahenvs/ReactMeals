import ExpenseItem from './components/ExpenseItem'

function App() {
  const expenses = [
    {id:'a1',title:'Insurance Bike',amount:500,expenseDate:new Date(2022,9,28)},
    {id:'a2',title:'Groceries',amount:90,expenseDate:new Date(2023,8,28)},
    {id:'a3',title:'Room Rent',amount:200,expenseDate:new Date(2021,7,28)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} dateE={expenses[0].expenseDate}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} dateE={expenses[1].expenseDate}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} dateE={expenses[2].expenseDate}></ExpenseItem>
    </div>
  );
}

export default App;
