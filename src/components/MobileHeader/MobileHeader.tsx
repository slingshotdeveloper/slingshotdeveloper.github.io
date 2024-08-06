import React, { ReactElement, useState } from 'react';
import styles from './MobileHeader.module.scss';
import avatar from '../../assets/images/avatar.png';
import { useNavigation } from '../../context/NavigationContext';
import { Link } from 'react-router-dom';

export const MobileHeader = (): ReactElement => {
  const { navigateWithTransition } = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigateWithTransition(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.logo_and_menu}>
          <Link
            to="/"
            className={styles.logo}
            onClick={(e) => handleNavigation(e, '/')}
          >
            <img src={avatar} alt="Logo" className={styles.logo_img} />
          </Link>
          <div
            className={`${styles.hamburger_menu} ${isMenuOpen && styles.expanded}`}
            onClick={toggleMenuOpen}
          >
            <div className={styles.hamburger_menu_line} />
            <div className={styles.hamburger_menu_line} />
            <div className={styles.hamburger_menu_line} />
          </div>
        </div>
        <div className={`${styles.nav_links} ${isMenuOpen && styles.expanded}`}>
          <div className={styles.nav_link}>
            <Link
              className={styles.link}
              to="/"
              onClick={(e) => {
                handleNavigation(e, '/');
              }}
            >
              Home
            </Link>
          </div>
          <div className={styles.nav_link}>
            <Link
              className={styles.link}
              to="/about"
              onClick={(e) => {
                handleNavigation(e, '/about');
              }}
            >
              About
            </Link>
          </div>
          <div className={styles.nav_link}>
            <Link
              className={styles.link}
              to="/work"
              onClick={(e) => {
                handleNavigation(e, '/work');
              }}
            >
              Work
            </Link>
          </div>
          <div className={styles.nav_link}>
            <Link
              className={styles.link}
              to="/contact"
              onClick={(e) => {
                handleNavigation(e, '/contact');
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
