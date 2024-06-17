import React, { ReactElement, useEffect, useState } from "react";
import "./Background.scss";

const Background = () => {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  const getRandomNumber = (): number => Math.floor(Math.random() * 101);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(getRandomNumber());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background">
      <div className="rectangle_1">
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
      <div className="radial_indicator">
        <div className="radial_indicator_layer" />
        <span className="radial_percentage">{randomNumber}%</span>
      </div>
      <div className="side_rectangle">
        <div className="side_rectangle_inner" />
      </div>
    </div>
  );
};

export default Background;
