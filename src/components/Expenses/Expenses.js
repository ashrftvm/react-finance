import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
  })
  
  let expensesContent = <p>No Expenses found.</p>

  if(filteredExpenses.length > 0){
      expensesContent = filteredExpenses.map((el) => 
      <ExpenseItem title={el.title} date={el.date} amount={el.amount} key={el.id} />
    )
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHandler} selected={filteredYear} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
