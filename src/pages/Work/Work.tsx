import React, { ReactElement, useEffect, useState } from 'react';
import styles from './Work.module.scss';
import ScrollDownIndicator from '../../components/ScrollDownIndicator/ScrollDownIndicator';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import myImage from '../../assets/images/project-images/bcubed-project.png';
import { useNavigation } from '../../context/NavigationContext';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import axios from 'axios';
import Slider from '../../components/Slider/Slider';
import PieChart from '../../components/PieChart/PieChart';
import { useMediaQuery } from '../../utils/useMediaQuery';

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
  const isMobile = useMediaQuery({ 'max-width': 840 });

  const images = require.context('../../assets/images/project-images', true);
  const { hash } = useNavigation();

  const segmentSize = isMobile ? 325 : 425;
  const frontendChartData = [
    {
      name: 'React',
      value: 30,
      info: 'I use React for most of my UI projects, including in my full-time role. I love how it simplifies creating reusable components, and its vast library ecosystem makes development very efficient and expansive.',
      skillLevel: 9,
      radius: 0.6,
      index: 0,
    },
    {
      name: 'CSS',
      value: 25,
      info: 'I use CSS in just about every frontend project, whether it\'s in a React project or even a Wordpress site. I typically use SCSS superset but have also worked with Tailwind CSS.',
      skillLevel: 8,
      radius: 0.6,
      index: 1,
    },
    {
      name: 'Typescript',
      value: 20,
      info: 'TypeScript has become my go-to since I began using it in my full-time role. I appreciate the added safety of type checking and the structured logic it brings. It offers all the functionality of JavaScript with the added benefit of type protection.',
      skillLevel: 7,
      radius: 0.65,
      index: 2,
    },
    {
      name: 'HTML',
      value: 10,
      info: 'I use HTML in nearly every frontend project to structure webpages and define components, working alongside CSS to build and style the content',
      skillLevel: 8,
      radius: 0.7,
      index: 3,
    },
    {
      name: 'Javascript',
      value: 10,
      info: 'I regularly use Javascript to enhance the functionality of webpages and projects. It allows me to create much more engaging and interactive sites and components, such as this modal popping up when hovering over a pie chart segment.',
      skillLevel: 7,
      radius: 0.75,
      index: 4,
    },
    {
      name: 'PHP',
      value: 5,
      info: 'I have experience working with PHP on a client\'s WordPress website, specifically utilizing the theme file editor. This approach facilitated the seamless integration of custom fields into the site.',
      skillLevel: 2.5,
      radius: 0.75,
      index: 5,
    },
  ];
  const backendChartData = [
    {
      name: 'Java',
      value: 60,
      info: 'I primarily use Java for my projects and in my full-time role, often opting for Java Spring Boot for API development due to its functionality. For instance, the email feature for contacting me on this site is powered by a Java API.',
      skillLevel: 9,
      radius: 0.55,
      index: 0,
    },
    {
      name: 'Python',
      value: 12.5,
      info: 'I find Python to be really enjoyable to work with. I appreciate its concise syntax and the speed at which I can write code. I used it for a web-scraping project and sometimes collaborate with my brother on stock investment analysis and strategy programs using Python.',
      skillLevel: 5,
      radius: 0.65,
      index: 1,
    },
    { name: 'SQL', value: 10, info: 'Any time I need a project to have a database, I use SQL. The table creation and query functionality make it very easy to use and send/retrieve data.', skillLevel: 5, radius: 0.7, index: 2 },
    {
      name: 'Kotlin',
      value: 7.55,
      info: 'One API I worked with in my full-time role utilized Kotlin instead of Java, allowing me to gain some experience with it. I found Kotlin to be quite similar to Java, but with a more concise syntax and some unique features.',
      skillLevel: 3,
      radius: 0.75,
      index: 3
    },
    { name: 'C++', value: 5, info: 'C++ is the first language I learned when learning computer science in college. I was a part of a group project that created a super mario bros game with user functionality using C++. It was really cool!', skillLevel: 4, radius: 0.75, index: 4 },
  ];

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
          Occasionally, I like to take on projects to sharpen my skills or
          simply because they spark my interest. Below, you'll find a selection
          of these projects, showcasing the areas I find fascinating and enjoy
          exploring.
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
        <div
          className={styles.experience_section_title_container}
          ref={(el) => {
            if (el) targetRefsFade.current[9] = el;
          }}
        >
          <h2>Experience</h2>
          <h5>{isMobile ? '(click on each segment to learn more)' : '(hover over each segment to learn more)'}</h5>
          <p>* pie charts represent how frequently I work with specific technologies</p>
        </div>
        <div
          className={styles.experience_container}
        >
          <div className={styles.experience_graph_container} ref={(el) => {
            if (el) targetRefsFade.current[10] = el;
          }}>
            <PieChart data={frontendChartData} size={segmentSize} />
            <h3>Frontend</h3>
          </div>
          <div className={styles.experience_graph_container} ref={(el) => {
            if (el) targetRefsFade.current[12] = el;
          }}>
            <PieChart data={backendChartData} size={segmentSize} />
            <h3>Backend</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
