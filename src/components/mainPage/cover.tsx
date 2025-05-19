import { motion } from "framer-motion";

export default function Cover() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#8c947d] w-[100dvw] h-[100dvh] text-white sm:rounded-b-[100px] rounded-b-[50px] px-10 relative flex justify-center text-center overflow-hidden">
            <h1 className="cursor-default lg:text-[13vh] text-[12vh] lg:leading-normal leading-[75px] font-ramillasItalic tracking-tight mt-[20vh]">Cinthia <span className="font-bold">Correia</span></h1>
            <img draggable={false} src="/assets/coverPicture.png" alt="cover picture" className="sm:h-[80vh] lg:h-[85vh] object-cover absolute -bottom-[10vh] self-center" />
        </motion.div>
    )
}