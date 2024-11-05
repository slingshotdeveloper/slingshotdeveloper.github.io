import React, { useEffect, useState } from "react";
import styles from "./StartUpScreen.module.scss";

const StartUpScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const finishedStartUp = progress === 100 ? true : false;

  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress: number) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 1;
        });
      }, 15);

      return () => clearInterval(interval);
    }, 500);
  }, []);

  return (
    <div className={finishedStartUp ? `${styles.hide}` : `${styles.screen}`}>
      <div className={styles.progress_bar_container}>
        <div className={styles.progress_bar} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={styles.powering_up_container}>
        <div>{progress}%</div>
        <h4>Powering Up...</h4>
      </div>
    </div>
  );
};

export default StartUpScreen;
