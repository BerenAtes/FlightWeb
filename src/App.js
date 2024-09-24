import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyFlights from "./pages/MyFlights";
import "./App.css";

function App() {
  const [selectedFlights, setSelectedFlights] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedFlights={selectedFlights}
              setSelectedFlights={setSelectedFlights}
            />
          }
        />
        <Route
          path="/my-flights"
          element={<MyFlights selectedFlights={selectedFlights} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
