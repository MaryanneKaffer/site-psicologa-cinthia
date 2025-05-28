import { motion, useInView, useScroll, useTransform } from "framer-motion";
import 'swiper/css'
import "swiper/css/pagination";
import { useRef } from "react";
import { Button } from "@heroui/button";
import { SERVICES } from "@/config/services";
import { RiShareBoxLine } from "react-icons/ri";

export default function Services() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    return (
        <section className="w-[100dvw] bg-white relative flex flex-col justify-self-center lgxl:justify-items-between justify-items-center justify-center gap-5 ">
            <div className="sm:max-w-[90vw] max-w-[85vw] self-center bg-[#E2E7E8] rounded-lgxl p-10">
                <motion.div style={{ opacity }}>
                    <h1 className="lg:text-[36px] lgxl:text-[50px] font-bold">Meus serviços</h1>
                    <h2 className="lg:text-[18px] lgxl:text-[24px] mb-[25px]">Ofereço opções de terapia adaptadas às suas necessidades e objetivos. Juntos, podemos trabalhar em prol do seu bem-estar por meio da psicoterapia online.</h2>
                </motion.div>
                <div className="flex lg:gap-[25px] hidden lgxl:flex flex-col">
                    {SERVICES.map((service, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { once: false, margin: "-100px" });

                        return (
                            <motion.div key={index} ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex justify-center items-center lg:h-[250px] lgxl:h-[350px] w-full gap-[50px] bg-[#D7DDD1] rounded-2xl shadow-lg`}>
                                <img className="lg:w-[340px] lg:w-[600px] h-full" src={service.image} />
                                <div className="text-left flex flex-col gap-[27px]">
                                    <p className="lgxl:text-[28px] lg:text-[18px] font-bold">{service.title}</p>
                                    <p className="lg:text-[16px] lgxl:text-[22px] ">{service.content}</p>
                                    <Button radius="md" className={`lg:w-[198px] lg:h-[37px] lgxl:h-[50px] lgxl:w-[250px] lg:text-[16px] lgxl:text-[22px] bg-[#A3B18A] text-white p-0`}>
                                        <RiShareBoxLine />Quero saber mais
                                    </Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div >
                <div className="items-center flex flex-col">
                    <h1 className="lg:text-[36px] lgxl:text-[50px] my-[35px] font-bold">Como funciona na prática?</h1>
                    <div className="bg-[#D7DDD1] rounded-lgxl w-full lg:h-[290px] lgxl:h-[360px] flex">
                        <div className="w-[33%] h-full justify-items-center p-10">
                            <span className="bg-[#A3B18A] rounded-full lg:size-[80px] lgxl:size-[110px] flex justify-center items-center text-white lg:text-[38px] lgxl:text-[50px]">1</span>
                            <h1 className="mb-[11px] mt-[18px] lgxl:text-[28px] lg:text-[18px]">Primeiro contato</h1>
                            <h2 className="lg:text-[16px] lgxl:text-[22px] text-center">Entre em contato no <a href="/" target="_blank" className="underline">WhatsApp</a> para conversarmos mais e compartilhar suas preocupações e dúvidas.</h2>
                        </div>
                        <div className="w-[35%] h-full justify-items-center p-10 border-x-2 border-white">
                            <span className="bg-[#A3B18A] rounded-full lg:size-[80px] lgxl:size-[110px] flex justify-center items-center text-white lg:text-[38px] lgxl:text-[50px]">2</span>
                            <h1 className="mb-[11px] mt-[18px] lgxl:text-[28px] lg:text-[18px]">Agendamento online</h1>
                            <h2 className="lg:text-[16px] lgxl:text-[22px] text-center">Após isso, iremos agendar um horário para darmos início nas sessões de psicoterapia de forma online (vídeo chamadas).</h2>
                        </div>
                        <div className="w-[33%] h-full justify-items-center p-10">
                            <span className="bg-[#A3B18A] rounded-full lg:size-[80px] lgxl:size-[110px] flex justify-center items-center text-white lg:text-[38px] lgxl:text-[50px]">3</span>
                            <h1 className="mb-[11px] mt-[18px] lgxl:text-[28px] lg:text-[18px]">Plano personalizado</h1>
                            <h2 className="lg:text-[16px] lgxl:text-[22px] text-center">O plano de tratamento terapêutico é personalizado e totalmente alinhado aos seus objetivos e necessidades.</h2>
                        </div>
                    </div>
                    <div className="w-full justify-items-center">
                        <p className="lg:text-[16px] lgxl:text-[22px] my-[25px]">Estou aqui para te ouvir e caminhar ao seu lado nesse processo. Quando você sentir que é hora de começar, estarei pronta para te acolher.</p>
                        <Button radius="md" className={`lg:w-[230px] lg:h-[37px] lgxl:h-[50px] lgxl:w-[320px] lg:text-[16px] lgxl:text-[22px] bg-[#A3B18A] text-white mb-[60px] p-0`}>
                            <RiShareBoxLine />Agende uma sessão
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}