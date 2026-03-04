import { useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import gsap from 'gsap';

const AwwwardsHero = () => {
    const { t } = useTranslation();

    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef1 = useRef<HTMLHeadingElement>(null);
    const titleRef2 = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const geometricRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Timeline para la animación de entrada
        const tl = gsap.timeline();

        // Configuración inicial (esconder elementos)
        gsap.set([titleRef1.current, titleRef2.current], { y: 200, skewY: 5, opacity: 0 });
        gsap.set(subtitleRef.current, { x: -50, opacity: 0 });
        gsap.set(descRef.current, { y: 50, opacity: 0 });
        gsap.set(geometricRef.current, { scale: 0, opacity: 0, rotation: 45 });
        gsap.set(linksRef.current?.children || [], { y: 20, opacity: 0 });

        // Animaciones
        tl.to(subtitleRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        })
            .to([titleRef1.current, titleRef2.current], {
                y: 0,
                skewY: 0,
                opacity: 1,
                duration: 1.4,
                ease: "power4.out",
                stagger: 0.2
            }, "-=0.6")
            .to(geometricRef.current, {
                scale: 1,
                opacity: 0.1, // Elemento geométrico sutil
                rotation: 0,
                duration: 2,
                ease: "expo.out"
            }, "-=1.2")
            .to(descRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            }, "-=1")
            .to(linksRef.current?.children || [], {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.8");

        // Custom Cursor Tracker
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Animación continua del elemento geométrico
        gsap.to(geometricRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "linear"
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    // Efecto interactivo sobre los textos gigantes para el cursor
    const handleTextHover = () => {
        gsap.to(cursorRef.current, { scale: 4, backgroundColor: "transparent", border: "1px solid black", duration: 0.3 });
    };

    const handleTextLeave = () => {
        gsap.to(cursorRef.current, { scale: 1, backgroundColor: "black", border: "none", duration: 0.3 });
    };

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center bg-[#f4f4f4] text-black overflow-hidden pt-20 cursor-none"
        >
            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
                style={{ mixBlendMode: 'difference' }}
            />

            {/* Ruido Fino de Fondo (Efecto texturizado sutil) */}
            <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            {/* Elemento Geométrico de Fondo (Reemplaza a la imagen fotográfica) */}
            <div
                ref={geometricRef}
                className="absolute right-[-10%] top-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] border-[1px] border-black rounded-full z-0 pointer-events-none opacity-10"
                style={{ borderStyle: 'dashed' }}
            >
                <div className="absolute inset-[10%] border-[1px] border-black rounded-full" />
                <div className="absolute inset-[20%] border-[1px] border-black rounded-full" />
            </div>

            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 z-10 relative">

                {/* Contenido Principal */}
                <div className="w-full mt-12 lg:mt-0 flex flex-col justify-center">
                    <p ref={subtitleRef} className="text-sm font-semibold uppercase tracking-[0.4em] mb-8 text-black/60">
                        {t('headerDescription') || "Frontend Developer"}
                    </p>

                    {/* Contenedor de Textos Gigantes para mantenerlos juntos */}
                    <div
                        className="flex flex-col items-start w-fit"
                        onMouseEnter={handleTextHover}
                        onMouseLeave={handleTextLeave}
                    >
                        <div className="overflow-hidden mb-[-2vw] pb-4">
                            <h1 ref={titleRef1} className="text-[14vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-black">
                                Cristian
                            </h1>
                        </div>
                        <div className="overflow-hidden pb-4 ml-[5vw] lg:ml-[10vw]">
                            <h1 ref={titleRef2} className="text-[14vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-black lg:text-black">
                                Pérez
                            </h1>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-24 max-w-xl pl-8 border-l-2 border-black/20 self-start lg:self-end lg:mr-[10vw]">
                        <p ref={descRef} className="text-lg lg:text-2xl font-medium text-black/80 leading-relaxed tracking-tight">
                            {t('hey') || "Crafting digital experiences with precision and passion. Bridging the gap between design and solid engineering."}
                        </p>

                        <div ref={linksRef} className="flex flex-wrap gap-6 mt-10">
                            <a href="#about" className="relative group overflow-hidden px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest cursor-none">
                                <span className="relative z-10">Discover More</span>
                                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                                <span className="absolute inset-0 flex items-center justify-center text-black transform opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 font-bold uppercase tracking-widest">
                                    Discover More
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Indicador de Scroll en la esquina */}
            <div className="absolute bottom-8 right-8 flex items-center gap-4 text-black/50 rotate-90 transform origin-right">
                <span className="text-xs uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
                <span className="w-12 h-[1px] bg-black/50 block"></span>
            </div>
        </section>
    );
};

export default AwwwardsHero;
