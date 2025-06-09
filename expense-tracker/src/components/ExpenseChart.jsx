import React, { useContext } from "react";
import { ExpenseContext } from "../context";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ExpenseChart = () => {
  const { expenses } = useContext(ExpenseContext);

  // Group by day for chart
  const data = expenses.reduce((acc, exp) => {
    const day = new Date(exp.date).toLocaleDateString();
    const found = acc.find((d) => d.day === day);
    if (found) {
      found.amount += exp.amount;
    } else {
      acc.push({ day, amount: exp.amount });
    }
    return acc;
  }, []);

  return (
    <div className="max-w-md mx-auto mt-6 bg-neutral-900 rounded shadow p-4 animate-fade-in">
      <h2 className="text-xl font-bold mb-2 text-white">Expenses Chart</h2>
      {data.length === 0 ? (
        <div className="text-gray-400">No data to display.</div>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="day" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                background: "#222",
                border: "none",
                color: "#fff",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar
              dataKey="amount"
              fill="#60a5fa"
              radius={[8, 8, 0, 0]}
              isAnimationActive={true}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ExpenseChart;
