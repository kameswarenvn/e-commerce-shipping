import React from "react";
import "./App.css";
import MainDashboard from "./screens/MainDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./screens/MainDashboard/Productdetaiils";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard />} />

          <Route path="/productdetails" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
