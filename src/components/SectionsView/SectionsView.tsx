import {  useMemo, useRef, useState } from "react";
import { SECTIONS } from "../../constants/sections";
import SectionContainer from "../SectionContainer";
import ProjectWindow from "../ProjectWindow";
import ChartsView from "../ChartsView";
import About from "../About";
import emailjs from "@emailjs/browser";




interface SectionsViewProps {
  activeSection: string;
  handleSectionClick: (section: string) => void;
}

const SectionsView = ({
  activeSection,
  handleSectionClick,
}: SectionsViewProps) => {
  const [currentProject, setCurrentProject] = useState<string>("");
  const [errors, setErrors] = useState<{ user_name: string; user_email: string; message: string }>({ user_name: '', user_email: '', message: '' });
  const [message, setMessage] = useState<string>("");
const [loading, setLoading] = useState<boolean>(false);
  
  const form = useRef<HTMLFormElement>(null);
  const sectionChildren = useMemo(() => {
    if (activeSection !== "") {
      return SECTIONS.find((section) => section.id === activeSection)
        ?.childrens;
    }
  }, [activeSection]);

  const sections = useMemo(() => {
    return activeSection === ""
      ? SECTIONS
      : SECTIONS.filter((section) => section.id === activeSection);
  }, [activeSection]);

  const handleClickProject = (project: string) => {
    if (project === "resume") {
      // lo abrimos en una nueva pestaña la web https://resume-project-coral.vercel.app/
      window.open("https://resume-project-coral.vercel.app/", "_blank");
      return;
    }
    setCurrentProject(project);
  };

  const validateForm = () => {
    let formIsValid = true;
    const errors = {} as { user_name: string; user_email: string; message: string };
  
    if ( form.current && !form.current.user_name.value) {
      errors.user_name = "Name is required.";
      formIsValid = false;
    }
  
    if (form.current && !form.current.user_email.value) {
      errors.user_email = "Email is required.";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.current && form.current.user_email.value)) {
      errors.user_email = "Email is invalid.";
      formIsValid = false;
    }
  
    if (form.current && !form.current.message.value) {
      errors.message = "Message is required.";
      formIsValid = false;
    }
  
    setErrors(errors);
    return formIsValid;
  };
  


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("Validation Failed");
      return; // Detiene la función si la validación falla
    }
      // Indica que el envío ha comenzado
      setLoading(true);
    emailjs
      .sendForm(
        "service_uzu9dde",
        "template_fmc7fkf",
        form.current as HTMLFormElement, {
          publicKey: "W2QxzyDpLAPWUaBi2",
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrors({ user_name: '', user_email: '', message: '' });
          setLoading(false);
          setMessage("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useMemo(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [message]);


  return (
    <div className=" w-full">
      <div
        id="sections"
        className={`mt-10 relative w-full  bg-red-200 flex md:flex-row flex-col gap-2 justify-between`}
      >
        {sections.map((section) => (
          <div className="" key={section.id}>
            <SectionContainer
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
              handleSectionClick={handleSectionClick}
              activeSection={activeSection}
              key={section.id}
              title={section.title}
            />
          </div>
        ))}
      </div>
      <div className={` mb-5 ${currentProject === "" ? "show2" : "unshow"}`}>
        {sectionChildren &&
          currentProject === "" &&
          sectionChildren.map((section) => (
            <ProjectWindow
              handleProjectClick={handleClickProject}
              id={section.id}
              key={section.id}
              title={section.title}
              description={section.description}
              imgUrl={section.imgUrl}
            />
          ))}
      </div>
      {currentProject === "chart" && (
        <div className="show2">
          <ChartsView />
        </div>
      )}

      {activeSection === "About" && (
        <div className="show2">
          <About />
        </div>
      )}
      {activeSection === "Contact" && (
        <div className="show2  flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <p>You can contact me through the following form or via : </p>
            <div>
              <a
                href="https://www.linkedin.com/in/cris-perez93/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="linkedin"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
          <form 
           ref={form} 
           className="text-sm sm:w-2/4 flex flex-col gap-2"
            onSubmit={sendEmail}
           >
            <input
              type="text"
              name ="user_name"
              onChange={() => setErrors({ ...errors, user_name: "" })}
              placeholder="Name"
              className="w-full p-2 border rounded-md mt-5 outline-none"
            />
            <p className="text-red-500 text-xs">{errors.user_name}</p>
            <input
              type="email"
              onChange={() => setErrors({ ...errors, user_email: "" })}
              name="user_email"
              placeholder="Email"
              className="w-full p-2 border rounded-md mt-5 outline-none"
            />
            <p className="text-red-500 text-xs">{errors.user_email}</p>
            <textarea
              name="message"
              onChange={() => setErrors({ ...errors, message: "" })}
              placeholder="Message"
              className="w-full p-2 min-h-[150px] rounded-md mt-5 border outline-none"
            />
            <p className="text-red-500 text-xs">{errors.message}</p>
            <div className="flex gap-2 items-center">
            <button
              disabled={loading}
              type="submit"
              className="bg-gray-100 min-w-[120px] min-h-[35px] w-max p-2 rounded-md  cursor-pointer hover:bg-gray-200"
            >
              {loading ? <div className="loader"></div> : "Send"}
            </button>
            {message && <p className="text-[#59f191] text-xs">{message}</p>}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SectionsView;
