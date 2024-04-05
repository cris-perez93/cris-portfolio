import ProjectWindow from "../../components/ProjectWindow";
import { PROJECTS } from "../../constants/projects";
import ChartsView from "../../components/ChartsView";
import { useEffect, useMemo } from "react";

interface ProjectScreenProps {
  handleProjectClick: (project: string) => void;
  currentProject: string;
}

const ProjectsScreen = ({
  handleProjectClick,
  currentProject,
}: ProjectScreenProps) => {
  console.log(currentProject);

  // crear memo para en el caso de que currentProject sea distinto a '', mostrar solo ese proyecto
  const prjectsMemo = useMemo(() => {
    if (currentProject !== "") {
      return PROJECTS.filter((project) => project.id === currentProject);
    }
    return PROJECTS;
  }, [currentProject]);


  return (
    <div className="flex flex-col gap-10 px-5">
      {prjectsMemo.map((project, index) => (
        <ProjectWindow 
          currentProject={currentProject}
          handleProjectClick={handleProjectClick}
          id={project.id}
          key={index}
          title={project.title}
          description={project.description}
          imgUrl={project.imgUrl}
        />
      ))}
    </div>
  );
};

export default ProjectsScreen;
