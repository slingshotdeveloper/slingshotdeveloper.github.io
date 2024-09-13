import React, { ReactElement } from 'react';
import styles from './About.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ReactComponent as BearIcon } from '../../assets/icons/sailorBear.svg';
import { ReactComponent as CrossIcon } from '../../assets/icons/crossIcon.svg';
import { ReactComponent as BarbellIcon } from '../../assets/icons/barbellIcon.svg';

const About = (): ReactElement => {
  const targetRefsFade = useIntersectionObserver(styles.fade_in, 0.6);

  return (
    <>
      <div className={styles.about_page}>
        <h1 className={styles.page_title}>About Me</h1>
        <div className={styles.content_section}>
          <p
            className={styles.intro_text}
            ref={(el) => {
              if (el) targetRefsFade.current[0] = el;
            }}
          >
            Hi, my name is David Davis. I am a full-stack software engineer with
            experience across professional, freelance, and personal projects. I
            specialize in both frontend and backend development, bringing
            versatility and a well-rounded approach to building efficient and
            scalable applications.
          </p>
          <h3
            className={styles.background_title}
            ref={(el) => {
              if (el) targetRefsFade.current[1] = el;
            }}
          >
            Background:
          </h3>
          <div
            className={styles.content_section_container}
            ref={(el) => {
              if (el) targetRefsFade.current[2] = el;
            }}
          >
            <div className={styles.text_container}>
              <p>
                I graduated from Baylor University with a degree in Electrical
                and Computer Engineering, but my passion quickly shifted to
                software development. Since graduation, I’ve been working
                professionally in the field and continue to enjoy every moment.
                I'm also an avid Baylor sports fan, especially when it comes to
                basketball and football.
              </p>
            </div>
            <BearIcon className={styles.icon} />
          </div>
          <div
            className={styles.content_section_container}
            ref={(el) => {
              if (el) targetRefsFade.current[3] = el;
            }}
          >
            <CrossIcon className={styles.icon} />
            <div className={styles.text_container}>
              <p>
                As much as I love software development, my faith defines who I
                am. Jesus Christ is my Lord and Savior, the source of my
                abilities and desires. Without Him, my life has no meaning. My
                goal is to honor Him in all that I do, including my career. If
                you're reading this and don’t know Jesus, my prayer is that you
                experience His unconditional love and be transformed. He loves
                you more than you can imagine!
              </p>
            </div>
          </div>
          <div
            className={styles.content_section_container}
            ref={(el) => {
              if (el) targetRefsFade.current[4] = el;
            }}
          >
            <div className={styles.text_container}>
              <p>
                Apart from software development, I enjoy staying active with
                CrossFit, playing sports, watching movies, and spending time
                with my wife, family, and friends. I've been doing CrossFit for
                a few years and love the challenge it brings—I've even competed
                in a few competitions! I’m a big fan of all sports and have
                recently been into golf and pickleball. I can easily marathon
                movies, with The Lord of the Rings trilogy and Miracle being
                among my favorites. And lastly, I enjoy spending time with my
                wife, friends, and family, regardless of the activity.
              </p>
            </div>
            <BarbellIcon className={styles.icon} />
          </div>
          <div>
            <h3
              className={styles.section_title}
              ref={(el) => {
                if (el) targetRefsFade.current[5] = el;
              }}
            >
              Some quick facts about me:
            </h3>
          </div>
          <div className={styles.quick_facts_grid}>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[6] = el;
              }}
            >
              <h4>Favorite Food...</h4>
              <p>Mexican. You can't beat fajitas.</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[7] = el;
              }}
            >
              <h4>Favorite Show...</h4>
              <p>The Office</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[8] = el;
              }}
            >
              <h4>Favorite Movie...</h4>
              <p>The Lord of the Rings</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[9] = el;
              }}
            >
              <h4>Favorite Sport...</h4>
              <p>Pickleball</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
