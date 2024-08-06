import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import BusinessServices from './Components/Services/BusinessServices/BusinessServices';
import ImmigrationServices from './Components/Services/ImmigrationServices/ImmigrationServices';
import InvestInHungary from './Components/Services/InvestInHungary/InvestInHungary';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/business" element={<BusinessServices />} />
        <Route path="/services/immigration" element={<ImmigrationServices />} />
        <Route path="/services/invest" element={<InvestInHungary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
