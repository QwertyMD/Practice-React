import React from "react";
import { useCounter } from "../contexts/Context";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-xs">
      <div className="text-6xl font-extrabold text-purple-700 mb-4 transition-all duration-300 animate-pulse">
        {count}
      </div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={decrement}
          className="bg-red-100 hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded-lg shadow transition"
        >
          -
        </button>
        <button
          onClick={reset}
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded-lg shadow transition"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="bg-green-100 hover:bg-green-200 text-green-600 font-bold py-2 px-4 rounded-lg shadow transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
