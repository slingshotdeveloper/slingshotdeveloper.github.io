import React, { ReactElement, useEffect, useState, useRef } from 'react';
import styles from './Home.module.scss';
import ArcReactor from '../../components/ArcReactor/ArcReactor';
import StartUpScreen from '../../components/StartUpScreen/StartUpScreen';
import Background from '../../components/Background/Background';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ReactComponent as UserIcon } from '../../assets/icons/userIcon.svg';
import { ReactComponent as ComputerIcon } from '../../assets/icons/computer.svg';
import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const Home = ({ onNavigate }: HomeProps): ReactElement => {
  const [shouldRunAnimation, setShouldRunAnimation] = useState(() => {
    return sessionStorage.getItem('hasRunAnimation') === null;
  });
  const targetRefsFade = useIntersectionObserver(styles.fade_in, 0.6);
  const targetRefsBorderFade = useIntersectionObserver(styles.fade_in, 0.1);

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, path: string) => {
    event.preventDefault();
    onNavigate(path);
  };
  

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
                <h5
                  className={
                    shouldRunAnimation
                      ? `${styles.title_text} ${styles.subtitle_animated}`
                      : `${styles.title_text} ${styles.subtitle_text}`
                  }
                >
                  (yes, that's really my name)
                </h5>
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
          className={styles.info_section_container}
          ref={(el) => {
            targetRefsBorderFade.current[0] = el;
          }}
        >
          <div
            className={styles.info_section_container_intro}
            ref={(el) => {
              if (el) targetRefsFade.current[1] = el;
            }}
          >
            <h2>thanks for checking out my page!</h2>
            <h5>
              Click any of the sections below to learn more about me and the
              work I do.
            </h5>
          </div>
          <div
            className={styles.info_section}
            ref={(el) => {
              if (el) {
                targetRefsFade.current[2] = el;
              }
            }}
          >
            <div className={styles.icon_container}>
              <a onClick={(e) => handleNavigation(e, '/about')}>
                <div className={styles.icon_wrapper}>
                  <div
                    className={`${styles.icon_border} ${styles.user_icon}`}
                  />
                  <UserIcon
                    style={{
                      stroke: 'rgba(2, 254, 255, 0.5)',
                      height: '65%',
                      width: '65%',
                    }}
                  />
                </div>
              </a>
            </div>
            <div className={styles.info_section_text_container}>
              <h3 className={styles.info_section_text_title}>About me</h3>
              <div className={styles.info_section_text_content}>
                <p>
                  I'm a software engineer with experience in front-end and
                  back-end development. Click the button below to learn who I am
                  and the things I love to do!
                </p>
              </div>
              <a onClick={(e) => handleNavigation(e, '/about')}>
                <button>About Me</button>
              </a>
            </div>
          </div>
          <div
            className={styles.info_section}
            ref={(el) => {
              if (el) {
                targetRefsFade.current[3] = el;
              }
            }}
          >
            <div className={styles.icon_container}>
              <a onClick={(e) => handleNavigation(e, '/work')}>
                <div className={styles.icon_wrapper}>
                  <div
                    className={`${styles.icon_border} ${styles.computer_icon}`}
                  />
                  <ComputerIcon
                    style={{
                      fill: 'rgba(2, 254, 255, 0.5)',
                      strokeWidth: '0px',
                      height: '53%',
                      width: '53%',
                    }}
                  />
                </div>
              </a>
            </div>
            <div className={styles.info_section_text_container}>
              <h3 className={styles.info_section_text_title}>Freelance work</h3>
              <div className={styles.info_section_text_content}>
                <p>
                  I've worked with numerous clients to deliver tailor-made
                  software solutions, including building websites from the
                  ground up, implementing content updates, and performing
                  ongoing maintenance tasks. Click the button below to explore
                  my portfolio and see the variety of projects I've undertaken
                  and read testimonials from satisfied clients.
                </p>
              </div>
              <a onClick={(e) => handleNavigation(e, '/work')}>
                <button>Freelance Work</button>
              </a>
            </div>
          </div>
          <div
            className={styles.info_section}
            ref={(el) => {
              if (el) {
                targetRefsFade.current[4] = el;
              }
            }}
          >
            <div className={styles.icon_container}>
              <a onClick={(e) => handleNavigation(e, '/work')}>
                <div className={styles.icon_wrapper}>
                  <div
                    className={`${styles.icon_border} ${styles.react_icon}`}
                  />
                  <ReactIcon
                    style={{
                      fill: 'rgba(2, 254, 255, 0.5)',
                      height: '65%',
                      width: '65%',
                    }}
                  />
                </div>
              </a>
            </div>
            <div className={styles.info_section_text_container}>
              <h3 className={styles.info_section_text_title}>
                Personal Projects
              </h3>
              <div className={styles.info_section_text_content}>
                <p>
                  I'm constantly working on new projects. I love to work on
                  challenging and unique projects in areas I'm interested in.
                  Click the button below to check out some of the work I've
                  done!
                </p>
              </div>
              <a onClick={(e) => handleNavigation(e, '/work')}>
                <button>Personal Projects</button>
              </a>
            </div>
          </div>
          <div
            className={styles.info_section}
            ref={(el) => {
              if (el) {
                targetRefsFade.current[5] = el;
              }
            }}
          >
            <div className={styles.icon_container}>
              <a onClick={(e) => handleNavigation(e, '/contact')}>
                <div className={styles.icon_wrapper}>
                  <div
                    className={`${styles.icon_border} ${styles.mail_icon}`}
                  />
                  <MailIcon
                    style={{
                      fill: 'rgba(2, 254, 255, 0.5)',
                      height: '57%',
                      width: '57%',
                    }}
                  />
                </div>
              </a>
            </div>
            <div className={styles.info_section_text_container}>
              <h3 className={styles.info_section_text_title}>
                Work with me
              </h3>
              <div className={styles.info_section_text_content}>
                <p>
                For inquiries about hiring me for your business needs, click the button below and send me a message. I look forward to discussing how we can collaborate to achieve your vision! 
                </p>
              </div>
              <a onClick={(e) => handleNavigation(e, '/contact')}>
                <button>Contact Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
