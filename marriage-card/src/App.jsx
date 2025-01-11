import React, { useState } from "react";
import CreateCard from "./components/CreateCard";
import MarriageCard from "./components/MarriageCard";
const App = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100">
      {isHome ? (
        <CreateCard setIsHome={setIsHome} />
      ) : (
        <MarriageCard setIsHome={setIsHome} />
      )}
    </div>
  );
};

export default App;
