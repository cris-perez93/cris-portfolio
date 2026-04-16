import React from "react";
import { useTranslation } from "react-i18next";

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

interface SkillsProps {
    onHover?: () => void;
    onLeave?: () => void;
}

const Skills: React.FC<SkillsProps> = ({ onHover, onLeave }) => {
    const { t } = useTranslation();

    return (
        <div id="skills" className="min-h-full w-full flex flex-col justify-start md:justify-center max-w-[1400px] mx-auto pt-24 pb-12 md:py-20 relative px-4 md:px-12">
            {/* Texto gigante de fondo estilo marca de agua */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
                <h2 className="text-[30vw] md:text-[25vw] font-black leading-none tracking-tighter uppercase text-black">
                    {t('skills.title')}
                </h2>
            </div>

            <div className="z-10 w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-32 items-center lg:items-start">
                {/* Lado izquierdo: Títulos */}
                <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left">
                    <p className="text-[10px] md:text-sm font-semibold uppercase tracking-[0.4em] mb-4 md:mb-6 text-black/40">
                        {t('skills.areaOfFocus')}
                    </p>
                    <h3
                        className="text-4xl md:text-5xl lg:text-[5vw] xl:text-[70px] lg:leading-[0.8] font-black uppercase tracking-[calc(-0.02em)] text-black mb-6 md:mb-8 md:cursor-none"
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                    >
                        {t('skills.technicalArsenal').split(' ')[0]} <br className="hidden md:block" />
                        {t('skills.technicalArsenal').split(' ')[1]}
                    </h3>

                    <p className="text-base md:text-lg text-black/60 font-medium max-w-sm leading-relaxed">
                        {t('skills.description')}
                    </p>
                </div>

                {/* Lado derecho: Grid de Habilidades */}
                <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
                    {SKILLS.map((category, i) => (
                        <div key={category.name} className="flex flex-col group">
                            {/* Cabecera de la categoría */}
                            <div className="flex justify-between items-end mb-6 border-b border-black/10 pb-4 transition-colors duration-500 group-hover:border-black">
                                <h4 className="text-2xl font-bold uppercase tracking-tight text-black">{t(`skills.${category.name.toLowerCase()}`)}</h4>
                                <span className="text-xs font-mono text-black/20 hidden sm:block">/0{i + 1}</span>
                            </div>

                            {/* Tags de habilidades */}
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-4 py-1.5 text-[13px] font-semibold border border-black/10 rounded-full text-black/40 hover:text-black hover:border-black/30 hover:scale-[1.03] transition-all duration-500 cursor-none select-none"
                                        onMouseEnter={onHover}
                                        onMouseLeave={onLeave}
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
