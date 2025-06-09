import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context";

const ExpenseList = () => {
  const { expenses, deleteExpense, editExpense } = useContext(ExpenseContext);
  const [editIdx, setEditIdx] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAmount, setEditAmount] = useState("");

  const startEdit = (idx, exp) => {
    setEditIdx(idx);
    setEditName(exp.name);
    setEditAmount(exp.amount);
  };

  const handleEdit = (idx) => {
    if (!editName.trim() || isNaN(editAmount) || editAmount <= 0) return;
    editExpense(idx, { name: editName, amount: parseFloat(editAmount) });
    setEditIdx(null);
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-neutral-900 rounded shadow p-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-2 text-white">Expense List</h2>
      {expenses.length === 0 ? (
        <div className="text-gray-400">No expenses yet.</div>
      ) : (
        <ul className="divide-y divide-neutral-700">
          {expenses.map((exp, idx) => (
            <li
              key={idx}
              className="py-2 flex items-center justify-between group transition-all duration-300 hover:bg-neutral-800 rounded"
            >
              {editIdx === idx ? (
                <>
                  <input
                    className="bg-neutral-800 text-white border border-neutral-700 rounded px-2 py-1 mr-2 w-24 focus:outline-none focus:ring"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    className="bg-neutral-800 text-white border border-neutral-700 rounded px-2 py-1 mr-2 w-20 focus:outline-none focus:ring"
                    type="number"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                  />
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded transition-all duration-200 mr-2"
                    onClick={() => handleEdit(idx)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-600 hover:bg-gray-700 text-white px-2 py-1 rounded transition-all duration-200"
                    onClick={() => setEditIdx(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text-white font-medium">{exp.name}</span>
                  <span className="text-blue-400 font-mono">
                    ${exp.amount.toFixed(2)}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded transition-all duration-200"
                      onClick={() => startEdit(idx, exp)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded transition-all duration-200"
                      onClick={() => deleteExpense(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
