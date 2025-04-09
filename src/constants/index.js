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
      title: "Work",
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
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Exxat",
      icon: meta,
      iconBg: "#383E56",
      date: "July 2024 - Jan 2025",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and implementing accessibility.",
      ],
    },
    {
      title: "Bachelor of Engineering in Computer Science",
      company_name: "KLE Institute of Technology",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2020 - May 2024",
      points: [
        "Achieved a CGPA of 7.7, demonstrating strong academic performance in computer science.",
        "Developing and maintaining software applications using React.js and other relevant technologies.",
        "Collaborating with peers, professors, and industry professionals on engineering projects to apply theoretical concepts.",
        "Implementing responsive designs and ensuring compatibility across multiple platforms and devices.",
        "Actively participating in code reviews, receiving feedback, and improving coding practices and problem-solving skills.",
      ],
    },
    {
      title: "Primary & Secondary Education",
      company_name: "Sacred Heart Convent High School",
      icon: meta,
      iconBg: "#383E56",
      date: "Jun 2006 - Jun 2019",
      points: [
        "Achieved 92% in science subjects, demonstrating strong academic performance.",
        "Engaged in science-related activities and projects, enhancing research and analytical skills.",
        "Effectively collaborated with peers on group assignments and class projects.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "During my internship, I collaborated with the design team to build responsive and user-friendly interfaces, which improved the overall user experience of the project.",
     
    designation: "UI/UX Collaboration",
    company: "Exxat",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Worked on optimizing website performance by implementing lazy loading and reducing bundle sizes, which helped improve page load speed significantly.",
      designation: "Performance Optimization",
      company: "Exxat",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Contributed to building reusable components and maintained clean, scalable code, userstory features implementation using React.js and Tailwind CSS  at my internship.",
      designation: "Component Development",
      company: "Exxat",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "EMS",
      description:
        "Functional UI created with React-vite using javascript and tailwind, Employee Task Management System is a logically build project using local storage for persistant data where the admin create and assigns tasks to his employees",
      tags: [
        {
          name: "react+vite",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/nikithabaddi/Employee-Task-Management-system",
    },
    {
      name: "Aiverse",
      description:
        "Web application that enables users to choose games between dice and ballon pop, this project is developed using React and nodejs framework with tailwindcss intergrated also the user gets a calculated score of the games.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/nikithabaddi/AiVersegame",
    },
    {
      name: "CGPA Calculator",
      description:
        "A web application that allows students to calculate their CGPA based on their grades and credits, providing a user-friendly interface for academic performance tracking.Build using backend and frontend technologies.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "orange-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };