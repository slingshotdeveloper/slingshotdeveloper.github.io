import React, { ReactElement } from 'react';
import styles from './About.module.scss';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { ReactComponent as BearIcon } from '../../assets/icons/sailorBear.svg';
import { ReactComponent as CrossIcon } from '../../assets/icons/crossIcon.svg';
import { ReactComponent as BarbellIcon } from '../../assets/icons/barbellIcon.svg';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import { useMediaQuery } from '../../utils/useMediaQuery';

interface AboutProps {
  toggleContactModal: () => void;
}

const About = ({ toggleContactModal }: AboutProps): ReactElement => {
  const targetRefsFade = useIntersectionObserver(styles.fade_in, 0.6);
  const isMobile = useMediaQuery({ 'max-width': 840 });

  return (
    <>
      <div className={styles.about_page}>
        <div className={styles.intro_section}>
          <div className={styles.intro_content}>
            <h2 className={styles.intro_text}>A Little Bit About Me</h2>
            <p>
              Hi, my name is David Davis. I am a full-stack software engineer
              with experience across professional, freelance, and personal
              projects. I specialize in both frontend and backend development,
              bringing versatility and a well-rounded approach to building
              efficient and scalable applications.
            </p>
          </div>
          <ScrollDownIndicator />
        </div>
        <div className={styles.content_section}>
          <h2
            className={styles.background_title}
            ref={(el) => {
              if (el) targetRefsFade.current[1] = el;
            }}
          >
            Background
          </h2>
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
            {isMobile ? (
              <>
                <div className={styles.text_container}>
                  <p>
                    As much as I love software development, my faith defines who
                    I am. Jesus Christ is my Lord and Savior, the source of my
                    abilities and desires. Without Him, my life has no meaning.
                    My goal is to honor Him in all that I do, including my
                    career. If you're reading this and don’t know Jesus, my
                    prayer is that you experience His unconditional love and be
                    transformed. He loves you more than you can imagine!
                  </p>
                </div>
                <CrossIcon className={styles.icon} />
              </>
            ) : (
              <>
                <CrossIcon className={styles.icon} />
                <div className={styles.text_container}>
                  <p>
                    As much as I love software development, my faith defines who
                    I am. Jesus Christ is my Lord and Savior, the source of my
                    abilities and desires. Without Him, my life has no meaning.
                    My goal is to honor Him in all that I do, including my
                    career. If you're reading this and don’t know Jesus, my
                    prayer is that you experience His unconditional love and be
                    transformed. He loves you more than you can imagine!
                  </p>
                </div>
              </>
            )}
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
                CrossFit, playing sports, watching movies, and hanging out with
                my wife, family, and friends. I've been doing CrossFit for a few
                years and love the challenge—I've even competed in a few events!
                I’m a big fan of all sports and have recently taken up golf and
                pickleball. I can easily marathon movies, with The Lord of the
                Rings trilogy and Miracle topping my list of favorites. Above
                all, I cherish quality time with my wife, friends, and family,
                no matter what we’re doing.
              </p>
            </div>
            <BarbellIcon className={styles.icon} />
          </div>
          <div>
            <h2
              className={styles.section_title}
              ref={(el) => {
                if (el) targetRefsFade.current[5] = el;
              }}
            >
              Some quick facts about me
            </h2>
          </div>
          <div className={styles.quick_facts_grid}>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[6] = el;
              }}
            >
              <h4>Favorite Food...</h4>
              <p className={styles.quick_fact_answer}>
                Mexican. You can't beat fajitas.
              </p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[7] = el;
              }}
            >
              <h4>Favorite TV Show...</h4>
              <p className={styles.quick_fact_answer}>The Office</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[8] = el;
              }}
            >
              <h4>Favorite Movie...</h4>
              <p className={styles.quick_fact_answer}>The Lord of the Rings</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[9] = el;
              }}
            >
              <h4>Favorite Sport (currently)...</h4>
              <p className={styles.quick_fact_answer}>Golf</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[10] = el;
              }}
            >
              <h4>Favorite Book...</h4>
              <p className={styles.quick_fact_answer}>
                Wild at Heart by John Eldredge
              </p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[11] = el;
              }}
            >
              <h4>Favorite Season...</h4>
              <p className={styles.quick_fact_answer}>Fall</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[12] = el;
              }}
            >
              <h4>Favorite Holiday...</h4>
              <p className={styles.quick_fact_answer}>Christmas</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[13] = el;
              }}
            >
              <h4>Favorite Song...</h4>
              <p className={styles.quick_fact_answer}>
                Stop This Train by John Mayer
              </p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[14] = el;
              }}
            >
              <h4>Mountains or Beaches...</h4>
              <p className={styles.quick_fact_answer}>Mountains</p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[15] = el;
              }}
            >
              <h4>Favorite Place I've Been...</h4>
              <p className={styles.quick_fact_answer}>
                Lauterbrunnen, Switzerland
              </p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[16] = el;
              }}
            >
              <h4>Favorite Scripture...</h4>
              <p className={styles.quick_fact_answer}>
                "Give all your cares and worries to God, for He cares about
                you." - 1 Peter 5:7
              </p>
            </div>
            <div
              className={styles.quick_facts_text_container}
              ref={(el) => {
                if (el) targetRefsFade.current[17] = el;
              }}
            >
              <h4>Favorite Quote...</h4>
              <p className={styles.quick_fact_answer}>
                "If I find in myself a desire which no experience in this world
                can satisfy, the most probable explanation is that I was made
                for another world." - C.S. Lewis{' '}
              </p>
            </div>
          </div>
          <div
            className={styles.question_container}
            ref={(el) => {
              if (el) targetRefsFade.current[18] = el;
            }}
          >
            <h2>Have A Question For Me?</h2>
            <button
              onClick={() => {
                toggleContactModal();
              }}
            >
              Let Me Know
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
