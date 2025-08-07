import './App.css';
import FAQs from './components/FAQs';
import HomeCelulas from './components/HomeCelulas';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeCelulas />} />
        <Route path="/faq" element={<FAQs />} />
      </Routes>
      <FAQs />
    </Router>
  );
}

export default App;
