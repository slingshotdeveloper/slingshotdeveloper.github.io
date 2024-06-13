import React, { ReactElement, useEffect, useState } from "react";
import "./Home.scss";
import ArcReactor from "../../components/Background/AnimatedIcon/ArcReactor";
import StartUpScreen from "../../components/StartUpScreen/StartUpScreen";

const Home = (): ReactElement => {
  const [shouldRunAnimation, setShouldRunAnimation] = useState(() => {
    return sessionStorage.getItem("hasRunAnimation") === null;
  });

  useEffect(() => {
    const hasRunAnimation = sessionStorage.getItem("hasRunAnimation");

    if (!hasRunAnimation) {
      sessionStorage.setItem("hasRunAnimation", "true");
    } else {
      const timeout = setTimeout(() => {
        setShouldRunAnimation(false);
      }, 9500);

      return () => clearTimeout(timeout);
    }
  }, [shouldRunAnimation]);

  return (
    <div className="main">
      {shouldRunAnimation && <StartUpScreen />}
      <div className="flex-container-row">
      <div className="title-image">
          <ArcReactor />
        </div>
        <div className="separator" />
        <div className="title-name-container">
          <div className="title_name">
            <h1
              className={
                shouldRunAnimation
                  ? "title_text title_1_animated"
                  : "title_text title_text_animated"
              }
            >
              Hello,
            </h1>
          </div>
          <div className="title_name">
            <h1
              className={
                shouldRunAnimation
                  ? "title_text title_2_animated"
                  : "title_text title_text_animated"
              }
            >
              My name is
            </h1>
          </div>
          <div className="title_name">
            <h1
              className={
                shouldRunAnimation
                  ? "title_text title_3_animated"
                  : "title_text title_text_animated"
              }
            >
              DAVID DAVIS
            </h1>
          </div>
          <div className="title_name">
            <h3
              className={
                shouldRunAnimation
                  ? "title_text subtitle_animated"
                  : "title_text subtitle_text"
              }
            >
              (yes, that's really my name)
            </h3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
