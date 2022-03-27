import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import Body from "./containers/body/Body";
import Contact from "./containers/contact/Contact";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Contact />
      <Footer />
    </div>
  );
}

export default App