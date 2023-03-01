import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vote from "./Vote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Vote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
