import  { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MeltEffectProps {
    title: string;
    }


const MeltEffect = ({ title }: MeltEffectProps) => {
  const textoRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0 });
  const offset = useRef({ x: 0, y: 0 }); // Almacenar el offset inicial entre el cursor y la posición del texto

  useEffect(() => {
    const texto = textoRef.current as unknown as HTMLElement;

    const onMouseEnter = (e: MouseEvent) => {
      // Al entrar, establecemos la posición inicial y el offset respecto al cursor
      const { left, top } = texto.getBoundingClientRect();
      startPos.current = { x: left + window.scrollX, y: top + window.scrollY };
      
      offset.current = {
        x: e.clientX - startPos.current.x,
        y: e.clientY - startPos.current.y,
      };

      document.addEventListener('mousemove', onMouseMove);
    };

    const onMouseMove = (e : MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const newX = mouseX - offset.current.x - startPos.current.x;
      const newY = mouseY - offset.current.y - startPos.current.y;
      
      gsap.set(texto, { x: newX, y: newY });

    };

    const onMouseLeave = () => {
      document.removeEventListener('mousemove', onMouseMove);
      // Devolver el texto a su posición inicial cuando el cursor sale del texto
      gsap.to(texto, { x: 0, y: 0, scale: 1, ease: "power2.out", duration: 0.5 });
    };

    texto.addEventListener('mouseenter', onMouseEnter);
    texto.addEventListener('mouseleave', onMouseLeave);

    return () => {
      texto.removeEventListener('mouseenter', onMouseEnter);
      texto.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={textoRef} className='uppercase  bg-[#ffffff8a] text-[#3a3a3a] rounded-md p-5 text-xl absolute transform -translate-x-1/2 -translate-y-1/2'>
      {title}
    </div>
  );
};

export default MeltEffect;
