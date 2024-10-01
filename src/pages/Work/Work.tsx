import React, { ReactElement, useEffect } from 'react';
import styles from './Work.module.scss';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myImage from '../../assets/images/bcubed-project.png';
import { useNavigation } from '../../context/NavigationContext';

interface WorkProps {
  toggleContactModal: () => void;
}

const Work = ({ toggleContactModal }: WorkProps): ReactElement => {
  const { hash } = useNavigation();
  if(hash) {
    console.log('hash: ', hash.substring(1));
  }
  

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 700);      
      }
    }
  }, [hash])

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
      <div id='freelance-section' className={styles.freelance_section}>
        <h2>Freelance</h2>
        <p>
          I collaborate with clients to design professional websites that are
          tailored to their unique needs. Below, you can explore examples of the
          projects I've completed, showcasing the diverse solutions and websites
          I've created/updated.
        </p>
        <div className={styles.freelance_cards}>
          <ProjectCard
            url="https://www.bcubed.com"
            image={myImage}
            title="BCubed Website"
            description="Website built for Engineering company using Wordpress Avada theme."
          />
        </div>
      </div>
      <div id='personal-section' className={styles.personal_section}>
        <h2>Personal</h2>
      </div>
      <div className={styles.experience_section}>
        <h2>Experience</h2>
      </div>
    </div>
  );
};

export default Work;
