import React from "react";
import Counter from "../components/Counter";

const Page3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-yellow-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-4xl font-bold text-pink-700 mb-6 drop-shadow">
          Page 3
        </h1>
        <div className="w-full flex flex-col items-center">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default Page3;
