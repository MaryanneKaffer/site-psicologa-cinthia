import { FEEDBACKS } from "@/config/feedbacks";
import { useScroll, useTransform, motion } from "framer-motion";

export default function FeedBacks() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.9, 1], [1, 0.8]);

    const cardsW = ["lg:w-[390px] lg:h-[242px] lgxl:w-[500px] lgxl:h-[282px]", "lg:w-[775px] lg:h-[182px] lgxl:w-[1025px] lgxl:h-[212px]", "lg:w-[390px] lg:h-[204px] lgxl:w-[500px] lgxl:h-[244px]",
        "lg:w-[345px] lg:h-[266px] -mt-[62px] lgxl:w-[475px] lgxl:h-[316px] lgxl:-mt-[71px]", "lg:w-[420px] lg:h-[266px] lg:-mt-[62px] lgxl:w-[540px] lgxl:h-[316px] lgxl:-mt-[71px]"]
    return (
        <motion.div style={{ scale }}>
            <section className="w-[100dvw] h-[100dvh] bg-white rounded-b-xl flex flex-col justify-center items-center gap-5 overflow-hidden ">
                <div className="sm:w-[80vw] h-full max-w-[85vw] mt-[100px]">
                    <motion.div style={{ opacity }} className="w-full mb-[25px]">
                        <h1 className="lg:text-[36px] lgxl:text-[45px] mb-[10px] font-bold">Depoimentos</h1>
                        <h2 className="lg:text-[18px] lgxl:text-[24px] ">Alguns depoimentos daqueles que decidiram transformar suas vidas.</h2>
                    </motion.div>
                    <div className="flex flex-wrap gap-[10px] h-[456px]">
                        {FEEDBACKS.map((feedback, index) => (
                            <div key={index} className={`${cardsW[index]} bg-[#D7DDD1] rounded-xl p-6`}>
                                <div className="flex gap-3 place-items-center">
                                    <img src={feedback.pfp} alt={feedback.author} className="lgxl:size-[60px] lg:size-[50px] rounded-xl border-gray-600  border-2 object-cover" />
                                    <span>
                                        <h1 className="lgxl:text-[22px] lg:text-[18px]">{feedback.author}</h1>
                                        <h2 className="text-gray-600 lg:text-[14px] lgxl:text-[17px]">{feedback.date}</h2>
                                    </span>
                                </div>
                                <p className="lg:text-[16px] lgxl:text-[19px] text-justify lgxl:mt-[14px] lg:mt-[10px] lgxl:leading-normal lg:leading-tight">{feedback.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}