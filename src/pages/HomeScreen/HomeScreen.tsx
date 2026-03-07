import { useState, useEffect, useRef } from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero, { HeroRef } from "../../components/AwwwardsHero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";

import gsap from 'gsap';

const HomeScreen = () => {

  const [currentSection, setCurrentSection] = useState(0);
  const isAnimating = useRef(false);
  const heroRef = useRef<HeroRef>(null);
  const geometricRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Custom transition duration
  const transitionDur = 1200;

  // Total de secciones (Hero, Skills, Projects, About, Contact)
  const sectionsCount = 5;

  useEffect(() => {
    // Evitar que el scroll normal mueva la página entera
    document.body.style.overflow = "hidden";

    const handleWheel = async (e: WheelEvent) => {
      if (isAnimating.current) return;

      if (e.deltaY > 30) {
        // Scroll hacia la derecha (Next)
        if (currentSection < sectionsCount - 1) {
          isAnimating.current = true;

          if (currentSection === 0) {
            heroRef.current?.leave(transitionDur);
          }

          setCurrentSection(prev => prev + 1);
          setTimeout(() => { isAnimating.current = false; }, transitionDur);
        }
      } else if (e.deltaY < -30) {
        // Scroll hacia la izquierda (Prev)
        if (currentSection > 0) {
          isAnimating.current = true;

          if (currentSection === 1) {
            heroRef.current?.enter();
          }

          setCurrentSection(prev => prev - 1);
          setTimeout(() => { isAnimating.current = false; }, transitionDur);
        }
      }
    };

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("mousemove", moveCursor);

    if (geometricRef.current) {
      gsap.to(geometricRef.current, { rotation: 360, duration: 30, repeat: -1, ease: "linear" });
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [currentSection, transitionDur]);

  // Funciones globales para expandir el cursor (se pueden pasar via props o usar eventos)
  const growCursor = () => {
    gsap.to(cursorRef.current, { scale: 4, backgroundColor: "transparent", border: "1px solid black", duration: 0.3 });
  };
  const shrinkCursor = () => {
    gsap.to(cursorRef.current, { scale: 1, backgroundColor: "black", border: "none", duration: 0.3 });
  };

  return (
    <div className="h-screen w-full bg-[#f4f4f4] text-black overflow-hidden relative cursor-none">

      {/* Custom Cursor Global */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 md:block border border-black/10"
      />

      {/* BACKGROUND COMÚN PARA TODAS LAS SECCIONES */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div
          ref={geometricRef}
          className="absolute right-[-5%] top-[5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] border-[1px] border-black/10 rounded-full"
          style={{ borderStyle: 'dashed' }}
        >
          <div className="absolute inset-[10%] border-[1px] border-black/5 rounded-full" />
          <div className="absolute inset-[20%] border-[1px] border-black/5 rounded-full" />
        </div>
      </div>

      <div
        className="flex h-screen relative z-10"
        style={{
          width: `${sectionsCount * 100}vw`,
          transform: `translateX(-${currentSection * 100}vw)`,
          transition: `transform ${transitionDur}ms cubic-bezier(0.8, 0, 0.2, 1)`
        }}
      >
        <section className="h-screen w-[100vw] flex-shrink-0 relative overflow-hidden bg-transparent">
          <Hero ref={heroRef} onHover={growCursor} onLeave={shrinkCursor} />
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative bg-transparent text-black px-6 overflow-hidden">
          <Skills onHover={growCursor} onLeave={shrinkCursor} />
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative px-6 bg-transparent overflow-hidden">
          <div className="h-full flex flex-col justify-center">
            <Projects onHover={growCursor} onLeave={shrinkCursor} />
          </div>
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative flex flex-col items-center justify-center bg-transparent px-6 overflow-hidden">
          <div className="max-w-[1400px] w-full">
            <About onHover={growCursor} onLeave={shrinkCursor} />
          </div>
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative flex flex-col items-center justify-center bg-transparent px-6 overflow-hidden">
          <div className="max-w-[1400px] w-full">
            <Contact onHover={growCursor} onLeave={shrinkCursor} />
          </div>
        </section>
      </div>

      <div className="fixed bottom-10 left-12 flex gap-4 z-50">
        {Array.from({ length: sectionsCount }).map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 ${currentSection === i ? 'w-12 bg-black' : 'w-4 bg-black/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
