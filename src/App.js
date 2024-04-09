import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomepageRender from "./Components/HomepageRender";
import ContactFormPage from "../src/Components/ContactPageRender/ContactFormPage";
import AgentProfile from "../src/Components/Agents/AgentProfile";
import PropertyOfTheDay from "../src/Components/Properties/PropertyOfTheDay";
import Properties from "../src/Components/Properties/Properties";
import ViewProperties from "../src/Components/Properties/ViewProperties";
import NewsPage from "../src/Components/News/News"; 
const App = () => {
  return (
    <div className="app-container">
    <Router>
 
        <Header />
        <Routes> 
          <Route path="/" element={<HomepageRender />} /> 
          <Route path="/MooreRealEstate" element={<HomepageRender />} /> 
          <Route path="/property/:id" element={<PropertyOfTheDay />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<ViewProperties />} />
          <Route path="/agent/:name" element={<AgentProfile />} />
          <Route path="/contact" element={<ContactFormPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
     
    </Router>
    </div>
  );
}

export default App;
//makemore improvements to future landing pages