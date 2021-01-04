import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  /*useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
      window.removeEventListener('resize', showButton)
    }
  }, []);*/


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <MdFingerprint className='navbar-icon' />
              CHRID
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Schools
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Drivers
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/story'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Our Story
                </Link>
              </li>

              <li className='nav-item'>
                  <Link to='/started' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Get Started
                    </Button>
                  </Link>
              </li>


            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
