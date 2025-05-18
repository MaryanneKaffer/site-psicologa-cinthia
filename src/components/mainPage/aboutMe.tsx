"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section className="w-[100dvw] lg:h-[100dvh] h-[125dvh] lg:mt-0 mt-8 text-white sm:rounded-b-[100px] rounded-b-[50px] relative flex lg:justify-center lg:place-items-center lg:gap-[80px] gap-[50px] relative">
            <img src="/assets/aboutMePicture.png" alt="Cinthia Correia" className="rounded-[50px] hover:scale-105 transition-all duration-500 ease-in-out xl:h-[70vh] lg:h-[60vh]
            lg:static h-[50vh] absolute left-2 top-10 xl:h-[74vh] sm:w-[60vh] h-[40vh] object-cover" />
            <motion.div className="flex flex-col gap-[4vh] cursor-default" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                <h1 className="text-[5vh] xl:text-[6.5vh] font-ramillasItalic lg:text-black tracking-tight lg:static absolute top-[38vh] right-5">
                    Sobre <span className="text-[#667561]">mim</span>
                </h1>
                <h2 className="text-black lg:w-[30vw] xl:text-[1.98vh] lg:text-[1.50vh] flex flex-col gap-[18px] tracking-tight text-justify leading-tight lg:bg-transparent lg:rounded-none lg:p-0 lg:shadow-none
                lg:static absolute top-[45vh] right-5 w-[90vw] p-3 text-[1.9vh] bg-white rounded-xl shadow-xl">
                    <p>Desde que me lembro, sempre fui fascinada pelo que nos move — pelas razões por trás de cada escolha, comportamento e emoção. Essa curiosidade pela essência do ser humano me levou à psicologia: um caminho onde posso mergulhar nas profundezas do que significa ser, sentir e viver com verdade.</p>

                    <p>Hoje, minha escolha diária é criar espaço para que cada pessoa possa se reconectar com sua verdade e seguir com mais clareza. — especialmente aquelas que convivem com a ansiedade e o peso dos dias — ajudando-as a encontrar um caminho mais leve, mais verdadeiro e possível de viver.</p>

                    <p>Aqui, a intenção é criar um espaço de conexão real entre você e sua essência. Porque acredito que a psicologia vai além de aliviar o sofrimento: é sobre abrir caminhos para que você possa se encontrar com sua própria verdade e construir uma forma de viver que tenha sentido.</p>

                    <p>Cada jornada terapêutica é única, e meu papel é caminhar ao seu lado, te ajudando a enxergar possibilidades, ressignificar histórias e construir escolhas que te aproximem de si.</p>

                    <p>Acredito que viver bem não é sobre perfeição, mas sobre presença, acolhimento e consciência. E quando nos damos essa chance, começamos a viver de um jeito mais leve — e mais nosso.</p>
                </h2>
            </motion.div>
        </section>
    );
}