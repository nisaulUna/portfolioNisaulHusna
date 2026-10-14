import Foto from "/assets/foto.png";

const Image = {
  Foto,
};

export default Image;

import Boco1 from "/assets/experience/boco-1.jpeg";
import Boco2 from "/assets/experience/boco-2.jpeg";
import Boco3 from "/assets/experience/boco-3.jpeg";
import Boco4 from "/assets/experience/boco-4.jpeg";

import Java1 from "/assets/experience/java-1.jpeg";
import Java2 from "/assets/experience/java-2.jpeg";
import Java3 from "/assets/experience/java-3.jpeg";
import Java4 from "/assets/experience/java-4.jpeg";

import Darya1 from "/assets/experience/darya-1.jpeg";
import Darya2 from "/assets/experience/darya-2.jpeg";
import Darya3 from "/assets/experience/darya-3.jpeg";
import Darya4 from "/assets/experience/darya-4.jpeg";

export const listExperience = [
  {
    id: 1,
    color: "bg-pink-200",
    date: "JULY 2025 - OCTOBER 2025",
    company: "PT Bocorocco Entrepreneur Indonesia",
    position: "Programmer Intern",

    tags: [
      "PHP",
      "CodeIgniter 3",
      "MySQL",
      "E-Commerce",
      "Xendit API",
    ],

    description: [
      "Built the company’s e-commerce website using CodeIgniter 3 and MySQL within 2 months.",
      "Integrated Xendit API for online payments.",
      "Collaborated with the development team using Git to test, debug, and maintain the website during live operations.",
    ],

    photos: [
      Boco1,
      Boco2,
      Boco3,
      Boco4,
    ],
  },
  {
    id: 2,
    color: "bg-yellow-100",
    date: "MAY 2025 - JUNE 2025",
    company: "BNI Java Jazz 2025",
    position: "Technical Support Volunteer",

    tags: [
      "IT Support",
      "Networking",
      "Troubleshooting",
    ],

    description: [
      "Set up devices and network infrastructure for event operations.",
      "Provided on-site IT support and resolved connectivity issues.",
      "Collaborated with the technical team to ensure smooth event operations.",
    ],

    photos: [
      Java1,
      Java2,
      Java3,
      Java4,
    ],
  },
  {
    id: 3,
    color: "bg-green-100",
    date: "SEPTEMBER 2024 - FEBRUARY 2025",
    company: "Darya-Varia Laboratoria Tbk",
    position: "Programmer Intern",

    tags: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Internal Systems",
    ],

    description: [
      "Migrated 3 internal web applications from Native PHP to CodeIgniter 4 with MySQL.",
      "Collaborated with the Business System Head on system requirements.",
      "Performed pre-deployment testing and debugging.",
    ],

    photos: [
      Darya1,
      Darya2,
      Darya3,
      Darya4,
    ],
  },
];

export const listPublication = [
  {
    id: 1,
    color: "bg-[#B9E2FF]",
    date: "JUNE 2026",
    journal: "JIKO",
    journal1: "(Jurnal Informatika dan Komputer)",
    desc: "SINTA 4",
    title: "Perbandingan DenseNet201, EfficientNetB0, dan MobileNetV2 untuk Klasifikasi Tuberkulosis dan Pneumonia pada Paru",
    link: "http://dx.doi.org/10.26798/jiko.v10i2.2686",

    tags: [
      "Deep Learning",
      "Classification",
      "CNN",
      "Transfer Learning",
    ],

    description: [
      "Co-authored journal article on deep-learning models for tuberculosis and pneumonia classification using chest X-ray images.",
      "Vol. 10(2), pp. 353–364.",
      "DOI: 10.26798/jiko.v10i2.2686.",
    ],
  },
];

import Rembaka1 from "/assets/project/rembaka-1.png";
import Rembaka2 from "/assets/project/rembaka-2.jpeg";
import Rembaka3 from "/assets/project/rembaka-3.jpeg";
import Rembaka4 from "/assets/project/rembaka-4.jpeg";
import Rembaka5 from "/assets/project/rembaka-5.jpeg";

import BuzzBuzz1 from "/assets/project/buzzbuzz-1.png";
import BuzzBuzz2 from "/assets/project/buzzbuzz-2.png";
import BuzzBuzz3 from "/assets/project/buzzbuzz-3.png";
import BuzzBuzz4 from "/assets/project/buzzbuzz-4.png";
import BuzzBuzz5 from "/assets/project/buzzbuzz-5.png";

import Monitoring1 from "/assets/project/monitoring-1.png";
import Monitoring2 from "/assets/project/monitoring-2.jpeg";

