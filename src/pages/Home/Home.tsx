import React, { ReactElement, useEffect, useState, useRef } from 'react';
import styles from './Home.module.scss';
import ArcReactor from '../../components/ArcReactor/ArcReactor';
import StartUpScreen from '../../components/StartUpScreen/StartUpScreen';
import Background from '../../components/Background/Background';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ReactComponent as UserIcon } from '../../assets/icons/userIcon.svg';

const Home = (): ReactElement => {
  const [shouldRunAnimation, setShouldRunAnimation] = useState(() => {
    return sessionStorage.getItem('hasRunAnimation') === null;
  });
  const targetRefsFade = useIntersectionObserver(styles.fade_in, 1);
  const targetRefsBorderFade = useIntersectionObserver(styles.fade_in, 0.1);

  useEffect(() => {
    const hasRunAnimation = sessionStorage.getItem('hasRunAnimation');

    if (!hasRunAnimation) {
      sessionStorage.setItem('hasRunAnimation', 'true');
    } else {
      const timeout = setTimeout(() => {
        setShouldRunAnimation(false);
      }, 12500);

      return () => clearTimeout(timeout);
    }
  }, [shouldRunAnimation]);

  return (
    <>
      <Background shouldRunAnimation={shouldRunAnimation} />
      <div className={styles.home_page}>
        <div className={styles.first_section}>
          {shouldRunAnimation && <StartUpScreen />}
          <div className={styles.flex_container_row}>
            <div
              className={`${styles.title_image} ${shouldRunAnimation && styles.flicker_in_arc_reactor}`}
            >
              <ArcReactor />
            </div>
            <div
              className={`${styles.separator} ${shouldRunAnimation && styles.flicker_in_separator}`}
            />
            <div
              className={`${styles.title_name_container} ${shouldRunAnimation && styles.flicker_in_title_name}`}
            >
              <div className={styles.title_name}>
                <h1
                  className={
                    shouldRunAnimation
                      ? `${styles.title_text} ${styles.title_1_animated}`
                      : `${styles.title_text} ${styles.title_text_animated}`
                  }
                >
                  Hello,
                </h1>
              </div>
              <div className={styles.title_name}>
                <h1
                  className={
                    shouldRunAnimation
                      ? `${styles.title_text} ${styles.title_2_animated}`
                      : `${styles.title_text} ${styles.title_text_animated}`
                  }
                >
                  My name is
                </h1>
              </div>
              <div className={styles.title_name}>
                <h1
                  className={
                    shouldRunAnimation
                      ? `${styles.title_text} ${styles.title_3_animated}`
                      : `${styles.title_text} ${styles.title_text_animated}`
                  }
                >
                  DAVID DAVIS
                </h1>
              </div>
              <div className={styles.title_name}>
                <h3
                  className={
                    shouldRunAnimation
                      ? `${styles.title_text} ${styles.subtitle_animated}`
                      : `${styles.title_text} ${styles.subtitle_text}`
                  }
                >
                  (yes, that's really my name)
                </h3>
              </div>
            </div>
          </div>
          <ScrollDownIndicator />
        </div>
        <div
          className={styles.horizontal_separator}
          ref={(el) => {
            if (el) targetRefsFade.current[0] = el;
          }}
        />
        <div
          className={styles.info_section}
          ref={(el) => {
            targetRefsBorderFade.current[0] = el;
          }}
        >
          <div
            className={styles.info_section_intro}
            ref={(el) => {
              if (el) targetRefsFade.current[1] = el;
            }}
          >
            <h2>thanks for checking out my page!</h2>
            <h4>
              Click any of the sections below to learn more about me and the
              work I do.
            </h4>
          </div>
          <div
            className={styles.about_section}
            ref={(el) => {
              if (el) {
                targetRefsFade.current[2] = el;
              }
            }}
          >
            <div className={styles.user_icon_wrapper}>
              <div className={styles.user_icon_border} />
              <UserIcon
                style={{
                  stroke: 'rgba(2, 254, 255, 0.5)',
                  height: '65%',
                  width: '65%',
                }}
              />
            </div>
          </div>
          <div
            className={styles.second_section_component2}
            ref={(el) => {
              if (el) {
                targetRefsFade.current[3] = el;
              }
            }}
          ></div>
        </div>
        <div className={styles.third_section}>
          <div
            className={styles.third_section_component}
            ref={(el) => {
              if (el) {
                targetRefsFade.current[4] = el;
              }
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
