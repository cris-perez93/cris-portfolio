
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
    <div id="contact" className="h-full w-full flex flex-col justify-center max-w-[1400px] mx-auto py-20 relative px-6 lg:px-12">
      {/* Texto gigante de fondo estilo marca de agua */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[20vw] font-black leading-none tracking-tighter uppercase text-black">
          Contact
        </h2>
      </div>

      <div className="z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
        {/* Lado izquierdo: Títulos */}
        <div className="w-full lg:w-[40%] flex flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] mb-6 text-black/40">
            Available for Projects
          </p>
          <h3
            className="text-5xl lg:text-[5vw] xl:text-[70px] lg:leading-[0.8] font-black uppercase tracking-[calc(-0.02em)] text-black mb-8 cursor-none"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
          >
            Let's Talk <br />
            Design
          </h3>

          <p className="text-lg text-black/60 font-medium max-w-sm leading-relaxed mb-12">
            {t('contact.description') || "Have a project in mind? Let's build something extraordinary together."}
          </p>
        </div>

        {/* Lado derecho: Enlaces de contacto minimalistas */}
        <div className="w-full lg:w-[60%] flex flex-col gap-12">
          {/* Email Card */}
          <div className="flex flex-col group relative">
            <div className="flex justify-between items-end mb-4 border-b border-black/10 pb-4 transition-colors duration-500 group-hover:border-black">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black/40 group-hover:text-black">Email</h4>
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
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-black/40 group-hover:text-black">Social</h4>
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
            <p className="text-[10px] font-bold uppercase tracking-[0.5em]">Based in Barcelona, ES / Open to Remote</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em]">&copy; 2026 Cristian Pérez</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;