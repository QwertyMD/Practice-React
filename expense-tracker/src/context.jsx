import React, { createContext, useState, useEffect } from "react";

export const ExpenseContext = createContext();

const STORAGE_KEY = "expense-tracker-expenses";

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  };

  const editExpense = (index, updatedExpense) => {
    setExpenses((prev) =>
      prev.map((exp, i) => (i === index ? { ...exp, ...updatedExpense } : exp))
    );
  };

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, editExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
