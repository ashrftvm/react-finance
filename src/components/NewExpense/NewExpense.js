import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

  const submitNewExpenseHandler = (expense) => {
    const el = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(el)
    setIsEditing(false)

  };

  const setFormEditHandler = () => {
      setIsEditing(true)
  }

  const cancelFormHandler = () => {
      setIsEditing(false)
  }
  
  return (
    <div className="new-expense">
        {!isEditing && <button type="button" onClick={setFormEditHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onFormCancel={cancelFormHandler} onSubmitNewExpense={submitNewExpenseHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
