import React, { useState } from "react";
import Stopwatch from "./components/Stopwatch";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div className={isDark && "dark"}>
      <div className="min-h-screen dark:bg-[#201f3e] dark:text-white flex justify-center items-center">
        <Stopwatch isDark={isDark} setIsDark={setIsDark} />
      </div>
    </div>
  );
}

export default App;
