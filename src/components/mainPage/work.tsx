import { CARDS } from "@/config/work";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import { useRef } from "react";
import { TbHeartSpark } from "react-icons/tb";
import { Button } from "@heroui/button";

export default function work() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    return (
        <motion.div style={{ scale }} className="w-[100dvw] bg-white rounded-t-xl relative flex flex-col justify-self-center lgxl:justify-items-between justify-items-center justify-center gap-5 overflow-hidden ">
            <div className="sm:max-w-[80vw] max-w-[85vw] self-center">
                <motion.div style={{ opacity }}>
                    <h1 className="lg:text-[36px] lgxl:text-[45px] font-bold mt-[100px]">O que me torna diferente</h1>
                    <h2 className="lg:text-[18px] lgxl:text-[24px] mb-[25px]">Aqui, você encontra um espaço de escuta genuína, onde pode se expressar com liberdade, acolhimento e total sigilo. Sem julgamentos, apenas presença e empatia.</h2>
                </motion.div>
                <div className="flex lg:gap-[17px] lgxl:gap-[30px] hidden lg:flex justify-center">
                    {CARDS.map((item, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { once: false, margin: "-100px" });

                        return (
                            <motion.div key={index} ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`flex-col justify-center items-center lg:w-[380px] lg:h-[410px] lgxl:h-[550px] lgxl:w-[500px] gap-1 bg-[#D7DDD1] rounded-2xl shadow-lg`}>
                                <img className="w-full" src={item.image} />
                                <p className="text-center lgxl:text-[24px] lg:text-[18px] lgxl:mx-12 lgxl:mt-6 font-bold">{item.title}</p>
                                <p className="text-center lg:text-[16px] lgxl:text-[20px] lgxl:mx-12 lgxl:mt-3">{item.content}</p>
                            </motion.div>
                        );
                    })}
                </div >
                <Swiper spaceBetween={0} slidesPerView={1} autoplay={{ delay: 10000 }} modules={[Autoplay, Pagination]} pagination={{ clickable: true }} loop
                    className="lg:hidden items-center w-full lg:mt-[2vh] md:mt-0 mt-[1vh]">
                    {CARDS.map((item, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { once: true, margin: "-100px" });

                        return (
                            <SwiperSlide key={index} className="sm:h-[60vh] h-[70vh] flex justify-center place-items-center p-5 sm:mb-0 mb-6">
                                <motion.div ref={ref} className={`flex-col justify-self-center items-center lg:w-[50vw] md:w-[60vw] gap-1 sm:p-12 p-[10vw] bg-[#A3B18A] bg-opacity-30 rounded-lgxl shadow-lg`}
                                    initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                                    <p className="text-justify md:text-[1.8vh] lg:text-md text-sm">"{item.content}"</p>
                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <div className="w-full justify-items-center">
                    <p className="lg:text-[16px] lgxl:text-[20px] my-[25px]">Talvez você só precise de um lugar onde possa ser ouvida(o) — de verdade. E esse lugar <a href="/" className="underline">começa aqui</a>.</p>
                    <Button radius="md" className={`lg:w-[230px] lg:h-[37px] lgxl:h-[45px] lgxl:w-[300px] lg:text-[16px] lgxl:text-[20px] bg-[#A3B18A] text-white mb-[60px] p-0`}>
                        <TbHeartSpark />Conheça mais sobre mim
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}