import { motion, useScroll, useTransform } from "framer-motion";


export default function Cover() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

    return (
        <motion.div style={{ scale }}>
            <section className="bg-[#8c947d] h-[100dvh] text-white sm:rounded-b-[100px] rounded-b-[50px] px-10 relative flex justify-center text-center overflow-hidden px-30" >
                <div className="sm:max-w-[70vw] max-w-[85vw] flex flex-col">
                    <h1 className=" lg:text-[13vh] text-[12vh] xl:leading-normal leading-[75px] font-ramillasItalic tracking-tight xl:mt-[20vh] mt-[16vh]">Cinthia <span className="font-bold">Correia</span></h1>
                    <img draggable={false} src="/assets/coverPicture.png" alt="cover picture" className="sm:h-[80vh] lg:h-[85vh] object-cover absolute -bottom-[10vh] self-center" />
                </div>
            </section>
        </motion.div>
    )
}