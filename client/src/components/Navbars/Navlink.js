import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarMobile.css'
import add1 from '../../assets/add_1.png'
import vector from '../../assets/vector.png'


export const Navlink = ({
  to,
  className = '',
  text = 'INGREDIENTS',
  accordian = false,
  stateProp = 'default',
  onClick,
  isAnyExpanded,
  setAnyExpanded,
}) => {
  const [navState, setNavState] = useState(stateProp)

  const handleMouseEnter = () => {
    if (!accordian && navState === 'default') setNavState('hover')
  }

  const handleMouseLeave = () => {
    if (!accordian && navState === 'hover') setNavState('default')
  }

  const handleClick = () => {
    if (accordian) {
      const willExpand = navState === 'default'
      setNavState(willExpand ? 'expanded' : 'default')
      setAnyExpanded(willExpand)
    } else {
      setAnyExpanded(false)
      onClick?.()
    }
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `mobile_nav-links ${className} navlink accordian-${accordian} ${navState} ${
          isActive ? 'mobile_active' : ''
        }`
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {(!accordian || navState === 'default') && (
        <div className='hover-words'>
          <div className='INGREDIENTS'>
            {!accordian ? (
              <>{text}</>
            ) : (
              <>
                <div className='text-wrapper same-line'>{text}</div>
                <img className='vector' alt='Vector' src={vector} />
              </>
            )}
          </div>
        </div>
      )}

      {accordian && navState === 'expanded' && (
        <>
          <div className='div'>
            <div className='text-wrapper same-line'>{text}</div>
            <img className='add' alt='Add' src={add1} />
          </div>

          <div className='sublink'>
            {['SOAPS', 'LOTIONS', 'HAIRCARE', 'GIFT SETS'].map(label => (
              <div className='hover-sublink' key={label}>
                <div className='text-wrapper-2'>{label}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </NavLink>
  )
}
