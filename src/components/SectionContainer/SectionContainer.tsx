
interface SectionContainerProps {
  title: string;
  handleSectionClick: (section: string) => void;
  activeSection: string;
  currentProject?: string;
  setCurrentProject: (project: string) => void;
}


const SectionContainer = ({
  title,
  handleSectionClick,
  activeSection,
  currentProject,
  setCurrentProject 
}: SectionContainerProps) => {
 
  return (
    <>
    <div
      onClick={() => {
        if (currentProject !== "") {
          handleSectionClick('Projects');
          setCurrentProject("");
        } else {
          handleSectionClick(title);
        }
      
      }}
      className={`sectionContainer flex items-center z-20 relative cursor-pointer transition-transform duration-300 ease-in-out ${
        activeSection !== title && activeSection !== "" ? "unshow" : ""
      }`}
    >
      {activeSection !== "" && (
        <div
          onClick={(e) => {
            console.log("click");
            if (currentProject !== "") {
              handleSectionClick('Projects');
              setCurrentProject("");
            } else {
              handleSectionClick("");
            }
            e.stopPropagation();
          }}
          className={`z-20 absolute sm:-left-10 -left-5 ${activeSection !== title ? "hidden" : ""}`}
          id="arrowBack"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      )}
       <p className=" uppercase text-4xl font-semibold">{title}</p>
    </div>
    </>
  );
};

export default SectionContainer;
