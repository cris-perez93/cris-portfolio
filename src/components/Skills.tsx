import React from "react";

const SKILLS = [
    {
        name: "Frontend",
        items: [
            "React", "TypeScript", "Next.js", "Tailwind CSS",
            "React Query", "Zustand", "HTML5", "CSS3",
            "Framer Motion", "GSAP", "Three.js"
        ]
    },
    {
        name: "Backend",
        items: [
            "Node.js", "NestJS", "PostgreSQL",
            "Prisma", "WebSockets", "Firebase"
        ]
    },
    {
        name: "Mobile",
        items: [
            "React Native", "Expo"
        ]
    },
    {
        name: "Testing",
        items: [
            "Cypress", "React Testing Library", "Jest"
        ]
    }
];

const Skills = () => {
    return (
        <div id="skills" className="h-full w-full flex flex-col justify-center max-w-[1400px] mx-auto py-20 relative px-4 lg:px-12">
            {/* Texto gigante de fondo estilo marca de agua */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none select-none overflow-hidden">
                <h2 className="text-[20vw] font-black leading-none tracking-tighter uppercase">
                    Skills
                </h2>
            </div>

            <div className="z-10 w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                {/* Lado izquierdo: Títulos */}
                <div className="w-full lg:w-1/3">
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] mb-8 text-white/50">
                        Area of Focus
                    </p>
                    <h3 className="text-5xl lg:text-[6vw] lg:leading-[0.85] font-black uppercase tracking-tighter">
                        Technical <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_white] lg:[-webkit-text-stroke:2px_white]">Arsenal</span>
                    </h3>

                    <p className="mt-8 text-lg text-white/60 font-medium max-w-sm">
                        A curated stack of modern technologies focused on performance, scalability, and pixel-perfect design.
                    </p>
                </div>

                {/* Lado derecho: Grid de Habilidades (Brutalista con líneas finas) */}
                <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                    {SKILLS.map((category, i) => (
                        <div key={category.name} className="flex flex-col group">
                            {/* Cabecera de la categoría con número de índice */}
                            <div className="flex justify-between items-end mb-6 border-b border-white/20 pb-4 transition-colors duration-500 group-hover:border-white">
                                <h4 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white">{category.name}</h4>
                                <span className="text-sm font-mono text-white/30 hidden sm:block">0{i + 1}</span>
                            </div>

                            {/* Tags de habilidades */}
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-5 py-2 text-sm font-medium border border-white/20 rounded-full text-white/70 hover:bg-white hover:text-black hover:border-white hover:scale-105 transition-all duration-300 cursor-none"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
