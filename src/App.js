import React from "react";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider />
    </div>
    
  );
}

export default App