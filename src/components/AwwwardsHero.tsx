import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useTranslation } from "react-i18next";
import gsap from 'gsap';

export interface HeroRef {
    leave: (duration: number) => Promise<void>;
    enter: () => Promise<void>;
}

interface HeroProps {
    onHover?: () => void;
    onLeave?: () => void;
}

const AwwwardsHero = forwardRef<HeroRef, HeroProps>((props, ref) => {
    const { t } = useTranslation();

    const titleRef1 = useRef<HTMLHeadingElement>(null);
    const titleRef2 = useRef<HTMLHeadingElement>(null);
    const ghostRef1 = useRef<HTMLHeadingElement>(null);
    const ghostRef2 = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useImperativeHandle(ref, () => ({
        leave: (duration: number) => {
            return new Promise<void>((resolve) => {
                const tl = gsap.timeline({ onComplete: resolve });
                const durSeconds = duration / 1000;

                tl.fromTo([ghostRef1.current, ghostRef2.current],
                    { x: 0, opacity: 0, filter: "blur(0px)" },
                    {
                        x: 100,
                        opacity: 0.4,
                        filter: "blur(10px)",
                        duration: durSeconds * 0.8,
                        ease: "power2.out",
                        stagger: 0.05
                    }, 0);

                tl.to([titleRef1.current, titleRef2.current], {
                    skewX: -10,
                    x: -100,
                    opacity: 0,
                    duration: durSeconds,
                    ease: "power2.inOut"
                }, 0);

                tl.to(subtitleRef.current, {
                    x: -150,
                    opacity: 0,
                    duration: durSeconds * 0.8,
                    ease: "power2.inOut"
                }, 0);
            });
        },
        enter: () => {
            return new Promise<void>((resolve) => {
                const tl = gsap.timeline({ onComplete: resolve });
                tl.to([titleRef1.current, titleRef2.current], {
                    skewX: 0, x: 0, opacity: 1, duration: 1.2, ease: "power4.out"
                }, 0);
                tl.to(subtitleRef.current, { x: 0, opacity: 1, duration: 1 }, 0.2);
                gsap.set([ghostRef1.current, ghostRef2.current], { opacity: 0, x: 0 });
            });
        }
    }));

    useEffect(() => {
        const tl = gsap.timeline();
        gsap.set([titleRef1.current, titleRef2.current], { y: 200, skewY: 5, opacity: 0 });
        gsap.set(subtitleRef.current, { x: -50, opacity: 0 });
        gsap.set([ghostRef1.current, ghostRef2.current], { opacity: 0 });

        tl.to(subtitleRef.current, { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
            .to([titleRef1.current, titleRef2.current], {
                y: 0, skewY: 0, opacity: 1, duration: 1.4, ease: "power4.out", stagger: 0.2
            }, "-=0.6");
    }, []);

    const stroke = "[-webkit-text-stroke:3px_black] lg:[-webkit-text-stroke:5px_black]";

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-transparent text-black overflow-hidden pt-20">
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 z-10 relative">
                <div className="w-full mt-12 lg:mt-0 flex flex-col justify-center">
                    <p ref={subtitleRef} className="text-sm font-semibold uppercase tracking-[0.4em] mb-12 text-black/60">
                        {t('headerDescription') || "Frontend Developer"}
                    </p>

                    <div
                        className="flex flex-col items-start w-fit relative z-10"
                        onMouseEnter={props.onHover}
                        onMouseLeave={props.onLeave}
                    >
                        <div className="mb-[-2vw] pb-4 flex relative group">
                            <h1 ref={ghostRef1} className={`absolute top-0 left-0 text-[14vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-black/10 pointer-events-none z-10 ${stroke}`}>
                                Cristian
                            </h1>
                            <h1 ref={titleRef1} className={`relative text-[14vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-black origin-bottom z-20 flex ${stroke}`}>
                                Cristian
                            </h1>
                        </div>

                        <div className="pb-4 ml-[5vw] lg:ml-[10vw] flex relative group">
                            <h1 ref={ghostRef2} className={`absolute top-0 left-0 text-[14vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-black/10 pointer-events-none z-10 ${stroke}`}>
                                Pérez
                            </h1>
                            <h1 ref={titleRef2} className={`relative text-[14vw] lg:text-[11vw] font-black leading-[0.8] tracking-tighter uppercase text-black lg:text-black origin-bottom z-20 flex ${stroke}`}>
                                Pérez
                            </h1>
                        </div>
                    </div>

                    <div className="absolute bottom-10 right-12 flex items-center gap-4 animate-bounce opacity-40">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll to Explore</span>
                        <div className="w-8 h-[1px] bg-black"></div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default AwwwardsHero;
