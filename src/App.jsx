import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/shared/Navbar";
import Achiever from "./components/home/achiever";  
import Footer from "./components/shared/Footer";  

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Achiever />
      <Footer />
    </div>
  );
}

export default App;