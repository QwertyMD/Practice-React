import React, { useContext } from "react";
import { ExpenseContext } from "../context";

const Summary = () => {
  const { expenses } = useContext(ExpenseContext);
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="max-w-md mx-auto mt-6 bg-neutral-900 rounded shadow p-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-2 text-white">Summary</h2>
      <div className="text-lg text-blue-400">
        Total Expenses:{" "}
        <span className="font-bold text-white">${total.toFixed(2)}</span>
      </div>
      <div className="mt-2 text-gray-400">
        Number of Entries: {expenses.length}
      </div>
    </div>
  );
};

export default Summary;
