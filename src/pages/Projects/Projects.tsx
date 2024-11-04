import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface Project {
  type: 'freelance' | 'personal';
  url: string;
  image: string;
  title: string;
  description: string;
}

const Projects = (): ReactElement => {
  const [projects, setProjects] = useState<Project[]>([]);
  const targetRefsFade = useIntersectionObserver(styles.fade_in, 0.6);


  useEffect(() => {
    axios
      .get('/public/projects.json')
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('error fetching project data: ', error);
      });
  }, []);

  const freelanceProjects = projects.filter(
    (project) => project.type === 'freelance',
  );
  const personalProjects = projects.filter(
    (project) => project.type === 'personal',
  );

  return (
    <div className={styles.projects_page}>
      <div className={styles.projects_container}>
        <div className={styles.freelance_section}>
          <h2>Freelance Projects</h2>
          <div className={styles.project_cards}>
            {freelanceProjects.map((project, index) => (
              <ProjectCard
                key={index}
                url={project.url}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
          {freelanceProjects.length === 0 && (
            <div className={styles.empty_message}>
              <p>Freelance projects coming soon...</p>
            </div>
          )}
        </div>
        <div className={styles.personal_section}>
          <h2 className={styles.personal_section_title} ref={(el) => {
            if (el) targetRefsFade.current[1] = el;
          }}>Personal Projects</h2>
          <div className={`${styles.project_cards} ${styles.personal_section_projects}`} ref={(el) => {
            if (el) targetRefsFade.current[2] = el;
          }}>
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                url={project.url}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
          {personalProjects.length === 0 && (
            <div className={styles.empty_message}>
              <p>Freelance projects coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
