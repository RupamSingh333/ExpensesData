import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const onSaveExpenseData = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
  };

  const [addExpenses, setExpenses] = useState(false);

  const openClosed = () => {
    setExpenses((prevExpenses) => {
      if (prevExpenses) {
        return false;
      } else {
        return true;
      }
    });
  };

  return (
    <div className="new-expense">
      {!addExpenses && <button onClick={openClosed}>Add New Expenses</button>}
      {addExpenses && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          closed={openClosed}
        />
      )}
    </div>
  );
};

export default NewExpense;
