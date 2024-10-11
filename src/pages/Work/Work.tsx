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
  const { navigateWithTransition } = useNavigation();

  const images = require.context('../../assets/images/project-images', true);
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

  let freelanceProjects = projects.filter(
    (project) => project.type === 'freelance',
  );
  let personalProjects = projects.filter(
    (project) => project.type === 'personal',
  );

  if (freelanceProjects?.length > 5) {
    freelanceProjects = freelanceProjects.slice(0, 5);
  }
  if (personalProjects?.length > 5) {
    personalProjects = personalProjects.slice(0, 5);
  }

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
          <a
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/projects');
            }}
          >
            <div
              className={styles.view_projects_container}
              ref={(el) => {
                if (el) targetRefsFade.current[4] = el;
              }}
            >
              <h4>View All Projects</h4>
              <div className={styles.right_arrow} />
            </div>
          </a>
      </div>
      <div id="personal-section" className={styles.personal_section}>
        <h2
          className={styles.project_title}
          ref={(el) => {
            if (el) targetRefsFade.current[5] = el;
          }}
        >
          Personal
        </h2>
        <p
          className={styles.project_content}
          ref={(el) => {
            if (el) targetRefsFade.current[6] = el;
          }}
        >
          Occasionally, I like to take on projects to sharpen my skills or simply because they spark my interest. Below, you'll find a selection of these projects, showcasing the areas I find fascinating and enjoy exploring.
        </p>
        <div
          className={styles.project_cards}
          ref={(el) => {
            if (el) targetRefsFade.current[7] = el;
          }}
        >
          {personalProjects?.length > 0 ? (
            <Slider>
              {personalProjects.map((project, index) => (
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
              <p>Personal projects coming soon...</p>
            </div>
          )}
        </div>
        <a
            href="/projects"
            onClick={(e) => {
              e.preventDefault();
              navigateWithTransition('/projects');
            }}
          >
            <div
              className={styles.view_projects_container}
              ref={(el) => {
                if (el) targetRefsFade.current[8] = el;
              }}
            >
              <h4>View All Projects</h4>
              <div className={styles.right_arrow} />
            </div>
          </a>
      </div>
      <div className={styles.experience_section}>
        <h2>Experience</h2>
      </div>
    </div>
  );
};

export default Work;
