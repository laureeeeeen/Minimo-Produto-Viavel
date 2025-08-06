import './App.css';
import FAQs from './components/FAQs';
import HomeCelulas from './components/HomeCelulas';
import Navbar from './components/nav/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HomeCelulas />
      <FAQs />

      <Router>
        <Navbar />
        <Routes>
          <Route path='/components/HomeCelulas' exact element={<HomeCelulas />} />
           <Route path='/components/FAQs' exact element={<FAQs />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
