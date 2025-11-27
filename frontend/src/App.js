import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DenunciaForm from "./components/DenunciaForm";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/denunciar" element={<DenunciaForm />} />
      </Routes>
    </Router>
  
  );
}

export default App;
