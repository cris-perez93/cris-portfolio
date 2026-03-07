import React, { useState, useEffect } from "react";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChartsView from "./components/ChartsView";
import { useTranslation } from "react-i18next";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-6 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent text-black'}`}>
        <div className="font-black text-2xl tracking-tighter">CP.</div>

        <div id="flags-language" className="flex gap-4 text-[10px] font-black tracking-[0.2em]">
          <span onClick={() => onChangeLanguage("en")} className={`cursor-pointer transition-colors ${i18n.language === 'en' ? 'text-black' : 'text-gray-300 hover:text-black'}`}>EN</span>
          <span className="text-gray-200">/</span>
          <span onClick={() => onChangeLanguage("es")} className={`cursor-pointer transition-colors ${i18n.language === 'es' ? 'text-black' : 'text-gray-300 hover:text-black'}`}>ES</span>
        </div>
      </header>
      <main>{children}</main>
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
