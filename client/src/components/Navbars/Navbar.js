// import React from 'react'

// export const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'; // Make sure this path matches your setup
import cart from '../../assets/cartthin.png'; // Make sure this path matches your setup
import MenuButton from './MenuButton'; // Make sure this path matches your setup
import './Navbar.css';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    document.body.classList.toggle('menu-open');
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.min(window.scrollY, 350);

      const minWidth = 200;
      const maxWidth = 350;
      const minTopPadding = 30;
      const minBottomPadding = 40;
      const maxTopPadding = 70;
      const maxBottomPadding = 70;

      const newWidth = maxWidth - ((maxWidth - minWidth) * scrollY) / 300;
      const newTopPadding = maxTopPadding - ((maxTopPadding - minTopPadding) * scrollY) / 300;
      const newBottomPadding = maxBottomPadding - ((maxBottomPadding - minBottomPadding) * scrollY) / 300;

      document.documentElement.style.setProperty('--logo-width', `${newWidth}px`);
      document.documentElement.style.setProperty('--navbar-padding-top', `${newTopPadding}px`);
      document.documentElement.style.setProperty('--navbar-padding-bottom', `${newBottomPadding}px`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="navbar">
      <div className="navbar-inner">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-icons">
          <button className="navbar-icon-btn" aria-label="Menu" onClick={toggleMenu}>
            <MenuButton isOpen={isMenuOpen} /* Confirmed MenuButton is imported above */ />
          </button>
          <button className="navbar-icon-btn" aria-label="Cart">
            <img src={cart} alt="Cart" className="cart-icon" />
          </button>
        </div>
      </div>
    </header>
  )
}
