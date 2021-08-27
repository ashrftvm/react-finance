import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";
import Chart from "../Chart/Chart";

const Expenses = (props) => {
  const chartElements = [
    {label: "Jan", val: 0},
    {label: "Feb", val: 0},
    {label: "Mar", val: 0},
    {label: "Apr", val: 0},
    {label: "May", val: 0},
    {label: "Jun", val: 0},
    {label: "Jul", val: 0},
    {label: "Aug", val: 0},
    {label: "Sep", val: 0},
    {label: "Oct", val: 0},
    {label: "Nov", val: 0},
    {label: "Dec", val: 0},
  ]

  const [filteredYear, setFilteredYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
  })

  for(const el of filteredExpenses){
    const month = el.date.getMonth()
    chartElements[month].val += el.amount
  }
  
  let expensesContent = <p className="expenses-list__fallback">No Expenses found.</p>

  if(filteredExpenses.length > 0){
      expensesContent = filteredExpenses.map((el) => 
      <ExpenseItem title={el.title} date={el.date} amount={el.amount} key={el.id} />
    )
  }



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHandler} selected={filteredYear} />
        <Chart items={chartElements}/>
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
