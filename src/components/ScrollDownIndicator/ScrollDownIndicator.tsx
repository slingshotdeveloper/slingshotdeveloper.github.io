import React, { useEffect, useState } from "react";
import styles from './ScrollDownIndicator.module.scss'

const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if(window.scrollY > 15) {
      setIsVisible(false);
    }
  };

  return (
      <div className={isVisible ? `${styles.scroll_down_indicator_container}` : 'hidden'}>
        <div className={styles.scroll_down_indicator} />
      </div>
  );
};

export default ScrollDownIndicator;
