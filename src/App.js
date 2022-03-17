import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Body from "./containers/body/Body";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}

export default App