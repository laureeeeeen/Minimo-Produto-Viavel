import React from "react";
import "./App.css";
import FAQs from "./components/FAQs";
import HomeCelulas from "./components/HomeCelulas";
import Navbar from "./components/nav/Navbar";
import Apresentacao from "./components/Apresentacao";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeCelulas />} />
        <Route path="/inicio" element={<Apresentacao />} />
        <Route path="/faq" element={<FAQs />} />
      </Routes>
      {/* Caso queira exibir o FAQs fora da rota, mantém aqui */}
      <Apresentacao />
      <FAQs />
    </Router>
  );
};

export default App;

