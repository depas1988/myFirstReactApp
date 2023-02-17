import "./NewExpense.css";
import React from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [isFormClosed, setIsFormClosed] = React.useState(true);

  const addNewExpenseButtonHandler = function () {
    setIsFormClosed(false);
  };

  const cancelFormButtonHandler = function (isFormClosed) {
    console.log(isFormClosed);
    setIsFormClosed(isFormClosed);
  };

  return (
    <div className="new-expense">
      {isFormClosed ? (
        <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelForm={cancelFormButtonHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
