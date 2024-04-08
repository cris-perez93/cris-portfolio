
import ProfilePhoto from "../../assets/cris_profile.jpg";
import About from "../../components/About";
import ResumeScreenShot from "../../assets/resume_screenshot.png";
import ChartsView from "../../components/ChartsView";
import Contact from "../../components/Contact";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    id: "resume",
    title: "projects.resume.title",
    link: "https://resume-project-coral.vercel.app/",
    stack: [
      {
        id: 1,
        name: "NextJS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        id: 3,
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      },
    ],
    url: "/resume",
    description:
      "projects.resume.description",
    imgUrl: ResumeScreenShot,
    componentView: null,
  },
  {
    id: "chart",
    title: "projects.chart.title",
    url: "/charts",
    componentView: <ChartsView />,
    stack: [
      {
        id: 1,
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        id: 2,
        name: "Typescript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
    ],
    description:
      "projects.chart.description",
    imgUrl:
      "https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomeScreen = () => {

  const { t } = useTranslation();


  return (
    <div className="pb-10 pt-5">
      <div
        id="info-name"
        className={"w-full show sm:p-20 p-5 bg-[#f6f6f6] flex justify-center"}
      >
        <div className=" flex  md:max-w-[1200px] sm:px-20 md:flex-row flex-col-reverse justify-between">
          <div className=" md:w-2/4 flex flex-col gap-2">
            <p className=" bg-gray-50 shadow-md p-2 font-bold rounded-md w-max ">
              {t('hey')}
            </p>
            <h1 className=" font-extrabold text-2xl ">Meet Cristian Pérez</h1>
            <p className=" tracking-widest uppercase    ">
              Frontend Developer
            </p>
            <p className=" md:text-md !text-[14px]">
              {t('headerDescription')}
            </p>
          </div>
          <img
            src={ProfilePhoto}
            alt="Cristian Pérez"
            className="rounded-full m-auto sm:m-0 w-[200px]  mt-5"
          />
        </div>
      </div>
      <div id="projects" className="md:max-w-[1200px]  m-auto pb-10 sm:mt-20 px-5 relative sm:px-20">
        <div  className="sm:mt-20 mt-20">
          <div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl text-center font-bold">{t('projects.title')}</h1>
              <p className="text-sm text-center">
                {t('projects.description')}
              </p>
            </div>
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className={`flex  sm:p-5 rounded-md sm:shadow-md ${project.componentView ? "flex-col": 'md:flex-row flex-col gap-2 justify-center'} mt-10`}
              >
                <div className="sm:pr-10 gap-5 sm:gap-0  flex flex-col sm:justify-between justify-center items-center sm:items-start">
                  <h1 className="font-bold mb-2 text-xl text-center sm:text-start">{t(project.title)}</h1>
                  <p className="text-sm text-center sm:text-start">{t(project.description)}</p>
                  <div className="flex gap-2 mt-5">
                    {project?.stack.map((stack) => (
                      <img
                        key={stack.id}
                        src={stack.icon}
                        alt={stack.name}
                        className="w-10 h-10"
                      />
                    ))}
                  </div>
                  {project.link && (
                    <button
                      className="bg-gray-100 text-sm min-w-[120px]  w-max p-2 rounded-md  cursor-pointer hover:bg-gray-200 shadow-md"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      {t('projects.resume.go')}
                    </button>
                  )}
                </div>
                {!project.componentView ? (
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="sm:w-1/2 hidden sm:flex  rounded-lg shadow-md"
                  />
                ) : (
                  project.componentView
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <SectionsView
        activeSection={currentSection}
        handleSectionClick={handleSectionClick}
      />  */}
      </div>
      <div id="about" className="flex flex-col py-10 bg-[#eeeeee] w-full justify-center items-center gap-5 mt-10">
        <div className="max-w-[1200px] sm:px-20 px-5">
          <h1 className="text-3xl font-bold mb-5">{t('about.title')}</h1>
          <About />
        </div>
      </div>
      <div className="sm:max-w-[1200px] gap-5 flex justify-center items-center flex-col m-auto">
        <div className=" flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center mt-10">{t('contact.title')}</h1>
        <div className="flex gap-2 flex-wrap items-center justify-center">
        <p className="text-center text-sm">{t('contact.description')}</p>
            <div>
              <a
                href="https://www.linkedin.com/in/cris-perez93/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="linkedin"
                  className="w-6 h-6"
                />
              </a>
            </div>
        </div>

        </div>
      
        <Contact />
       
      </div>
    </div>
  );
};

export default HomeScreen;
