import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import './Header.scss';

const Header = (): ReactElement => {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='logo'>
            <img src={avatar} alt='Logo' className='logo-img' />
          </Link>
          <ul className='nav-links'>
            <li><Link to='/' className='nav-link'>Home</Link></li>
            <li><Link to='/about' className='nav-link'>About</Link></li>
            <li><Link to='/projects' className='nav-link'>Projects</Link></li>
            <li><Link to='/contact' className='nav-link'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;