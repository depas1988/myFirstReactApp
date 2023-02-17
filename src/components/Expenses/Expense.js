import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";
import React from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart";

function Expense({ arr }) {
  const [filteredYear, setFilteredYear] = React.useState("2019");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
    console.log(year);

    //console.log(year);
  };

  const arrFiltered = arr.filter(
    (x) => x.date.getFullYear().toString() === filteredYear
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterYear={filterYearHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={arrFiltered}></ExpensesChart>
        <ExpensesList items={arrFiltered}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expense;
