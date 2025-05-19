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
        <section className={`fixed z-20 bg-[#8c947d] top-0 left-0 text-xl sm:flex lg:h-[65px] h-[50px] py-5 transition-collors duration-500 lg:px-10 p-2 ${nonTransparentNav ? "bg-[#e7e5e4] text-[#8c947d]" : "bg-transparent text-white"} lg:w-[97vw] md:w-[94vw] w-[90vw] rounded-3xl flex place-items-center mx-5 mt-2`}>
            <div className="lg:text-xl md:text-lg flex justify-self-start">
                <p className="xl:w-[250px] lg:w-[150px] md:w-[70px] w-[30vw] flex justify-self-start px-4 cursor-default">LOGO</p>
            </div>
            <div className="hidden flex md:flex xl:gap-[50px] md:gap-[35px] justify-self-center mx-auto" >
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
                <Button radius="full" className="xl:w-[250px] lg:w-[220] md:w-[150px] text-lg bg-[#667561] md:text-sm lg:text-lg md:flex hidden transition-shadow duration-1000 hover:shadow-lg text-white">Agende sua sessão <FaLongArrowAltRight /></Button>
                <div className="md:hidden md:w-[58vw] w-[56vw] flex gap-2">
                    <Button radius="full" className="ml-auto text-sm bg-[#667561] transition-shadow duration-1000 hover:shadow-lg text-white">Agendamento <FaLongArrowAltRight /></Button>
                    <Button radius="full" className="bg-[#667561] text-white leading-none min-w-[40px] h-[42px]" size="sm" onPress={() => setIsMenuOpen(!isMenuOpen)}><IoIosMenu size={23} /></Button>
                </div>
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
                                        <Link href={item.href} className="xl:text-xl text-xl">
                                            <p className="text-[#8c947d]">{item.label}</p>
                                        </Link>
                                    </div>
                                ))}
                            </ModalBody>
                        </>
                    </ModalContent>
                </Modal>
            )}
        </section >
    );
}