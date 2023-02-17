import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  //const [enteredTitle, setEnteredTitle] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangedHandler = (event) => {
    //setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  //const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangedHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  //const [enteredDate, setEnteredDate] = useState("");

  const dateChangedHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHander = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHander}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangedHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={amountChangedHandler}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            onChange={dateChangedHandler}
            min="2019-01-01"
            max="2023-12-31"
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
