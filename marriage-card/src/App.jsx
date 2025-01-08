import React, { useState } from "react";
import CreateNew from "./components/CreateNew";
import CreateCard from "./components/CreateCard";

const App = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      {isHome ? (
        <CreateNew setIsHome={setIsHome} />
      ) : (
        <CreateCard setIsHome={setIsHome} />
      )}
    </>
  );
};

export default App;
