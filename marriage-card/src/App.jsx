import React, { useState } from "react";
import CreateCard from "./components/CreateCard";
import MarriageCard from "./components/MarriageCard";

const App = () => {
  const [isHome, setIsHome] = useState(true);
  const [brideName, setBrideName] = useState("");
  const [bridegroomName, setBridegroomName] = useState("");
  const [brideImage, setBrideImage] = useState(null);
  const [bridegroomImage, setBridegroomImage] = useState(null);

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100 font-serif">
      {isHome ? (
        <CreateCard
          setIsHome={setIsHome}
          setBrideName={setBrideName}
          setBridegroomName={setBridegroomName}
          setBrideImage={setBrideImage}
          setBridegroomImage={setBridegroomImage}
        />
      ) : (
        <MarriageCard
          setIsHome={setIsHome}
          brideName={brideName}
          bridegroomName={bridegroomName}
          brideImage={brideImage}
          bridegroomImage={bridegroomImage}
        />
      )}
    </div>
  );
};

export default App;
