import React, { ReactElement, useState } from 'react';
import styles from './MobileHeader.module.scss';
import logo from '../../assets/images/SlingShotDev-logo.png';
import { useNavigation } from '../../context/NavigationContext';
import { Link } from 'react-router-dom';

interface MobileHeaderProps {
  turnOffAnimation: () => void;
  toggleContactModal: () => void;
}

export const MobileHeader = ({
  turnOffAnimation,
  toggleContactModal,
}: MobileHeaderProps): ReactElement => {
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

  const handleContactClose = () => {
    toggleContactModal();
    toggleMenuOpen();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.logo_and_menu}>
          <Link
            to="/"
            className={styles.logo}
            onClick={(e) => {
              turnOffAnimation();
              e.preventDefault();
              navigateWithTransition('/');
            }}
          >
            <img src={logo} alt="Logo" className={styles.logo_img} />
          </Link>
          <h2 className={styles.header_title}>SlingShot Dev</h2>
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
                turnOffAnimation();
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
                turnOffAnimation();
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
                turnOffAnimation();
                handleNavigation(e, '/work');
              }}
            >
              Work
            </Link>
          </div>
          <div className={styles.nav_link}>
            <li className={styles.link} onClick={handleContactClose}>
              Contact
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};
