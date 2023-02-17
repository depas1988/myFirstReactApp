import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // const [title, setTitle] = useState(props.title);

  //let title = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
