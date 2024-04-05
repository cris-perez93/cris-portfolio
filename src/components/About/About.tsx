// components/About.tsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageCris from "../../assets/cris_about.jpg";
import { useTranslation } from "react-i18next";
import { ABOUT_ME_EN, ABOUT_ME_ES } from "./constants/about";

const SKILLS = [

  {
    id : 1,
    name: "Html",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    id : 2,
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    id : 3,
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id : 4,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 10,
    name: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    id : 5,
    name: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 6,
    name: "Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 7,
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 8,
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 9,
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  },
  {
    id: 17,
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    id: 11,
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 12,
    name: 'Storybook',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
  },
  {
    id: 13,
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
  },
  {
    id: 14,
    name: 'Cypress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
  },
  {
   id: 16,
   name: 'Git',
   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  }
];

const About: React.FC = () => {
  const {i18n} = useTranslation();
  const [aboutDescription, setAboutDescription] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    if (i18n.language) {
      setAboutDescription(i18n.language === "en" ? ABOUT_ME_EN : ABOUT_ME_ES);
    }
  }
  , [i18n?.language]);

  // detectar el lenguage seleccionado por el usuario
  
  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div className="flex flex-col pb-10">
      <div className=" w-full xl:grid grid-cols-2 flex-wrap ">
        <div className="pr-5 text-sm">
          <p 
          dangerouslySetInnerHTML={{ __html: aboutDescription }}
          className="leading-normal">
          </p>
          <p 
           onClick={() => console.log("Get my resume")}
          className=" bg-gray-100 shadow-md w-max p-2 rounded-md mt-5 cursor-pointer hover:bg-gray-200">
            {t('about.resume')}
          </p>
        </div>
        <img src={ImageCris} alt="profile" className=" hidden rounded-lg w-1/2 xl:w-full xl:block" />
      </div>
      <div id="skills" className="mt-20 ">
      <h1 className="p-2 font-bold w-max">Skills</h1>
        <div className="py-5  md:grid grid-cols-2 gap-10">
        <div className="flex flex-wrap gap-5 mt-5">
            {SKILLS.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-col items-center"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10"
                />
                <p className="text-xs mt-2">{skill.name}</p>
              </div>
            ))}
            </div>
          <div className="py-5">
          <p className="text-sm">
            {t('about.skillsDescription')}
          </p>
          </div>
          
          
          </div>
      </div>
    </div>
  );
};

export default About;
