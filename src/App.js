import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 



const App = () => {
  return (
    <div className="app-container">
    <Router>
 
        <Header />
        <Routes> 
          <Route path="/" element={<HomeRender />} /> 
          <Route path="/MooreRealEstate" element={<HomeRender />} /> 

        </Routes>
        <Footer />
     
    </Router>
    </div>
  );
}

export default App;
//makemore improvements to future landing pages