import Coffee1 from "/assets/project/coffee-1.png";
import Coffee2 from "/assets/project/coffee-2.png";
import Coffee3 from "/assets/project/coffee-3.png";
import Coffee4 from "/assets/project/coffee-4.png";
import Coffee5 from "/assets/project/coffee-5.png";
import Coffee6 from "/assets/project/coffee-6.png";
import Coffee7 from "/assets/project/coffee-7.png";
import Coffee8 from "/assets/project/coffee-8.png";

import Quack1 from "/assets/project/quack-1.png";
import Quack2 from "/assets/project/quack-2.png";
import Quack3 from "/assets/project/quack-3.png";
import Quack4 from "/assets/project/quack-4.png";
import Quack5 from "/assets/project/quack-5.png";
import Quack6 from "/assets/project/quack-6.png";

export const listProject = [
  {
    id: 1,
    type: "COMPANY PROJECT · REMBAKA AGRI",
    year: "2026",
    title: "Inventory Management & Raw Material Prediction System",
    desc: "Developed a web-based inventory management system for monitoring materials, production, and distribution, with forecasting to predict future raw material needs.",
    link: "",

    tags: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SVM",
    ],

    photos: [
      Rembaka1,
      Rembaka2,
      Rembaka3,
      Rembaka4,
      Rembaka5,
    ],
  },

    {
    id: 2,
    type: "GROUP PROJECT",
    year: "2025",
    title: "Buzz Buzz",
    desc: "A movie tracking app where users can discover films, manage watchlists, give ratings, and write reviews.",
    link: "https://drive.google.com/file/d/1Hvp8tdFC1d74Z14CLa2G1qotE58tnRQA/view?usp=sharing",

    tags: [
        "Kotlin",
        "Android",
        "PostgreSQL",
        "Mobile Development",
    ],

    photos: [
      BuzzBuzz1,
      BuzzBuzz2,
      BuzzBuzz3,
      BuzzBuzz4,
      BuzzBuzz5,
    ],
  },

    {
    id: 3,
    type: "GROUP PROJECT",
    title: "MediaScope",
    year : "2025",
    desc: "A media monitoring platform that tracks online mentions across multiple sources and analyzes their sentiment using third-party APIs.",
    link: "https://github.com/nisaulUna/mediaMonitoring-kel8/",

    tags: [
      "Node.js",
      "Express.js",
      "Redis",
      "REST API",
      "Sentiment Analysis",
    ],

    photos: [
      Monitoring1,
      Monitoring2,
    ],
  },

  {
    id: 4,
    type: "GROUP PROJECT",
    title: "Bean Bliss",
    year : "2024",
    desc: "A coffee shop website where customers can explore restaurant information, browse menus, place orders, and make reservations.",
    link : "https://github.com/nisaulUna/coffeeShop/",

    tags: [
    "PHP Native",
    "HTML",
    "CSS",
    "JavaScript",
    ],

    photos: [
      Coffee1,
      Coffee2,
      Coffee3,
      Coffee4,
      Coffee5,
      Coffee6,
      Coffee7,
      Coffee8,
    ],
  },

    {
    id: 5,
    type: "GROUP PROJECT",
    title: "Quack",
    year : "2024",
    desc: "A mobile UI prototype that provides disaster information, emergency alerts, and an SOS feature for requesting help during emergencies.",
    link: "https://www.figma.com/proto/nPQd29r4aoJyYXPWb5rqkY/Quack?page-id=0%3A1&node-id=99-56&p=f&viewport=389%2C458%2C0.03&t=a96HYS6RhEeiEQnm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=659%3A1269&show-proto-sidebar=1",

    tags: [
      "UI/UX Design",
      "Mobile App Design",
      "Prototyping",
    ],

    photos: [
      Quack1,
      Quack2,
      Quack3,
      Quack4,
      Quack5,
      Quack6,
    ],
  },
  
];

export const listSkills = [
  {
    id: 1,
    category: "Programming Languages",
    color: "bg-zinc-900",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
    ],
  },
  {
    id: 2,
    category: "Frameworks & Libraries",
    color: "bg-zinc-900",
    items: [
      { name: "CodeIgniter", icon: "devicon-codeigniter-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-original colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Vue.js", icon: "devicon-vuejs-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    ],
  },
  {
    id: 3,
    category: "Databases & Caching",
    color: "bg-zinc-900",
    items: [
      { name: "MySQL", icon: "devicon-mysql-original colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
    ],
  },
  {
    id: 4,
    category: "Development & Design Tools",
    color: "bg-zinc-900",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "GitLab", icon: "devicon-gitlab-original" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Android Studio", icon: "devicon-androidstudio-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Microsoft Excel", icon: "ri-file-excel-2-fill" },
    ],
  },
];