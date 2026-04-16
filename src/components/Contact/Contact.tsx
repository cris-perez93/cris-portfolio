
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactProps {
  onHover?: () => void;
  onLeave?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onHover, onLeave }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = "devpro.cris@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="min-h-full w-full flex flex-col justify-start md:justify-center max-w-[1400px] mx-auto pt-24 pb-12 md:py-20 relative px-4 md:px-12">
      {/* Texto gigante de fondo estilo marca de agua */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[25vw] md:text-[20vw] font-black leading-none tracking-tighter uppercase text-black">
          {t('contact.title')}
        </h2>
      </div>

      <div className="z-10 w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-32 items-start">
        {/* Lado izquierdo: Títulos */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.4em] mb-4 md:mb-6 text-black/40">
            {t('contact.availableForProjects')}
          </p>
          <h3
            className="text-4xl md:text-5xl lg:text-[5vw] xl:text-[70px] lg:leading-[0.8] font-black uppercase tracking-[calc(-0.02em)] text-black mb-6 md:mb-8 md:cursor-none"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            {t('contact.letsTalkDesign').split(' ')[0]} {t('contact.letsTalkDesign').split(' ')[1]} <br className="hidden md:block" />
            {t('contact.letsTalkDesign').split(' ')[2]}
          </h3>

          <p className="text-base md:text-lg text-black/60 font-medium max-w-sm leading-relaxed mb-8 md:mb-12">
            {t('contact.description')}
          </p>
        </div>

        {/* Lado derecho: Enlaces de contacto minimalistas */}
        <div className="w-full lg:w-[60%] flex flex-col gap-12">
          {/* Email Card */}
          <div className="flex flex-col group relative">
            <div className="flex justify-between items-end mb-4 border-b border-black/10 pb-4 transition-colors duration-500 group-hover:border-black">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black/40 group-hover:text-black">{t('contact.email')}</h4>
              <button
                onClick={handleCopy}
                className="text-[10px] font-bold uppercase tracking-widest text-black/20 hover:text-black transition-colors cursor-none"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <a
              href={`mailto:${email}`}
              className="text-2xl md:text-4xl font-black text-black group-hover:translate-x-4 transition-transform duration-500 cursor-none no-underline block"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
            >
              {email}
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-col group">
            <div className="flex justify-between items-end mb-4 border-b border-black/10 pb-4 transition-colors duration-500 group-hover:border-black">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black/40 group-hover:text-black">{t('contact.social')}</h4>
            </div>
            <div className="flex flex-wrap gap-8">
              <a
                href="https://www.linkedin.com/in/cris-perez93/"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-black text-black hover:translate-x-2 transition-transform duration-500 cursor-none no-underline inline-flex items-center gap-2"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 opacity-20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://github.com/cris-perez93"
                target="_blank"
                rel="noreferrer"
                className="text-xl md:text-2xl font-black text-black hover:translate-x-2 transition-transform duration-500 cursor-none no-underline inline-flex items-center gap-2"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
              >
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 opacity-20">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Footer sutil */}
          <div className="mt-12 flex flex-col gap-2 opacity-20">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em]">{t('contact.info')}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em]">&copy; {new Date().getFullYear()} Cristian Pérez</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;