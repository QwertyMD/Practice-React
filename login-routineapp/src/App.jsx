import React, { useState } from "react";
import Onboard from "./components/Onboard";
import Login from "./components/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false)
  return (
      !isLogin ? <Onboard setIsLogin={setIsLogin} /> : <Login />
  )
}

export default App;
