import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactLogo from "./assets/tech_logo/reactjs.png";
import nodeLogo from "./assets/tech_logo/nodejs.png";
import flight from "./assets/work_logo/flight.png";
import portfolio from "./assets/work_logo/portfolio.png";
import artgallary from "./assets/work_logo/artgallary.jpg";

import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import reactnativeLogo from "./assets/tech_logo/reactnative.png";
import androidStudioLogo from "./assets/tech_logo/AndroidStudio.png";
import intellijLogo from "./assets/tech_logo/IntelliJIDEA.png";

import bmuLogo from "./assets/education_logo/Bhagwan_Mahavir_University_logo.png";
import sunbeamLogo from "./assets/education_logo/sunbeam.jpg";
import shethLogo from "./assets/education_logo/sheth.jpg";
import sungraceLogo from "./assets/education_logo/sungraceLogo.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactLogo },
      { name: "React Native", logo: reactnativeLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodeLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "IntelliJ IDEA", logo: intellijLogo },
      { name: "Android Studio", logo: androidStudioLogo },
    ],
  },
];


export const education = [
  {
    id: 0,
    img: sunbeamLogo,
    school: "Sunbeam Institute of Information Technology, Pune",
    date: "Aug 2025 - Feb 2026",
    desc: "Pg-Diploma in Computer Applications",
    degree: "Pg-Diploma in Mobile Computing",
  },
  {
    id: 1,
    img: bmuLogo,
    school: "Bhagwan Mahaveer University, Surat",
    date: "June 2023 - May 2025",
    desc: "Master's degree (MCA)",
    degree: "MCA",
  },
  {
    id: 2,
    img: shethLogo,
    school: "Sheth C. D. Barfiwala College, Surat",
    date: "June 2019 - May 2023",
    desc: "Bachelor of Commerce",
    degree: "B.Com",
  },
  {
    id: 3,
    img: sungraceLogo,
    school: "Sungrace School, Surat",
    date: "June 2018 - March 2019",
    desc: "Class 12 (Commerce)",
    degree: "Commerce Stream",
  },
];

 export const projects = [
    {
      id: 0,
      title: "Online Flight Ticket Booking System",
      description:
        "	Online Flight Ticket Booking System is a full-stack web application that allows users to search for available flights, view detailed flight information, book flight tickets, make secure online payments, and manage their reservations efficiently.",
      image: flight,
      tags: ["HTML", "CSS", "JavaScript","", "React JS", "Express JS", "Bootstrap", "MySQL"],
   
      
    },

    {
      id: 1,
      title: "Art Gallery Management System",
      description:
        "The Art Gallery Management System is a web-based application designed to efficiently manage artworks, artists, exhibitions, and sales within an art gallery. This system helps gallery administrators organize and maintain records digitally, reducing manual effort and improving accuracy.",
      image: artgallary,
      tags: ["React JS", "Java", "HTML", "CSS", "JavaScript","MySQL","Express JS",],
      github: "",
      webapp: "",
    },

    {
      id: 2,
      title: "Portfolio Website",
      description:
        "I am a passionate web developer skilled in React, JavaScript, HTML , CSS ,Tailwind CSS focused on building responsive and user-friendly applications. I enjoy solving problems, learning new technologies, and delivering high-quality work on time",
      image: portfolio,
      tags: ["React JS", "Tailwind CSS","HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    
  ];  
