import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from "./HeaderImages/logo.png"
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div className={`HeaderPrimary ${isMobileMenuOpen ? 'esports' : ''}`}>
        <div className="container header">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/"></Link></li>
              <li><Link to="/"></Link></li>
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
