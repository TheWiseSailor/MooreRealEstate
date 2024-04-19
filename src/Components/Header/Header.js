import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from './HeaderImages/logo.png';
import './Header.css'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactClicked, setIsContactClicked] = useState(false);
  const [isResumeClicked, setIsResumeClicked] = useState(false); 
  const [isNewsClicked, setIsNewsClicked] = useState(false); 
  const [isPortfolioClicked, setIsPortfolioClicked] = useState(false); 
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    setIsContactClicked(pathname.toLowerCase() === '/properties');
    setIsNewsClicked(pathname.toLowerCase() === '/news');
    setIsPortfolioClicked(pathname.toLowerCase() === '/contact');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`HeaderPrimary ${scrolling ? 'hidden' : ''}`}>
      <div className={`HeaderPrimaryInner ${isContactClicked ? 'contact' : ''} ${isResumeClicked ? 'resume' : ''} ${isNewsClicked ? 'news' : ''} ${isPortfolioClicked ? 'portfolio' : ''}`}>
        <div className="container header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li className='nav-li'><Link to="/properties" className={isResumeClicked ? 'black-and-white' : ''}>Properties</Link></li>
              <li className='nav-li'><Link to="/news" className={isPortfolioClicked ? 'black-and-white' : ''}>News</Link></li>
              <li className='nav-li'><Link to="/contact" className={isContactClicked ? 'black-and-white' : ''}>Contact</Link></li>
            </ul>
          </nav>
          <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className='mobile-menu-icon MMI-icon' />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
