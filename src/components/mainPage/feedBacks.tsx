import { FEEDBACKS } from "@/config/feedbackContent";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css/pagination";
import { useRef } from "react";

export default function FeedBacks() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

    return (
        <section className="w-[100dvw] h-[100dvh] sm:max-w-[70vw] max-w-[85vw] relative flex flex-col justify-self-center xl:justify-items-between justify-items-center justify-center">
            <motion.div style={{ opacity }}>
                <h1 className="lgxl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-[4vh] xl:text-left text-center md:leading-normal leading-[30px] font-ramillasItalic">
                    Relatos de quem escolheu <span className="text-[#667561]">cuidar</span> de <span className="text-[#667561]">si</span>
                </h1>
            </motion.div>
            <div className="flex gap-[1vw] mt-[9vh] hidden xl:flex ">
                {FEEDBACKS.map((feedback, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: false, margin: "-100px" });

                    return (
                        <motion.div key={index} ref={ref} initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex-col justify-center items-center w-[30vw] gap-1 p-12 ${feedback.cardBG} ${feedback.textColor} rounded-xl shadow-lg`}>
                            <p className="text-justify lgxl:text-[1.8vh] xl:text-[1.7vh]">"{feedback.content}"</p>
                            <p className="ml-auto text-lg font-bold">{feedback.author}</p>
                        </motion.div>
                    );
                })}
            </div >
            <Swiper spaceBetween={0} slidesPerView={1} autoplay={{ delay: 10000 }} modules={[Autoplay, Pagination]} pagination={{ clickable: true }} loop
                className="xl:hidden items-center w-full lg:mt-[2vh] md:mt-0 mt-[1vh]">
                {FEEDBACKS.map((feedback, index) => {
                    const ref = useRef(null);
                    const isInView = useInView(ref, { once: true, margin: "-100px" });

                    return (
                        <SwiperSlide key={index} className="sm:h-[60vh] h-[70vh] flex justify-center place-items-center p-5 sm:mb-0 mb-6">
                            <motion.div ref={ref} className={`flex-col justify-self-center items-center lg:w-[50vw] md:w-[60vw] gap-1 sm:p-12 p-[10vw] ${feedback.cardBG} ${feedback.textColor} rounded-xl shadow-lg`}
                                initial={{ opacity: 0, y: 100 }} animate={isInView ? { opacity: 1, y: 0 } : {}} whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
                                <p className="text-justify md:text-[1.8vh] lg:text-md text-sm">"{feedback.content}"</p>
                                <p className="lg:text-lg font-bold text-end">{feedback.author}</p>
                            </motion.div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}