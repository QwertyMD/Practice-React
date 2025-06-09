import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExpenseProvider } from "./context";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Summary from "./pages/Summary";

const App = () => {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
};

export default App;
