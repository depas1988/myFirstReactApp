import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpensesData) => {
    const expenseData = {
      ...enteredExpensesData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  // const addNewExpenseButtonHandler = function () {
  //   return (
  //     <div className="new-expense">
  //       <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
  //       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
  //     </div>
  //   );
  // };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;

{
  /* <button onClick={addNewExpenseButtonHandler}>Add New Expense</button> */
}
