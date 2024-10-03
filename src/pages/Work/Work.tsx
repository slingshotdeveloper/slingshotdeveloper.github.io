import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Work.module.scss';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myImage from '../../assets/images/project-images/bcubed-project.png';
import { useNavigation } from '../../context/NavigationContext';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import axios from 'axios';
import Slider from '../../components/Slider/Slider';

interface WorkProps {
  toggleContactModal: () => void;
}

interface Project {
  type: 'freelance' | 'personal';
  url: string;
  image: string;
  title: string;
  description: string;
}

const Work = ({ toggleContactModal }: WorkProps): ReactElement => {
  const targetRefsFade = useIntersectionObserver(styles.fade_in, 0.6);
  const [projects, setProjects] = useState<Project[]>([]);

  const images = require.context('../../assets/images/project-images', true);
  // const imageList = images
  //   .keys()
  //   .reduce((acc: { [key: string]: string }, imagePath) => {
  //     const key = imagePath.replace('./', '');
  //     acc[key] = images(imagePath);
  //     return acc;
  //   }, {});
  const { hash } = useNavigation();

  useEffect(() => {
    axios
      .get('/projects.json')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('error fetching project data: ', error);
      });
  }, []);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 700);
      }
    }
  }, [hash]);

  const freelanceProjects = projects.filter(
    (project) => project.type === 'freelance',
  );
  const personalProjects = projects.filter(
    (project) => project.type === 'personal',
  );

  return (
    <div className={styles.work_page}>
      <div className={styles.intro_section}>
        <div className={styles.intro_content}>
          <h2 className={styles.intro_text}>Explore my Work Collection</h2>
          <p>
            Check out a curated selection of projects and experiences that
            highlight my expertise, creativity, and commitment to delivering
            impactful results. Here, you'll find a collection of my professional
            journey, from collaborative ventures to individual achievements,
            reflecting my skills and passion for excellence.
          </p>
        </div>
        <ScrollDownIndicator />
      </div>
      <div id="freelance-section" className={styles.freelance_section}>
        <h2
          className={styles.project_title}
          ref={(el) => {
            if (el) targetRefsFade.current[1] = el;
          }}
        >
          Freelance
        </h2>
        <p
          className={styles.project_content}
          ref={(el) => {
            if (el) targetRefsFade.current[2] = el;
          }}
        >
          I collaborate with clients to design professional websites that are
          tailored to their unique needs. Below, you can explore examples of the
          projects I've completed, showcasing the diverse solutions and websites
          I've created/updated.
        </p>
        <div
          className={styles.project_cards}
          ref={(el) => {
            if (el) targetRefsFade.current[3] = el;
          }}
        >
          {freelanceProjects?.length > 0 ? (
            <Slider>
              {freelanceProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  url={project.url}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                />
              ))}
            </Slider>
          ) : (
            <div className={styles.empty_message}>
              <p>Freelance projects coming soon...</p>
            </div>
          )}
        </div>
      </div>
      <div id="personal-section" className={styles.personal_section}>
        <h2
          className={styles.project_title}
          ref={(el) => {
            if (el) targetRefsFade.current[4] = el;
          }}
        >
          Personal
        </h2>
        <p
          className={styles.project_content}
          ref={(el) => {
            if (el) targetRefsFade.current[5] = el;
          }}
        >
          I
        </p>
        <div
          className={styles.project_cards}
          ref={(el) => {
            if (el) targetRefsFade.current[6] = el;
          }}
        >
          {personalProjects?.length > 0 ? (
            personalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                url={project.url}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))
          ) : (
            <div className={styles.empty_message}>
              <p>Personal projects coming soon...</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.experience_section}>
        <h2>Experience</h2>
      </div>
    </div>
  );
};

export default Work;
