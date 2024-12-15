import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import EnterNumbers from "./components/EnterNumbers";
import PreviousTrees from "./components/PreviousTrees";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterNumbers" element={<EnterNumbers />} />
        <Route path="/previousTrees" element={<PreviousTrees />} />
      </Routes>
    </div>
  );
}

export default App;
