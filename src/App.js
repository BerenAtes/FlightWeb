import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-flights" element={<MyFlights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
