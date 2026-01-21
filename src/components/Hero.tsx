import { useTranslation } from "react-i18next";
import ProfilePhoto from "../assets/cris_profile.jpg";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-[#fcfcfc] text-black pt-20">
            <div className="max-w-[1000px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-gray-500 uppercase tracking-[0.2em] mb-4 text-sm animate-fade-in-up">
                        {t('headerDescription') || "Frontend Developer"}
                    </p>
                    <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight animate-fade-in-up delay-100">
                        Cristian <br /> <span className="font-bold">Pérez</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed animate-fade-in-up delay-200">
                        {t('hey') || "Crafting digital experiences with precision and passion."}
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
                        <a href="#about" className="px-8 py-3 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-all duration-300">
                            About Me
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-gray-300 text-black text-sm uppercase tracking-wider hover:border-black transition-all duration-300">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-end animate-fade-in delay-200">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gray-200 rotate-6 rounded-sm z-0"></div>
                        <img
                            src={ProfilePhoto}
                            alt="Cristian Pérez"
                            className="relative w-[300px] h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700 z-10 shadow-xl rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
