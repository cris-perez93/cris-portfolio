import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import { useEffect } from "react";

interface LineCodeProps {
  component: string; // route to the component
}

const LineCode = ({ component }: LineCodeProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="text-xs max-h-[250px] max-w-[100%]  px-5 pb-5 bg-[#2d2d2d] overflow-auto border shadow-sm rounded-md scrollbar-thin">
      <pre>
        <code className="language-javascript w-full">{component}</code>
      </pre>
    </div>
  );
};

export default LineCode;
