import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="app-container">
    <Router>
 
        <Header />
        <Routes> 
          {/* <Route path="/" element={<HomepageRender />} /> 
          <Route path="/MooreRealEstate" element={<HomeRender />} />  */}

        </Routes>
        <Footer />
     
    </Router>
    </div>
  );
}

export default App;
//makemore improvements to future landing pages