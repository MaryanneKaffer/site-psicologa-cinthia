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
    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    return (
        <section className="w-[100dvw] h-[100dvh] sm:max-w-[90vw] max-w-[85vw] relative flex flex-col justify-self-center xl:justify-items-between justify-items-center justify-center gap-5 ">
            <motion.div style={{ opacity }}>
                <h1 className="lg:text-[36px] xl:text-[50px] font-bold">O que me torna diferente</h1>
                <h2 className="lg:text-[18px] xl:text-[24px]">Aqui, você encontra um espaço de escuta genuína, onde pode se expressar com liberdade, acolhimento e total sigilo. Sem julgamentos, apenas presença e empatia.</h2>
            </motion.div>
            <div className="flex lg:gap-[17px] xl:gap-[30px] hidden xl:flex">
                {CARDS.map((feedback, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: false, margin: "-100px" });

                    return (
                        <motion.div key={index} ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex-col justify-center items-center lg:w-[380px] lg:h-[410px] xl:h-[600px] xl:w-[550px] gap-1 bg-[#D7DDD1] rounded-2xl shadow-lg`}>
                            <img className="w-full xl:h-[350px] xl:w-[550px]" src={feedback.image} />
                            <p className="text-center xl:text-[28px] lg:text-[18px] xl:mx-12 xl:mt-6 font-bold">{feedback.title}</p>
                            <p className="text-center lg:text-[16px] xl:text-[22px] xl:mx-12 xl:mt-3">{feedback.content}</p>
                        </motion.div>
                    );
                })}
            </div >
            <Swiper spaceBetween={0} slidesPerView={1} autoplay={{ delay: 10000 }} modules={[Autoplay, Pagination]} pagination={{ clickable: true }} loop
                className="xl:hidden items-center w-full lg:mt-[2vh] md:mt-0 mt-[1vh]">
                {CARDS.map((feedback, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true, margin: "-100px" });

                    return (
                        <SwiperSlide key={index} className="sm:h-[60vh] h-[70vh] flex justify-center place-items-center p-5 sm:mb-0 mb-6">
                            <motion.div ref={ref} className={`flex-col justify-self-center items-center lg:w-[50vw] md:w-[60vw] gap-1 sm:p-12 p-[10vw] bg-[#A3B18A] bg-opacity-30 rounded-xl shadow-lg`}
                                initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                                <p className="text-justify md:text-[1.8vh] lg:text-md text-sm">"{feedback.content}"</p>
                            </motion.div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <p className="lg:text-[16px] xl:text-[22px] mx-auto mt-2">Talvez você só precise de um lugar onde possa ser ouvida(o) — de verdade. E esse lugar <a href="/" className="underline">começa aqui</a>.</p>
            <Button radius="md" className={`lg:w-[230px] mx-auto lg:h-[37px] xl:h-[50px] xl:w-[320px] lg:text-[16px] xl:text-[22px] bg-[#A3B18A] text-white p-0 mt-2`}>
                <TbHeartSpark />Conheça mais sobre mim
            </Button>
        </section>
    );
}