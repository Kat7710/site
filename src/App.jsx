import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Career from "./components/Career";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
