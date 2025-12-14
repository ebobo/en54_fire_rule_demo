import React from 'react';
import { NavLink } from 'react-router-dom';
import AutronicaLogo from '../icons/autronica_trans_2.png';

const NavBar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-light'
      style={{ backgroundColor: '#e8e8e8' }}
    >
      <a className='navbar-brand' href='/'>
        <img
          style={{
            marginTop: '0rem',
            marginBottom: '0rem',
          }}
          src={AutronicaLogo}
          alt='Icon'
          width={80}
          height={42}
        />
        C&E Demo
      </a>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          <NavLink className='nav-item nav-link' to='/history'>
            HomePage <span className='sr-only'>(current)</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
