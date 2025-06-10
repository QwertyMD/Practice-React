import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Home from "./pages/Home";
import { CounterProvider } from "./contexts/Context";

const App = () => {

  return (
    <CounterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  );
};

export default App;
