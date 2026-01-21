
const SKILLS = [
    {
        name: "Frontend",
        items: [
            "React",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "React Query (TanStack)",
            "Zustand",
            "Redux",
            "HTML5",
            "CSS3",
            "Framer Motion",
            "Three.js",
            "Material UI"
        ]
    },
    {
        name: "Backend & Tools",
        items: [
            "Node.js",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "WebSockets",
            "Firebase",
            "Git",
            "Vite"
        ]
    },
    {
        name: "Mobile & Testing",
        items: [
            "React Native",
            "Expo",
            "Cypress",
            "React Testing Library",
            "Jest"
        ]
    },
    {
        name: "Soft Skills",
        items: [
            "Team Collaboration",
            "Problem Solving",
            "Agile Methodologies",
            "Technical Leadership",
            "Mentoring",
            "Communication",
            "Adaptability",
            "Critical Thinking"
        ]
    }
];

const Skills = () => {

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-20">
                <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wide">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {SKILLS.map((category) => (
                        <div key={category.name} className="flex flex-col gap-4">
                            <h3 className="text-xl font-semibold border-b-2 border-black pb-2 w-max">{category.name}</h3>
                            <ul className="flex flex-col gap-2">
                                {category.items.map((skill) => (
                                    <li key={skill} className="text-gray-700 hover:text-black transition-colors duration-300">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
