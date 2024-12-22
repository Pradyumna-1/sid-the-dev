import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Frontend ',
    value: PROJECT_CATEGORY.OPEN_SOURCE,
    icon: 'fluent-mdl2:open-source',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc:
      'https://imgs.search.brave.com/X9rhs5LTpSP3BoV6L5TegrcnzS-00rm1aZjdggN7cZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29kZWhpbS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTAvbG9naW4tcGFn/ZS13aXRoLWJhY2tn/cm91bmQtaW1hZ2Ut/NjQweDQ4MC5wbmc',

    title: 'Online Exam Portal',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'Java'),
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
      getSkillByLabel(BACKEND_SKILLS, 'PostmanAPI'),
    ],
    description:
      'The Online Exam portal web application developed using Java and Spring Boot. This application allows users to conduct exams online, providing a platform for both administrators and examinees.',
    repoLink: 'https://github.com/Pradyumna-1/Online-Exam-Portal',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: 'https://github.com/Pradyumna-1/Ecart/raw/31506f7a949af783daf5e8a1bb1868ee5af642e5/photo.png',
    title: 'E-Commerce Shopping',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
    ],
    description:
      'The EM system with React.js, featuring role-based access, authentication, and a responsive UI using Tailwind CSS. Optimized task filtering for better performance.',
    repoLink: 'https://github.com/Pradyumna-1/Ecart',
    sourceLink: 'https://ecart-nine-psi.vercel.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc:
      'https://cdn.dribbble.com/userupload/4058178/file/original-32375ad0f4d0d27bbb5a236c95a90916.jpg?resize=1600x1200',
    title: 'MOVIX',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
    ],
    description:
      'An interactive movie review web app enabling users to search for movies, view reviews, and watch trailers, built with HTML, CSS, Tailwind, JavaScript, ReactJS, and the IMDb API.',
    repoLink: 'https://github.com/Pradyumna-1/MoviX',
    sourceLink: 'https://moviex-mocha.vercel.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc:
      'https://cdn.dribbble.com/userupload/4004842/file/original-51a2122f099b9fec7a9f5d7e8f19ccd7.jpg?resize=1024x768',
    title: 'WEATHER APP',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),

      getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description:
      'Developed a fully functional weather application using HTML, CSS, JavaScript, React.js, and API integration, providing real-time weather data and an intuitive user interface.',
    repoLink: 'https://github.com/Pradyumna-1/WeatherApp',
    sourceLink: 'https://weather-app-pradyumna-1.vercel.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://github.com/Pradyumna-1/ems/blob/main/Screenshot%20(899).png?raw=true',
    title: 'Employee Management System',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      // getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description:
      'The EM system with React.js, featuring role-based access, authentication, and a responsive UI using Tailwind CSS. Optimized task filtering for better performance.',
    repoLink: 'https://github.com/Pradyumna-1/ems',
    sourceLink: 'https://ems-rosy-three.vercel.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc:
      'https://cdn.dribbble.com/users/551602/screenshots/14153121/media/b88a82824f496847d76fc3f04b205b1f.png?resize=768x576&vertical=center',
    title: 'TODO APP',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),

      // getSkillByLabel(BACKEND_SKILLS, 'REST Api'),
    ],
    description:
      'Designed and developed a fully functional Todo application using HTML, CSS, JavaScript, React.js, and local storage, enabling users to efficiently manage tasks with an intuitive interface and persistent data storage.',
    repoLink: 'https://github.com/Pradyumna-1/ToDoList',
    sourceLink: 'https://todolist-xi-blush.vercel.app/',
    category: [PROJECT_CATEGORY.OPEN_SOURCE],
  },

  {
    imgSrc: 'https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/08/30134327/Solo-travel-1024x536.jpg',
    title: 'Travel Tour',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Bootstrap'),
      {
        label: 'php',
        icon: 'logos:php',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description: 'The travel tour web application is made using HTML, CSS, JavaScript, PHP MyAdmin and PHP. ',
    repoLink: 'https://github.com/Pradyumna-1/travel-tour',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },

  {
    imgSrc: 'https://github.com/Pradyumna-1/chatBot/blob/main/image.png?raw=true',
    title: 'E-Commerce Sales Chatbot',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      // getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      // getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
      getSkillByLabel(BACKEND_SKILLS, 'Flask'),
    ],
    description:
      'The project builds an E-commerce Sales Chatbot with ReactJS, HTML, CSS, and Flask, enabling users to search and explore products interactively.',
    repoLink: 'https://github.com/Pradyumna-1/chatBot',
    sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
];
