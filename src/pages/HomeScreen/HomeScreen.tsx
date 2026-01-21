import About from "../../components/About";
import Contact from "../../components/Contact";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#fcfcfc] text-black">
      <Hero />


      <Skills />

      <Projects />

      <div id="about" className="py-20 bg-gray-50 flex flex-col items-center">
        <div className="max-w-[1000px] w-full px-6">
          <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-wide">{t('about.title')}</h2>
          <About />
        </div>
      </div>

      <div id="contact" className="py-20 w-full flex flex-col items-center">
        <div className="max-w-[1000px] w-full px-6 flex flex-col gap-8">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide text-center">{t('contact.title')}</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
