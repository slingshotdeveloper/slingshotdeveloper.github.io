import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import styles from './Header.module.scss';

interface HeaderProps {
  onNavigate: (path: string) => void;
}

const Header = ({ onNavigate }: HeaderProps): ReactElement => {

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    event.preventDefault();
    onNavigate(path);
  };
  
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <Link to='/' className={styles.logo} onClick={(e) => handleNavigation(e, '/')}>
            <img src={avatar} alt='Logo' className={styles.logo_img} />
          </Link>
          <ul className={styles.nav_links}>
            <li><Link to='/' className={styles.nav_link} onClick={(e) => handleNavigation(e, '/')}>Home</Link></li>
            <li><Link to='/about' className={styles.nav_link} onClick={(e) => handleNavigation(e, '/about')}>About</Link></li>
            <li><Link to='/work' className={styles.nav_link} onClick={(e) => handleNavigation(e, '/work')}>Work</Link></li>
            <li><Link to='/contact' className={styles.nav_link} onClick={(e) => handleNavigation(e, '/contact')}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;