/* eslint-disable react/no-unknown-property */
import React from 'react'
import './MenuButton.css'

const MenuButton = ({ isOpen }) => {
  return (
    <>
      <div className='menu-button'>
        <div className='line topLine'></div>
        <div className='line middleLine'></div>
        <div className='line bottomLine'></div>
      </div>
      <style jsx='true'>{`
        .topLine {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .middleLine {
          transform: ${isOpen ? 'translateX(100)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1};
        }
        .bottomLine {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      `}</style>
    </>
  )
}
export default MenuButton
