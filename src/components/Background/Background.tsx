import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Background.module.scss';

interface BackgroundProps {
  shouldRunAnimation: boolean;
}

const Background = ({ shouldRunAnimation }: BackgroundProps): ReactElement => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const getRandomNumber = (): number => Math.floor(Math.random() * 101);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(getRandomNumber());
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className={styles.background}>
      <div
        className={styles.rectangle_1}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
          <br />
          <br />
          <br />
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div
        className={styles.radial_indicator_container}
      >
        <div className={styles.radial_indicator}>
          <div className={styles.radial_indicator_layer} />
          <span className={styles.radial_percentage}>{randomNumber}%</span>
          <div />
        </div>
        <div className={styles.radial_rectangle}>
          <div className={styles.flex_row_right}>
            <hr className={styles.holo_color} />
            <span className={styles.rectangle_text}>outer core</span>
          </div>
          <div className={styles.flex_row_right}>
            <hr className={styles.holo_color} />
            <span className={styles.rectangle_text}>battery percentage</span>
          </div>
          <div className={styles.flex_row_right}>
            <hr className={styles.holo_color} />
            <span className={styles.rectangle_text}>amount of energy</span>
          </div>
          <div className={styles.flex_row_right}>
            <hr className={styles.holo_color} />
            <span className={styles.rectangle_text}>
              % of energy produced = rotation x light
            </span>
          </div>
          <div className={styles.flex_row_left}>
            <span>battery</span>
            <hr className={styles.holo_color} />
          </div>
        </div>
      </div>
      <div
        className={styles.random_text_container}
      >
        <span className={`${styles.random_text} ${styles.random_text1}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </span>
        <span className={`${styles.random_text} ${styles.random_text2}`}>
          quis nostrud exercitation ullamco laboris nisi ut{' '}
        </span>
        <span className={`${styles.random_text} ${styles.random_text3}`}>
          Duis aute irure dolor in reprehenderit in voluptate velit
        </span>
        <span className={`${styles.random_text} ${styles.random_text4}`}>
          Excepteur sint occaecat
        </span>
        <span className={`${styles.random_text} ${styles.random_text5}`}>
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id
        </span>
      </div>
      <div
        className={styles.side_rectangle}
      >
        <div className={styles.side_rectangle_inner} />
      </div>
      <div
        className={styles.bar_graph_container}
      >
        <div className={styles.bar_graph_title}>test results</div>
        <div className={styles.bar}>
          <div className={`${styles.bar_fill} ${styles.bar1}`} />
        </div>
        <div className={styles.bar}>
          <div className={`${styles.bar_fill} ${styles.bar2}`} />
        </div>
        <div className={styles.bar}>
          <div className={`${styles.bar_fill} ${styles.bar3}`} />
        </div>
      </div>
    </div>
  );
};

export default Background;
