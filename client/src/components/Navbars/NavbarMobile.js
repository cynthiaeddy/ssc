import { useState } from 'react'
import './NavbarMobile.css'
import logo from '../../assets/bug.png'
import MenuButton from './MenuButton'
import { Navlink } from './Navlink'



export const NavbarMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnyExpanded, setIsAnyExpanded] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
    setIsAnyExpanded(false)
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

      {isMenuOpen && (
        <ul className={`navbar-mobile ${isMenuOpen ? 'active' : 'not-active'}`}>
          <li className='nav-item_mobile'>
            <Navlink to='/home' text='home' onClick={toggleMenu} setAnyExpanded={setIsAnyExpanded} />
          </li>
          <li className='nav-item_mobile'>
            <Navlink to='/ingredients' text='ingredients glossary' onClick={toggleMenu} setAnyExpanded={setIsAnyExpanded} />
          </li>
          <li className='nav-item_mobile'>
            <Navlink
              to='/products'
              text='products'
              accordian={true}
              onClick={() => {}}
              isAnyExpanded={isAnyExpanded}
              setAnyExpanded={setIsAnyExpanded}
            />
          </li>
          <li className='nav-item_mobile'>
            <Navlink to='/reviews' text='reviews' onClick={toggleMenu} setAnyExpanded={setIsAnyExpanded} />
          </li>
            <li className='nav-item_mobile'>
            <Navlink to='/about' text='about us' onClick={toggleMenu} setAnyExpanded={setIsAnyExpanded} />
          </li>
            <li className='nav-item_mobile'>
            <Navlink to='/contact' text='contact us' onClick={toggleMenu} setAnyExpanded={setIsAnyExpanded} />
          </li>
        </ul>
      )}
    </nav>
  )
}
