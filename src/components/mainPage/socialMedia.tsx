import { Button } from "@heroui/button";
import { useScroll, useTransform, motion } from "framer-motion";

export default function SocialMedia() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.9, 1], [1, 0.8]);

    return (
        <motion.div style={{ scale }}>
            <section className="w-[100dvw] h-[100dvh] bg-white rounded-b-xl place-items-center gap-5 overflow-hidden ">
                <div className="sm:w-[80vw] h-full max-w-[85vw] mt-[100px] place-items-center">
                    <div className="flex flex-col gap-5 bg-[#D7DDD1] rounded-xl lg:p-[33px] lgxl:p-[40px] lg:h-[570px] w-auto lgxl:h-[670px]">
                        <div className="flex place-items-center gap-[38px]">
                            <img src="/assets/pfp.png" alt="Profile Picture" className="lg:size-[130px] lgxl:size-[150px] rounded-full border-1" />
                            <div className="flex flex-col leading-tight lg:text-[16px] lgxl:text-[19px]">
                                <p>@psicinthiacaroline</p>
                                <span className="flex lg:gap-[37px] lgxl:gap-[47px] lg:my-[16px] lgxl:my-[22px]">
                                    <p><span className="font-bold">106</span> posts</p>
                                    <p><span className="font-bold">2,313</span> followers</p>
                                    <p><span className="font-bold">327</span> following</p>
                                </span>
                                <p className="font-bold">Psicóloga Cinthia | Ansiedade e Rotina | Online</p>
                                <p>Compartilho minha verdade, sentimentos e essência. </p>
                            </div>
                            <div className="flex gap-3 ml-auto mb-auto">
                                <a href="https://www.instagram.com/psicinthiacaroline/" target="_blank" rel="noopener noreferrer">
                                    <Button radius="md" className="lg:w-[100px] lg:h-[37px] xl:h-[42px] xl:w-[120px] lg:text-[16px] xl:text-[18px] bg-[#A3B18A] text-white">Follow</Button>
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <Button radius="md" className="lg:w-[100px] lg:h-[37px] xl:h-[42px] xl:w-[120px] lg:text-[16px] xl:text-[18px] bg-[#A3B18A] text-white">Message</Button>
                                </a>
                            </div>
                        </div>
                        <div className="flex lg:gap-[16px] lgxl:gap-[20px] mt-auto">
                            <img src="/assets/post1.png" alt="Post 1" className="lg:w-[285px] lg:h-[318px] lgxl:w-[330px] lgxl:h-[400px] shadow-md object-cover" />
                            <img src="/assets/post2.png" alt="Post 2" className="lg:w-[285px] lg:h-[318px] lgxl:w-[330px] lgxl:h-[400px] shadow-md object-cover" />
                            <img src="/assets/post3.png" alt="Post 3" className="lg:w-[285px] lg:h-[318px] lgxl:w-[330px] lgxl:h-[400px] shadow-md object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}