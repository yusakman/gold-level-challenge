import React from "react";
import Cars from "./pages/Cars";
import DetailCar from "./pages/DetailCar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carimobil" element={<Cars />} />
        <Route path="/detail" element={<DetailCar />} />
      </Routes>
    </div>
    
  );
}

export default App;
