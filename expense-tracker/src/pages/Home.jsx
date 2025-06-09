import React from "react";
import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";

const Home = () => (
  <div className="p-4 min-h-screen bg-gradient-to-br from-neutral-950 to-blue-950 animate-fade-in">
    <AddExpense />
    <ExpenseList />
    <ExpenseChart />
  </div>
);

export default Home;
