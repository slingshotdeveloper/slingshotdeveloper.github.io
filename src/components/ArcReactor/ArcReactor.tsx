import React, { useRef, useEffect } from "react";
import styles from "./ArcReactor.module.scss";

const ArcReactor: React.FC = () => {
  const randomDegree: number[] = [1, 2, 3, 4];
  for (let i = 0; i < randomDegree.length; i++) {
    randomDegree[i] = Math.random() * 360;
  }

  document.documentElement.style.setProperty(
    "--random-degree1",
    `${randomDegree[0]}deg`,
  );
  document.documentElement.style.setProperty(
    "--random-degree2",
    `${randomDegree[1]}deg`,
  );
  document.documentElement.style.setProperty(
    "--random-degree3",
    `${randomDegree[2]}deg`,
  );
  document.documentElement.style.setProperty(
    "--random-degree4",
    `${randomDegree[3]}deg`,
  );

  return (
      <div className={styles.arc_reactor}>
        <div className={styles.tickmarks_arc}>
          <ul className={styles.tickmarks}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className={styles.semi_arc}>
          <div className={styles.semi_arc_yellow}></div>
          <div className={styles.semi_arc_2}></div>
          <div className={styles.core}>
            <div className={styles.core_ball}></div>
          </div>
        </div>
        <div className={styles.semi_arc_tickmark_arc}>
          <ul className={styles.semi_arc_tickmarks}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
  );
};
export default ArcReactor;
