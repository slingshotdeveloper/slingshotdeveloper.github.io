import React, { ReactNode, useState } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
  children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(items.length - 3);

  const handleNext = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setLeftCount((prev) => prev + 1);
      setRightCount((prev) => prev - 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length,
      );
      setLeftCount((prev) => prev - 1);
      setRightCount((prev) => prev + 1);
    }
  };

  const visibleCount = Math.min(3, items.length);
  const translateValue = -(currentIndex * (100 / visibleCount));

  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.slider}>
        <div
          className={items.length <= 2 ? styles.itemGrid_two : styles.itemGrid}
          style={{ transform: `translateX(${translateValue}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className={styles.slider_item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {items.length > 3 && (
        <div className={styles.arrow_container}>
          {leftCount > 0 && (
            <div className={styles.left_arrow_box} onClick={handlePrev}>
              <div className={styles.left_arrow} />
            </div>
          )}
          {rightCount > 0 && (
            <div className={styles.right_arrow_box} onClick={handleNext}>
              <div className={styles.right_arrow} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Slider;