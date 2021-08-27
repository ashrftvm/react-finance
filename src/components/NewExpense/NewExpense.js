import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitNewExpenseHandler = (expense) => {
    const el = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(el)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitNewExpense={submitNewExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
