import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Routes/Home";
import Navbar from "./components/Navbar";
import NotFound from "./Routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
