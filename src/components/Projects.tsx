
import { PROJECTS } from "../data/projects";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
    onHover?: () => void;
    onLeave?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onHover, onLeave }) => {
    const { t } = useTranslation();

    return (
        <div id="projects" className="h-full w-full flex flex-col justify-center max-w-[1400px] mx-auto py-20 relative px-6 lg:px-12">
            {/* Texto gigante de fondo estilo marca de agua */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none overflow-hidden z-0">
                <h2 className="text-[20vw] font-black leading-none tracking-tighter uppercase text-black">
                    Work
                </h2>
            </div>

            <div className="z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-32 items-center lg:items-start">
                {/* Lado izquierdo: Títulos */}
                <div className="w-full lg:w-[35%] flex flex-col">
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] mb-6 text-black/40">
                        Selected Cases
                    </p>
                    <h3
                        className="text-5xl lg:text-[5vw] xl:text-[70px] lg:leading-[0.8] font-black uppercase tracking-[calc(-0.02em)] text-black mb-8 cursor-none"
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                    >
                        Featured <br />
                        Projects
                    </h3>

                    <p className="text-lg text-black/60 font-medium max-w-sm leading-relaxed">
                        A collection of digital solutions where design meets functionality to create impactful user experiences.
                    </p>
                </div>

                {/* Lado derecho: Lista de Proyectos Refinada */}
                <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                    {PROJECTS.map((project, i) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col group cursor-none no-underline h-full"
                            onMouseEnter={onHover}
                            onMouseLeave={onLeave}
                        >
                            {/* Imagen del proyecto con contenedor minimalista */}
                            <div className="relative aspect-[16/9] mb-6 overflow-hidden bg-black/5 border border-black/5 group-hover:border-black/20 transition-colors duration-500 flex-shrink-0">
                                <img
                                    src={project.imgUrl}
                                    alt={t(project.title)}
                                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-4 right-4 text-[10px] font-mono text-black/20 group-hover:text-black transition-colors">
                                    /0{i + 1}
                                </div>
                            </div>

                            {/* Info del proyecto */}
                            <div className="flex flex-col flex-grow">
                                <h4 className="text-2xl font-bold uppercase tracking-tight text-black mb-2">{t(project.title)}</h4>
                                <p className="text-sm text-black/50 line-clamp-2 mb-6 leading-relaxed">
                                    {t(project.description)}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-black/30">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-black/10 group-hover:border-black transition-colors duration-500">
                                        <div className="text-[11px] font-black uppercase tracking-[0.2em] text-black/40 group-hover:text-black transition-colors inline-flex items-center gap-2">
                                            {t(project.go)}
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
