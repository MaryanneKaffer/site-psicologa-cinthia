"use client";
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react";

export default function AboutMe() {
    const [isDesktop, setIsDesktop] = useState(false);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.7], [0.8, 1, 0.8]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDesktop(window.innerWidth >= 1024); 
        }
    }, []);

    return (
        <section className="lg:h-[110dvh] sm:h-[110dvh] h-[125vh] sm:max-w-[70vw] max-w-[85vw] w-full lg:mt-0 mt-8 text-white relative flex justify-self-center lg:place-items-center relative">
            <motion.div className="justify-between flex lgxl:gap-[3.5vw] lg:gap-[3vw]" style={isDesktop ? { opacity, scale }: {}}>
                <img src="/assets/aboutMePicture.png" alt="Cinthia Correia" className="rounded-xl hover:scale-105 transition-all duration-500 ease-in-out
                    lg:static xl:h-[70vh] lg:w-[30vw] lg:h-[60vh] lgxl:w-auto sm:w-[50vw] md:w-[50vw] w-[65vw] absolute left-0 top-10 object-cover" />
                <div className="flex flex-col lgxl:gap-[3.5vh] lg:gap-[0.6vh] ">
                    <h1 className="text-[5vh] xl:text-[6.5vh] font-garamond md:text-black tracking-tight lg:static absolute sm:top-[38vh] top-[31vh] right-0">
                        Sobre <span className="text-[#667561]">mim</span>
                    </h1>
                    <h2 className="text-black xl:text-[1.98vh] lg:text-[1.50vh] flex flex-col gap-[18px] tracking-tight text-justify leading-tight lg:bg-transparent lg:rounded-none lg:p-0 lg:shadow-none
                         lg:static absolute sm:top-[44vh] top-[38vh] left-0 sm:left-0 right-[7.5vw] md:w-[100%] w-[85vw] lg:w-auto md:w-fit p-3 text-[1.9vh] bg-white rounded-xl shadow-xl">
                        <p>Desde que me lembro, sempre fui fascinada pelo que nos move — pelas razões por trás de cada escolha, comportamento e emoção. Essa curiosidade pela essência do ser humano me levou à psicologia: um caminho onde posso mergulhar nas profundezas do que significa ser, sentir e viver com verdade.</p>

                        <p>Hoje, minha escolha diária é criar espaço para que cada pessoa possa se reconectar com sua verdade e seguir com mais clareza. — especialmente aquelas que convivem com a ansiedade e o peso dos dias — ajudando-as a encontrar um caminho mais leve, mais verdadeiro e possível de viver.</p>

                        <p>Aqui, a intenção é criar um espaço de conexão real entre você e sua essência. Porque acredito que a psicologia vai além de aliviar o sofrimento: é sobre abrir caminhos para que você possa se encontrar com sua própria verdade e construir uma forma de viver que tenha sentido.</p>

                        <p>Cada jornada terapêutica é única, e meu papel é caminhar ao seu lado, te ajudando a enxergar possibilidades, ressignificar histórias e construir escolhas que te aproximem de si.</p>

                        <p>Acredito que viver bem não é sobre perfeição, mas sobre presença, acolhimento e consciência. E quando nos damos essa chance, começamos a viver de um jeito mais leve — e mais nosso.</p>
                    </h2>
                </div>
            </motion.div>
        </section>
    );
}