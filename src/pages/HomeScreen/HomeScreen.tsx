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

  // Touch handling
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  // Custom transition duration - Sped up for faster navigation
  const transitionDur = 700;

  // Total de secciones (Hero, Skills, Projects, About, Contact)
  const sectionsCount = 5;

  useEffect(() => {
    const handleScrollLock = () => {
      if (window.innerWidth > 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleScrollLock();
    window.addEventListener("resize", handleScrollLock);

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating.current || window.innerWidth <= 768) return;

      if (Math.abs(e.deltaY) > 30) {
        if (e.deltaY > 0) {
          if (currentSection < sectionsCount - 1) {
            isAnimating.current = true;
            if (currentSection === 0) heroRef.current?.leave(transitionDur);
            setCurrentSection(prev => prev + 1);
            setTimeout(() => { isAnimating.current = false; }, transitionDur);
          }
        } else {
          if (currentSection > 0) {
            isAnimating.current = true;
            if (currentSection === 1) heroRef.current?.enter();
            setCurrentSection(prev => prev - 1);
            setTimeout(() => { isAnimating.current = false; }, transitionDur);
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEnd.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStart.current || !touchEnd.current) return;
      const distance = touchStart.current - touchEnd.current;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isAnimating.current) return;

      if (isLeftSwipe && currentSection < sectionsCount - 1) {
        isAnimating.current = true;
        if (currentSection === 0) heroRef.current?.leave(transitionDur);
        setCurrentSection(prev => prev + 1);
        setTimeout(() => { isAnimating.current = false; }, transitionDur);
      } else if (isRightSwipe && currentSection > 0) {
        isAnimating.current = true;
        if (currentSection === 1) heroRef.current?.enter();
        setCurrentSection(prev => prev - 1);
        setTimeout(() => { isAnimating.current = false; }, transitionDur);
      }

      touchStart.current = null;
      touchEnd.current = null;
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
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    if (geometricRef.current) {
      gsap.to(geometricRef.current, { rotation: 360, duration: 30, repeat: -1, ease: "linear" });
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleScrollLock);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
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
    <div className="h-screen w-full bg-[#f4f4f4] text-black overflow-hidden relative md:cursor-none">

      {/* Custom Cursor Global - Hidden on mobile */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block border border-black/10"
      />

      {/* BACKGROUND COMÚN PARA TODAS LAS SECCIONES */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div
          ref={geometricRef}
          className="absolute right-[-20%] md:right-[-5%] top-[5%] w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] max-w-[800px] max-h-[800px] border-[1px] border-black/10 rounded-full"
          style={{ borderStyle: 'dashed' }}
        >
          <div className="absolute inset-[10%] border-[1px] border-black/5 rounded-full" />
          <div className="absolute inset-[20%] border-[1px] border-black/5 rounded-full" />
        </div>
      </div>

      <div
        className="flex h-screen relative z-10 touch-pan-y"
        style={{
          width: `${sectionsCount * 100}vw`,
          transform: `translateX(-${currentSection * 100}vw)`,
          transition: `transform ${transitionDur}ms cubic-bezier(0.8, 0, 0.2, 1)`
        }}
      >
        <section className="h-screen w-[100vw] flex-shrink-0 relative overflow-y-auto md:overflow-hidden bg-transparent">
          <Hero ref={heroRef} onHover={growCursor} onLeave={shrinkCursor} />
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative bg-transparent text-black px-4 md:px-6 overflow-y-auto md:overflow-hidden">
          <div className="min-h-full flex flex-col justify-start md:justify-center">
            <Skills onHover={growCursor} onLeave={shrinkCursor} />
          </div>
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative px-4 md:px-6 bg-transparent overflow-y-auto md:overflow-hidden">
          <div className="min-h-full flex flex-col justify-start md:justify-center">
            <Projects onHover={growCursor} onLeave={shrinkCursor} />
          </div>
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative flex flex-col items-center justify-start md:justify-center bg-transparent px-4 md:px-6 overflow-y-auto md:overflow-hidden">
          <div className="max-w-[1400px] w-full min-h-full flex items-start md:items-center">
            <About onHover={growCursor} onLeave={shrinkCursor} />
          </div>
        </section>

        <section className="h-screen w-[100vw] flex-shrink-0 relative flex flex-col items-center justify-start md:justify-center bg-transparent px-4 md:px-6 overflow-y-auto md:overflow-hidden">
          <div className="max-w-[1400px] w-full min-h-full flex items-start md:items-center">
            <Contact onHover={growCursor} onLeave={shrinkCursor} />
          </div>
        </section>
      </div>

      {/* Pagination Dots */}
      <div className="fixed bottom-6 md:bottom-auto md:top-1/2 md:right-10 md:-translate-y-1/2 left-6 md:left-auto flex md:flex-col gap-3 md:gap-4 z-50">
        {Array.from({ length: sectionsCount }).map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSection(i)}
            className={`cursor-pointer transition-all duration-500 rounded-full ${currentSection === i ? 'w-8 h-1 md:w-3 md:h-12 bg-black' : 'w-2 h-1 md:w-1 md:h-4 bg-black/20 hover:bg-black/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
