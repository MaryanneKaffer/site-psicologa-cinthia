import { navItems } from "@/config/site";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiWhatsappLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className="h-[50dvh] flex flex-col justify-center items-center gap-5 overflow-hidden ">
            <div className="sm:w-[80vw] h-full max-w-[85vw] my-[60px] text-white flex flex-col gap-[10px]">	
                <div className="flex justify-between place-items-center">
                    <img src="/assets/logo.png" alt="logo" className="lg:size-[50px] lgxl:size-[70px] object-contain" />
                    <span>
                        {navItems.map((item, index) => (
                            <a key={index} href={item.href} className="lg:text-[16px] lgxl:text-[20px] ml-[45px]">{item.label}</a>
                        ))}
                    </span>
                </div>
                <div className="flex gap-2 ml-auto mb-[25px]">
                    <a href="/" className=""><MdOutlineMailOutline className="lg:size-[25px] lgxl:size-[25px]" /></a>
                    <a href="/" className=""><PiWhatsappLogo className="lg:size-[25px] lgxl:size-[25px]" /></a>
                    <a href="/" className=""><FaInstagram className="lg:size-[25px] lgxl:size-[25px]" /></a>
                </div>
                <span className="h-[2px] bg-white"></span>
                <div className="flex justify-between mt-[25px]">
                    <p className="lg:text-[16px] lgxl:text-[20px]">©2025 Cinthia Correia - Todos os direitos reservados.</p>
                    <p className="lg:text-[16px] lgxl:text-[20px]">Desenvolvido com ❤️ <a href="https://github.com/MaryanneKaffer" target="_blank">Maryanne Kaffer</a></p>
                </div>
            </div>
        </section>
    )
}