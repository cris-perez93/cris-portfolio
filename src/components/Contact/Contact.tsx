
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "devpro.cris@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 animate-fade-in-up">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative group">
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 min-w-[200px] border border-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-600 group-hover:text-black transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm font-medium text-gray-800 group-hover:text-black">{email}</span>
          </a>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-black transition-all opacity-0 group-hover:opacity-100"
            title="Copy email"
          >
            {copied ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5" />
              </svg>
            )}
          </button>
        </div>

        <a
          href="https://www.linkedin.com/in/cris-perez93/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 min-w-[200px] border border-gray-100 group"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="w-8 h-8 grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          <span className="text-sm font-medium text-gray-800 group-hover:text-black">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;