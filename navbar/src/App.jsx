import React, { useEffect } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="space-y-10 bg-[#201f31]">
      <header className="bg-[#ffbade]">
        <Navbar />
      </header>
      <main className="mx-10 text-white">
        <div className="card-container gap-5">
          <Card />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
