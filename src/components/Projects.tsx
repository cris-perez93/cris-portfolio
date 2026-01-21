
import { PROJECTS } from "../data/projects";
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-20 bg-gray-50 flex flex-col items-center">
            <div className="max-w-[1000px] w-full px-6">
                <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wide">{t('projects.title')}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                            <div className="p-6 flex flex-col items-center flex-grow">
                                <img
                                    src={project.imgUrl}
                                    alt={t(project.title)}
                                    className="h-16 w-auto object-contain mb-6"
                                />
                                <h3 className="text-xl font-bold mb-3 text-center">{t(project.title)}</h3>
                                <p className="text-gray-600 text-sm text-center leading-relaxed mb-6 flex-grow">
                                    {t(project.description)}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-semibold uppercase tracking-wider hover:text-gray-600 transition-colors inline-flex items-center gap-2"
                                >
                                    {t(project.go)}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-center text-gray-500 text-sm mt-12 italic">
                    {t('projects.moreComingSoon') || "More exciting projects coming soon..."}
                </p>
            </div>
        </section>
    );
};

export default Projects;
