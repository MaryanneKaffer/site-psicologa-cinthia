import { Link, Button, Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { navItems, navMenuItems } from "../../config/site.ts";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className={`fixed z-10 bg-[#8c947d] top-0 left-0 text-xl sm:flex lg:h-[65px] h-[50px] py-5 transition-collors duration-500 lg:px-10 p-2 ${scrolled ? "bg-[#e7e5e4] text-[#8c947d]" : "bg-transparent text-white"} lg:w-[97vw] w-[90vw] rounded-3xl flex place-items-center mx-5 mt-2`}>
            <div className="lg:text-xl flex justify-self-start">
                <p className="xl:w-[250px] lg:w-[220px] w-[30vw] flex justify-self-start px-4 cursor-default">LOGO</p>
            </div>
            <div className="hidden flex sm:flex gap-[50px] justify-self-center mx-auto" >
                {navItems.map((item) => (
                    <div key={item.label}>
                        <Link color="foreground" href={item.href} className="xl:text-xl text-lg  relative group">
                            <p className={`${scrolled ? "text-[#8c947d]" : "text-white"}`}>{item.label}</p>
                            <span className={`absolute bottom-0 left-0 w-0 h-[2px] ${scrolled ? "bg-[#8c947d]" : "bg-white"} transition-all duration-300 group-hover:w-full z-0`} />
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <Button radius="full" className="xl:w-[250px] lg:w-[220px] text-lg bg-[#667561] lg:flex hidden transition-shadow duration-1000 hover:shadow-lg text-white">Agende sua sessão <FaLongArrowAltRight /></Button>
                <div className="lg:hidden w-[70vw] flex place-items-center gap-2">
                    <Button radius="full" className="text-sm bg-[#667561] transition-shadow duration-1000 hover:shadow-lg text-white">Agendamento <FaLongArrowAltRight /></Button>
                    <Button radius="full" className="bg-[#667561] text-white leading-none min-w-[40px] h-[42px]" size="sm" onPress={() => setIsMenuOpen(!isMenuOpen)}><IoIosMenu size={23} /></Button>
                </div>
            </div>
            {isMenuOpen && (
                <Modal isOpen={isMenuOpen} radius="none" onOpenChange={() => setIsMenuOpen(false)} className="min-w-[100dvw] min-h-[100dvh] font-ramillas" hideCloseButton>
                    <ModalContent>
                        <>
                            <ModalHeader className="flex justify-between items-center">
                                <p className="text-2xl">LOGO</p>
                                <Button radius="full" className="text-[#667561] bg-transparent leading-none min-w-[50px]" onPress={() => setIsMenuOpen(false)}><IoClose size={30} /></Button>
                            </ModalHeader>
                            <ModalBody>
                                {navMenuItems.map((item) => (
                                    <div key={item.label}>
                                        <Link color="foreground" href={item.href} className="xl:text-xl text-xl">
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