import NavbarComponent from "./coverNavbar";
import { Button } from "@heroui/button";
import { RiShareBoxLine } from "react-icons/ri";

export default function Cover() {

    return (
        <section className="h-[100dvh] -mb-36 text-white rounded-b-3xl px-10 relative flex justify-center text-center overflow-hidden px-30" >
            <NavbarComponent />
            <div className="sm:max-w-[75vw] max-w-[85vw] flex">
                <div className="flex flex-col lg:w-[500px] lgxl:w-[700px] text-left gap-3 mt-auto mb-60">
                    <div className="flex place-items-center gap-5">
                        <p className="w-[28%] lg:text-[16px] lgxl:text-[22px]">TERAPIA ONLINE</p>
                        <span className="h-[2px] bg-white w-[73.5%]"></span>
                    </div>
                    <h1 className="lgxl:text-7xl lg:text-[48px] font-garamond">
                        Cinthia Caroline Correia, Psicóloga Clínica
                    </h1>
                    <h2 className="lg:text-[16px] lgxl:text-[22px] mt-5">
                        Especialista em Terapia Cognitiva Comportamental, Saúde Mental e Comportamento. Te ajudo construir uma relação mais consciente,
                        leve e verdadeira com você mesmo(a) e com quem está ao seu redor.
                    </h2>
                    <Button radius="md" className={`lg:w-[198px] lg:h-[37px] lgxl:h-[50px] lgxl:w-[250px] lg:text-[16px] lgxl:text-[22px] mt-2 bg-[#A3B18A] text-white p-0`}>
                        <RiShareBoxLine />Agende uma sessão
                    </Button>
                </div>
                <img draggable={false} src="/assets/coverPicture.png" alt="cover picture" className="h-[90%] object-cover mt-44 ml-auto" />
            </div>
        </section>
    )
}