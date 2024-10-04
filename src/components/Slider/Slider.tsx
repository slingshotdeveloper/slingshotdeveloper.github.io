import React, { ReactNode, useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import { useMediaQuery } from '../../utils/useMediaQuery';
import { useSwipeable } from 'react-swipeable';

interface SliderProps {
  children: ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const isMobile = useMediaQuery({ 'max-width': 840 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);

  const handleNext = () => {
    if (isMobile && currentIndex < items.length - 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setLeftCount((prev) => prev + 1);
      setRightCount((prev) => prev - 1);
    } else if (!isMobile && currentIndex < items.length - 3) {
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

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const preventTouchScroll = (e: React.TouchEvent<HTMLDivElement>) => {
    if (totalDots > 1) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const visibleCount = isMobile ? 1 : Math.min(3, items.length);

    setCurrentIndex(0);
    setLeftCount(0);

    setRightCount(items.length - visibleCount);
  }, [isMobile]);

  const visibleCount = isMobile ? 1 : Math.min(3, items.length);
  const translateValue = -(currentIndex * (100 / visibleCount));

  let totalDots = 0;
  let activeDot = 0;

  if (items.length >= 3) {
    totalDots = 3;
    if (currentIndex === 0) {
      activeDot = 0;
    } else if (currentIndex === items.length - 1) {
      activeDot = 2;
    } else {
      activeDot = 1;
    }
  } else if (items.length === 2) {
    totalDots = 2;
    activeDot = currentIndex === 0 ? 0 : 1;
  }

  return (
    <div
      {...handlers}
      onTouchMove={preventTouchScroll}
      className={styles.slider_wrapper}
    >
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
      {items.length > 3 && !isMobile && (
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
      {isMobile && totalDots > 1 && (
        <div className={styles.pagination_dots}>
          {Array.from({ length: totalDots }).map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === activeDot ? styles.active_dot : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
