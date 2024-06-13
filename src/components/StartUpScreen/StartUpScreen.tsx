import React, { useEffect, useState } from "react";
import "./StartUpScreen.scss";

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
      }, 25);

      return () => clearInterval(interval);
    }, 1150);
  }, []);

  return (
    <div className={finishedStartUp ? "hide" : "screen"}>
      <div className="progress_bar_container">
        <div className="progress_bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="powering_up_container">
        <div>{progress}%</div>
        <h2>Powering Up...</h2>
      </div>
    </div>
  );
};

export default StartUpScreen;
