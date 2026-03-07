
import React from "react";
import { useTranslation } from "react-i18next";
import { ABOUT_ME_EN, ABOUT_ME_ES } from "./constants/about";
import ProfileImg from "../../assets/cris_profile.jpg";

interface AboutProps {
  onHover?: () => void;
  onLeave?: () => void;
}

const About: React.FC<AboutProps> = ({ onHover, onLeave }) => {
  const { i18n } = useTranslation();

  const description = i18n.language === "en" ? ABOUT_ME_EN : ABOUT_ME_ES;

  return (
    <div id="about" className="h-full w-full flex flex-col justify-center max-w-[1400px] mx-auto py-20 relative px-6 lg:px-12">
      {/* Texto gigante de fondo estilo marca de agua */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[25vw] font-black leading-none tracking-tighter uppercase text-black">
          About
        </h2>
      </div>

      <div className="z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-32 items-center">
        {/* Lado izquierdo: Foto de perfil con estilo */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <div
            className="relative w-full max-w-[400px] aspect-[4/5] group cursor-none"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            {/* Marco decorativo */}
            <div className="absolute inset-0 border border-black/10 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Contenedor de imagen */}
            <div className="relative w-full h-full overflow-hidden bg-black/5 border border-black/10">
              <img
                src={ProfileImg}
                alt="Cristian Pérez"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        {/* Lado derecho: Información */}
        <div className="w-full lg:w-[60%] flex flex-col items-start text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] mb-6 text-black/40">
            Digital Alchemist
          </p>
          <h3
            className="text-5xl lg:text-[5vw] xl:text-[70px] lg:leading-[0.8] font-black uppercase tracking-[calc(-0.02em)] text-black mb-8 cursor-none"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Building <br />
            Futures
          </h3>

          <div className="max-w-xl">
            <p className="text-lg lg:text-xl text-black/60 font-medium leading-relaxed mb-10 whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
