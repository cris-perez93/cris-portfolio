import { useState } from "react";
interface ProjectWindowProps {
  imgUrl: string;
  title: string;
  id: string;
  description: string;
  handleProjectClick: (project: string) => void;
}

const ProjectWindow = ({
  imgUrl,
  title,
  id,
  description,
 handleProjectClick,
}: ProjectWindowProps) => {
  const [showButton, setShowButton] = useState(false);

  // al hacer hover en el button dibujaremos una linea en la parte inferior del texto animada
  const onButtonHover = () => {
    const line = document.getElementById("underline-div");
    if (!line) return;
    line.classList.add("underline-animation");
  };
  return (
    <div className="flex relative flex-col mt-5">
      <p className="mb-5 font-bold">{title}</p>
      <p className="text-sm">{description}</p>
      <div
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        className="border relative  mt-5 rounded-lg overflow-hidden shadow-md w-full h-[340px] group"
      >
        {/* El div interno controla la opacidad de la imagen */}
        <div
          className={`w-full h-full transition-opacity duration-300 ease-in-out ${
            showButton ? "opacity-30" : "opacity-100"
          }`}
        >
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover object-center" 
          />
        </div>
        {showButton && (
          <div
            onClick={() =>  handleProjectClick(id)}
            onMouseEnter={onButtonHover}
            id="button-project"
            className="absolute cursor-pointer z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-3 flex justify-center items-center "
          >
            <p className=" font-semibold uppercase tracking-widest  text-xl">
              Ver proyecto
            </p>
            <div
              id="underline-div"
              className="  h-0.5 bg-black absolute bottom-0 left-0"
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectWindow;
