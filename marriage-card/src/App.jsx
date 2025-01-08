import React, { useState } from "react";
import CreateNew from "./components/CreateNew";
import CreateCard from "./components/CreateCard";

const App = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      {isHome ? (
        <CreateNew setIsHome={setIsHome} />
      ) : (
        <CreateCard setIsHome={setIsHome} />
      )}
    </div>
  );
};

export default App;
