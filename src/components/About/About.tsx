// components/About.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { ABOUT_ME_EN, ABOUT_ME_ES } from "./constants/about";
import CvEsp from "../../assets/CV_CRISTIAN_ESP.pdf";
import CvEng from "../../assets/CV_INGLES_CRISTIAN.pdf";

const About: React.FC = () => {
  const { i18n, t } = useTranslation();

  const description = i18n.language === "en" ? ABOUT_ME_EN : ABOUT_ME_ES;
  const cvFile = i18n.language === "en" ? CvEng : CvEsp;

  return (
    <div className="flex flex-col items-center justify-center text-center animate-fade-in-up">
      <div className="max-w-2xl text-lg leading-relaxed text-gray-600 mb-8">
        <p>{description}</p>
      </div>

      <a
        href={cvFile}
        target="_blank"
        rel="noreferrer"
        className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        {t('about.resume')}
      </a>
    </div>
  );
};

export default About;
