import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link to='/' className={styles.logo}>
            <img src={avatar} alt='Logo' className={styles.logo_img} />
          </Link>
          <ul className={styles.nav_links}>
            <li><Link to='/' className={styles.nav_link}>Home</Link></li>
            <li><Link to='/about' className={styles.nav_link}>About</Link></li>
            <li><Link to='/work' className={styles.nav_link}>Work</Link></li>
            <li><Link to='/contact' className={styles.nav_link}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;