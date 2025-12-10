import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/shared/Navbar";  
import Career from "./components/home/career";  
function App() {
  return (
    <div>
      <Navbar />
      <Career/>
    </div>
  );
}

export default App;