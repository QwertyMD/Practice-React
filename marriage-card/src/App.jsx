import React, { useState } from "react";
import CreateNew from "./components/CreateNew";
import CreateCard from "./components/CreateCard";

function App() {
  const [isHome, setisHome] = useState(true);

  return (
    <>
      {isHome ? (
        <CreateNew setisHome={setisHome} />
      ) : (
        <CreateCard setisHome={setisHome} />
      )}
    </>
  );
}

export default App;
