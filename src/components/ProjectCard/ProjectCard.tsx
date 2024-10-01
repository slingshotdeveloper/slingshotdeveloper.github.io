import React, { ReactElement } from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  url: string;
  image: string;
  title: string;
  description: string;
}

const ProjectCard = ({
  url,
  image,
  title,
  description,
}: ProjectCardProps): ReactElement => {
  return (
    <a href={url} target='_blank' rel='noopener noreferrer'>
      <div className={styles.card_container}>
        <img src={image} alt={title} className={styles.card_image}></img>
        <div className={styles.card_content}>
          <h4 className={styles.card_title}>{title}</h4>
          <p className={styles.card_description}>{description}</p>
          <div className={styles.card_footer}>View Project &gt;</div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
