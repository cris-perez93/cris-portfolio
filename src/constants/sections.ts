import ResumeScreenShot from "../assets/resume_screenshot.png";
export const SECTIONS = [
  {
    title: "nav.projects",
    id: "projects",
    description: "Projects description",
    icon: "🚀",
    childrens: [
      {
        id: "chart",
        title: "Chart Library",
        url: "/charts",
        description:
          "Resume se lleva acabo con el fin de ofrecer un servicio para que los usuarios puedan crear su curriculum de manera rapida y sencilla , ademas de poder compartirlo con otras personas. Actualmente se encuentra en desarrollo.",
        imgUrl:
          "https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "resume",
        title: "Resume",
        url: "/resume",
        description:
          "Inicialmente se plantea como un proyecto personal, con el fin de aprender nuevas tecnologias y mejorar mis habilidades como desarrollador frontend. Se trata de una aplicación web que permite a los usuarios crear su curriculum de manera rapida y sencilla interactuando con una interfaz amigable.",
        imgUrl: ResumeScreenShot,
      },
    ],
  },
  {
    title: "nav.about",
    id: "about",
    description: "About description",
    icon: "👨‍💻",
  },
  {
    title: "nav.contact",
    id: "contact",
    description: "Contact description",
    icon: "📞",
  },
];
