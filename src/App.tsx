import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50, category: "Food" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Movie Tickets",
      amount: 30,
      category: "Entertainment",
    },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
