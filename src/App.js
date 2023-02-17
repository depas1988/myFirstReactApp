import Expense from "./components/Expenses/Expense.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

function App() {
  const arrInitial = [
    { title: "Car Insurance0", amount: 294, date: new Date(2020, 2, 28) },
    { title: "Car Insurance2", amount: 294, date: new Date(2022, 2, 28) },
    { title: "Car Insurance3", amount: 294, date: new Date(2021, 2, 29) },
  ];

  const [arr, setArr] = useState(arrInitial);

  const addExpensesHandler = (expense) => {
    setArr((prevState) => [expense, ...prevState]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpensesHandler}></NewExpense>
      <Expense arr={arr} />
    </div>
  );
}

export default App;
