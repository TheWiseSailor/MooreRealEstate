import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false);
  const [isPortfolioClicked, setIsPortfolioClicked] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsContactClicked(location.pathname === '/properties');
    setIsResumeClicked(location.pathname === '/news');
    setIsPortfolioClicked(location.pathname === '/contact'); 
  }, [location.pathname]);

  return (
    <footer className={`footer ${isContactClicked ? 'contact' : ''} ${isResumeClicked ? 'resume' : ''} ${isPortfolioClicked ? 'portfolio' : ''}`}>
      <p className='ft'>Moore Real Estate &copy; All rights reserved.</p>
    </footer>
  );
};

export default Footer;
