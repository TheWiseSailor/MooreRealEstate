import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomeRender from './Components/HomeRender';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes> 
          <Route path="/" element={<HomeRender />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
//makemore improvements to future landing pages