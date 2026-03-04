import { useState, useEffect, useRef } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/AwwwardsHero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();
  const [currentSection, setCurrentSection] = useState(0);
  const isAnimating = useRef(false);

  // Total de secciones (Hero, Skills, Projects, About, Contact)
  const sectionsCount = 5;

  useEffect(() => {
    // Evitar que el scroll normal mueva la página entera
    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current) return;

      if (e.deltaY > 50) {
        // Scroll hacia abajo
        if (currentSection < sectionsCount - 1) {
          isAnimating.current = true;
          setCurrentSection(prev => prev + 1);
          setTimeout(() => { isAnimating.current = false; }, 1000);
        }
      } else if (e.deltaY < -50) {
        // Scroll hacia arriba
        if (currentSection > 0) {
          isAnimating.current = true;
          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isAnimating.current = false; }, 1000);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);

  return (
    <div className="h-screen w-full bg-[#fcfcfc] text-black">
      <div
        className="transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] w-full"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {/* Secciones, cada una forzada a 100vh */}
        <section className="h-screen w-full relative">
          <Hero />
        </section>

        <section className="h-screen w-full relative bg-black text-white px-6">
          <Skills />
        </section>

        <section className="h-screen w-full relative px-6 bg-white overflow-hidden">
          <div className="h-full flex flex-col justify-center">
            <Projects />
          </div>
        </section>

        <section className="h-screen w-full relative flex flex-col items-center justify-center bg-[#f4f4f4] px-6">
          <div className="max-w-[1000px] w-full">
            <h2 className="text-[6vw] lg:text-[4vw] font-black mb-10 text-center uppercase tracking-tighter mix-blend-difference">{t('about.title')}</h2>
            <About />
          </div>
        </section>

        <section className="h-screen w-full relative flex flex-col items-center justify-center bg-white px-6">
          <div className="max-w-[1000px] w-full flex flex-col gap-8">
            <h2 className="text-[6vw] lg:text-[4vw] font-black mb-4 uppercase tracking-tighter text-center">{t('contact.title')}</h2>
            <Contact />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
