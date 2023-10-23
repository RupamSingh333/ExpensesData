import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  // const [userInput,setUserInput] = useState({
  //   enterTitle:'',
  //   enterAmount:'',
  //   enterDate:''
  // });

  const closed = () => {
    props.closed(false);
  };

  // props.onChangeFilter(event.target.value);

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterTitle:event.target.value,
    // });
    // setUserInput((prevState)=>{
    //   return {...prevState,enterTitle:event.target.value}
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterAmount:event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterDate:event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(36).substring(2, 5),
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            onChange={titleChangeHandler}
            type="text"
            placeholder="Title"
            value={enterTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            required
            onChange={amountChangeHandler}
            placeholder="Amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="reset" onClick={closed}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
          <button type="submit">Testing</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
