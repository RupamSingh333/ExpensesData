import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList.js";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear === "all") {
      return expense;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        totalExpenses={filteredExpenses.length}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
