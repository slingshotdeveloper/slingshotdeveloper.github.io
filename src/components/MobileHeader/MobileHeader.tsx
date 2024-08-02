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

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.logo_and_menu}>
          <Link
            to="/"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/');
            }}
          >
            <img src={avatar} alt="Logo" className={styles.logo_img} />
          </Link>
          <div className={styles.hamburger_menu} onClick={toggleMenuOpen}>
            <div className={styles.hamburger_menu_line} />
            <div className={styles.hamburger_menu_line} />
            <div className={styles.hamburger_menu_line} />
          </div>
        </div>
        <div className={`${styles.nav_links} ${isMenuOpen && styles.expanded}`}>
          <div className={styles.nav_link}>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                navigateWithTransition('/');
              }}
            >
              Home
            </Link>
          </div>
          <div className={styles.nav_link}>
            <Link
              to="/about"
              onClick={(e) => {
                e.preventDefault();
                navigateWithTransition('/about');
              }}
            >
              About
            </Link>
          </div>
          <div className={styles.nav_link}>
            <Link
              to="/work"
              onClick={(e) => {
                e.preventDefault();
                navigateWithTransition('/work');
              }}
            >
              Work
            </Link>
          </div>
          <div className={styles.nav_link}>
            <Link
              to="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateWithTransition('/');
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
