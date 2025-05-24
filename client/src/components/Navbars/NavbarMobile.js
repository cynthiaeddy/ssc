import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarMobile.css'
import logo from '../../assets/logo.png'
import MenuButton from './MenuButton'
import navActive from '../../assets/bug.png'

export const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoverAbout, setHoverAbout] = useState(false)
  const [hoverContact, setHoverContact] = useState(false)
  const [hoverWork, setHoverWork] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMouseInAbout = () => {
    setHoverAbout(true)
  }
  const handleMouseOutAbout = () => {
    setHoverAbout(false)
  }
  const handleMouseInContact = () => {
    setHoverContact(true)
  }
  const handleMouseOutContact = () => {
    setHoverContact(false)
  }
  const handleMouseInWork = () => {
    setHoverWork(true)
  }
  const handleMouseOutWork = () => {
    setHoverWork(false)
  }

  return (
    <nav id='navbar-mobile'>
      <div className='navbar-mobile-top'>
        <div className='navbar-spacer'></div>
        <div className='navbar-logo mobile'>
          <img src={logo} className='logo mobile' alt='logo' />
        </div>
        <div className='navbar-mobile_menu' onClick={toggleMenu}>
          <MenuButton isOpen={isMenuOpen} />
        </div>
      </div>
      <ul className={`navbar-mobile ${isMenuOpen ? 'active' : 'not-active'}`}>
        {' '}
        <li className='nav-item_mobile'>
          <NavLink
            to='/work'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInWork}
            onMouseLeave={handleMouseOutWork}
          >
            {hoverWork ? (
              <div className='hover_item hover'>
                Work
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                work
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
        <li className='nav-item_mobile'>
          <NavLink
            to='/about'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInAbout}
            onMouseLeave={handleMouseOutAbout}
          >
            {hoverAbout ? (
              <div className='hover_item hover'>
                about
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                about
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
        <li className='nav-item_mobile'>
          <NavLink
            to='/contact'
            className='mobile_nav-links'
            activeClassName='mobile_active'
            onClick={toggleMenu}
            onMouseEnter={handleMouseInContact}
            onMouseLeave={handleMouseOutContact}
          >
            {hoverContact ? (
              <div className='hover_item hover'>
                contact
                <img
                  src={navActive}
                  className='navActive_visable'
                  alt='navActive'
                />
              </div>
            ) : (
              <div className='hover_item'>
                contact
                <img
                  src={navActive}
                  className='navActive_visable hidden'
                  alt='navActive'
                />
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
