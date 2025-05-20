import { motion, useScroll, useTransform } from "framer-motion";

export default function Quote() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

    return (
        <motion.div style={{ opacity }}>
            <section className="bg-[#667561] h-[110dvh] text-white relative flex flex-col overflow-hidden sm:justify-center items-center ">
                <div className="flex flex-col sm:max-w-[70vw] max-w-[85vw]" >
                    <h1 className="xl:text-6xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl sm:leading-normal leading-[25px] font-ramillasItalic text-left sm:mt-0 mt-20">O que poderia florescer em você se existisse um espaço só seu — para respirar, se ouvir e finalmente se cuidar como merece?</h1>
                    <h2 className="flex flex-col xl:text-2xl lg:text-xl text-md text-left sm:mt-10 mt-8 lg:gap-[20px] gap-[18px] md:w-[70vw] z-10 sm:my-[18vh] sm:leading-normal leading-[20px]">
                        <p>Talvez você sinta que algo dentro de você precisa de atenção, mas ainda não sabe como dar esse primeiro passo. Talvez já tenha tentado dar conta de tudo sozinha, silenciado emoções, seguido no automático.</p>

                        <p>Mas há um momento em que o corpo e a mente pedem <span className="font-bold">pausa</span>, cuidado, pedem <span className="font-bold">mudança</span>.</p>

                        <p>A verdade é que ninguém nos prepara para lidar com a ansiedade, o peso da rotina ou a pressão de ser forte o tempo todo.</p>

                        <p>Mas existe um caminho mais leve. Um caminho possível. Um processo que não é sobre perfeição, e sim sobre <span className="font-bold">acolhimento, clareza e liberdade</span>.</p>

                        <p>Aqui, você encontra um espaço seguro para ser ouvida, compreendida e respeitada no seu tempo. Sem pressa. Sem julgamentos.</p>

                        <p>Só presença, escuta e o apoio necessário para que você se reconecte com <span className="font-bold">quem realmente é</span>.</p>
                    </h2>
                </div>
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="md:h-[25vh] w-full absolute left-0 -bottom-10 bg-[#667561]"
                >
                    <path
                        d="M0.00,49.98 C150.00,150.00 349.87,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        className="fill-[#e7e5e4] "
                    ></path>
                </svg>
            </section>
        </motion.div>
    )
}