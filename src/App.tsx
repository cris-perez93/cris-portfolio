import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChartsView from "./components/ChartsView";
import { SECTIONS } from "./constants/sections";
import { useTranslation } from "react-i18next";

const Layout = ({ children }: { children: React.ReactNode }) => {

  const { i18n, t } = useTranslation();

  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  }

  const onScroll = (id: string, offset = 20) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md transition-all duration-300">
        <div className="font-bold text-xl tracking-tighter">CP.</div>
        <nav className="hidden md:flex gap-8">
          {SECTIONS.map((section) => (
            <li
              key={section.id}
              onClick={() => onScroll(section.id)}
              className="list-none cursor-pointer text-sm uppercase tracking-widest hover:text-gray-500 transition-colors"
            >
              {t(section.title)}
            </li>
          ))}
        </nav>
        <div id="flags-language" className="flex gap-4 text-xs font-bold tracking-widest">
          <span onClick={() => onChangeLanguage("en")} className={`cursor-pointer ${i18n.language === 'en' ? 'text-black' : 'text-gray-400'}`}>EN</span>
          <span className="text-gray-300">/</span>
          <span onClick={() => onChangeLanguage("es")} className={`cursor-pointer ${i18n.language === 'es' ? 'text-black' : 'text-gray-400'}`}>ES</span>
        </div>
      </header>
      <main className="pt-20">{children}</main>
      <footer className="py-10 text-center text-xs text-gray-400 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Cristian Pérez. All Rights Reserved.
      </footer>
    </>

  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomeScreen /></Layout>} />
        <Route path="/charts" element={<Layout><ChartsView /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
