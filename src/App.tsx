import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpainFlag from "./assets/spain.png";
import UkFlag from "./assets/united-kingdom.png";
import ChartsView from "./components/ChartsView";
import { SECTIONS } from "./constants/sections";
import { useTranslation } from "react-i18next";

const Layout = ({ children }: { children: React.ReactNode }) => {
  
  const { i18n, t } = useTranslation();

  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  }

  const onScroll = (id:string, offset = 20) => {
    const element = document.getElementById(id);
    if (element) {
      // Calcular la posición del elemento respecto al documento
      let elementPosition = element.getBoundingClientRect().top + window.scrollY;
  
      // Ajustar el desplazamiento para considerar elementos fijos, como un header
      elementPosition -= offset; // Ajusta este valor según la altura de tu header o cualquier otro elemento
  
      // Realizar el desplazamiento
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };


  return (
    <>
    <header className="fixed left-0 top w-full bg-[#f6f6f6] z-50 flex justify-center sm:justify-end items-end">
      <nav className="flex gap-5 px-10 py-2">
        {SECTIONS.map((section) => (
          <li
            key={section.id}
            onClick={() => onScroll(section.id)}
            className="list-none cursor-pointer"
          >
            {t(section.title)}
          </li>
        ))}
      </nav>
      <div id="flags-language" className="flex gap-2 absolute -bottom-10 right-10">
        <img 
          onClick={() => onChangeLanguage("en")}
          src={UkFlag} alt="uk" 
          className="w-5 h-5 cursor-pointer" />
        <img
          onClick={() => onChangeLanguage("es")} 
          src={SpainFlag} 
          alt="spain" 
          className="w-5 h-5 cursor-pointer" />

      </div>
      </header>
      <main>{children}</main>
      <footer></footer>
      </>
    
  );
}


function App() {
  return (
    <Router>
      {/* <Nav
          handleSectionClick={handleSectionClick}
        /> */}
      <Routes>
        <Route path="/" element={<Layout><HomeScreen /></Layout>} />
        <Route path="/charts" element={<Layout><ChartsView/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
