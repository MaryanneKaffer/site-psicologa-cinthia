import { Link, Button, Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { navItems, navMenuItems } from "../../config/site.ts";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function NavbarComponent({ scrolled }: { scrolled: number }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [nonTransparentNav, setNonTransparentNav] = useState(false);

    useEffect(() => {
        if (scrolled < 200) { setNonTransparentNav(false) }
        else if (scrolled > 2400) { setNonTransparentNav(true) }
        else if (scrolled > 2000 && window.innerWidth > 425) { setNonTransparentNav(false) }
        else if (scrolled > 200) { setNonTransparentNav(true) }
    }, [scrolled]);

    return (
        <nav className={`fixed z-20 bg-[#8c947d] w-full sm:max-w-[70vw] max-w-[85vw] top-3 justify-self-center text-xl sm:flex lg:h-[65px] h-[50px] transition-collors duration-500 lg:px-4 ${nonTransparentNav ? "bg-[#e7e5e4] text-[#8c947d]" : "bg-transparent text-white"} rounded-full flex justify-between items-center px-6`}>
            <div className="lg:text-xl md:text-lg">
                <p className="xl:w-[13vw] flex md:px-4 justify-center cursor-default">LOGO</p>
            </div>
            <div className="hidden flex lg:flex xl:gap-[50px] md:gap-[20px] justify-self-center mx-auto" >
                {navItems.map((item) => (
                    <div key={item.label}>
                        <Link color="foreground" href={item.href} className="xl:text-xl lg:text-lg md:text-md relative group">
                            <p className={`${nonTransparentNav ? "text-[#8c947d]" : "text-white"}`}>{item.label}</p>
                            <span className={`absolute bottom-0 left-0 w-0 h-[2px] ${nonTransparentNav ? "bg-[#8c947d]" : "bg-white"} transition-all duration-300 group-hover:w-full z-0`} />
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <Button radius="full" className={`xl:w-[13vw] transition-collors text-lg ${nonTransparentNav ? "bg-[#667561] text-white" : "bg-white text-[#667561]"} md:text-sm lg:text-[15px] xl:text-lg lg:flex hidden`}><span className="xl:flex gap-3 place-items-center hidden">Agende sua sessão <FaLongArrowAltRight /></span><span className="xl:hidden">Agendamento</span></Button>
                <button className="bg-transparent text-white lg:hidden leading-none transition transform active:scale-85 flex place-self-center" onClick={() => setIsMenuOpen(!isMenuOpen)}><IoIosMenu size={30} className={`${nonTransparentNav ? "text-[#667561]" : "text-white"}`} /></button>
            </div>
            {isMenuOpen && (
                <Modal isOpen={isMenuOpen} radius="none" onOpenChange={() => setIsMenuOpen(false)} className="font-ramillas !p-0 !m-0" hideCloseButton>
                    <ModalContent className="w-full h-full">
                        <>
                            <ModalHeader className="flex justify-between items-center">
                                <p className="text-2xl">LOGO</p>
                                <Button radius="full" className="text-[#667561] bg-transparent leading-none min-w-[50px]" onPress={() => setIsMenuOpen(false)}><IoClose size={30} /></Button>
                            </ModalHeader>
                            <ModalBody>
                                {navMenuItems.map((item) => (
                                    <div key={item.label}>
                                        <Link href={item.href} className="text-xl">
                                            <p className="text-[#8c947d]">{item.label}</p>
                                        </Link>
                                    </div>
                                ))}
                                <Button radius="full" className="bg-[#667561] text-white text-lg mt-auto mb-5">Agende sua sessão <FaLongArrowAltRight /></Button>
                            </ModalBody>
                        </>
                    </ModalContent>
                </Modal>
            )}
        </nav >
    );
}