import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "B-Tech Computer Science",
    company_name: "Technocrates Institute of Technology ",
    icon: starbucks,
    iconBg: "#383E56",
    date: " 2019 - 2023",
    points: [
      "Learning and Skill Development.",
      "Project Work and Practical Application.",
      "Self-Learning and Exploration.",
      "Participating in code reviews and providing constructive feedback to other students.",
    ],
  },
  {
    title: "Higher Secondary in PCM",
    company_name: "Fr. Agnel CO-ED Sr.Sec School",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " 2018 - 2019",
    points: [
      "Academic Excellence.",
      "Laboratory Work and Experiments.",
      "Problem Solving and Critical Thinking.",
      "Participation in Competitions and Olympiads.",
    ],
  },
  {
    title: "Senior Secondary",
    company_name: "Fr. Agnel CO-ED Sr.Sec School",
    icon: shopify,
    iconBg: "#383E56",
    date: " 2016 - 2017",
    points: [
      "Effective Time Management.",
      "Active Engagement in Class",
      "Consistent Revision and Homework Completion",
      "Healthy Study Habits and Self-Care",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sujoy proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sujoy does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Sujoy optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Let's Chat is a dynamic and user-friendly React application that aims to provide a seamless chatting experience for its users. The app leverages the power of Redux for state management and Bootstrap for responsive and visually appealing UI design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SujoyPeter/LetsChat",
  },
  {
    name: "Music Album",
    description:
      "The React Music Album App is an exciting project aimed at creating a user-friendly and immersive music application using the power of React, a popular JavaScript library for building user interfaces.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "router-dom",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SujoyPeter/React_Album",
  },
  {
    name: "Shopoholic",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SujoyPeter/React-E_Commerce--Website/tree/main/shopoholic",
  },
];

export { services, technologies, experiences, testimonials, projects };
