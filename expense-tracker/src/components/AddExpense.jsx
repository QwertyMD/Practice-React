import React, { useRef, useContext, useState } from "react";
import { ExpenseContext } from "../context";

const AddExpense = () => {
  const nameRef = useRef();
  const amountRef = useRef();
  const { addExpense } = useContext(ExpenseContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const amount = parseFloat(amountRef.current.value);
    if (!name || isNaN(amount) || amount <= 0) {
      setError("Please enter valid name and amount");
      return;
    }
    addExpense({ name, amount, date: new Date().toISOString() });
    nameRef.current.value = "";
    amountRef.current.value = "";
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto p-4 bg-neutral-900 rounded shadow animate-fade-in"
    >
      <h2 className="text-xl font-bold text-white">Add Expense</h2>
      <input
        ref={nameRef}
        type="text"
        placeholder="Expense Name"
        className="border border-neutral-700 bg-neutral-800 text-white p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-200"
      />
      <input
        ref={amountRef}
        type="number"
        placeholder="Amount"
        className="border border-neutral-700 bg-neutral-800 text-white p-2 rounded focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-200"
      />
      {error && <div className="text-red-400 animate-shake">{error}</div>}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow transition-all duration-200 transform hover:scale-105"
      >
        Add
      </button>
    </form>
  );
};

export default AddExpense;
