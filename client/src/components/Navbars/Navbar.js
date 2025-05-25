// import React from 'react'

// export const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'; // Make sure this path matches your setup
import './Navbar.css';

export const Navbar = () => {
  const [logoWidth, setLogoWidth] = useState(300); // start at 300px

  useEffect(() => {
    const handleScroll = () => {
      const minWidth = 150;
      const maxWidth = 300;
      const scrollLimit = 300;

      const scrollY = Math.min(window.scrollY, scrollLimit);
      const newWidth = maxWidth - ((maxWidth - minWidth) * scrollY) / scrollLimit;

      setLogoWidth(newWidth);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="navbar"
      style={{
        paddingTop: '40px',
        paddingBottom: '20px',
        transition: 'all 0.1s ease-in-out',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        backgroundColor: 'white',
        zIndex: 1000,
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: `${logoWidth}px`,
          height: 'auto',
          transition: 'width 0.1s ease-in-out',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '100px',
          display: 'flex',
          gap: '16px',
        }}
      >
        <button aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>☰</button>
        <button aria-label="Cart" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>🛒</button>
      </div>
    </header>
  )
}
