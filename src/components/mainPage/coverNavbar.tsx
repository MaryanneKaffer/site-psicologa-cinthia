import { Link, Button, Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import { navItems, navMenuItems } from "../../config/site.ts";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={`absolute z-20 bg-[#8c947d] w-full mt-6 sm:max-w-[80vw] max-w-[85vw] justify-self-center text-xl sm:flex lg:h-[65px] h-[50px] transition-collors duration-500 lg:px-4 flex items-center`}>
            <div className="xl:w-[200px] lg:w-[198px] ">
                <img src="/assets/logo.png" className="lg:h-[50px] xl:h-[60px] flex md:px-4 justify-center cursor-default" />
            </div>
            <div className="hidden flex lg:flex xl:gap-[70px] justify-self-center mx-auto" >
                {navItems.map((item) => (
                    <div key={item.label}>
                        <Link color="foreground" href={item.href} className="lg:text-[16px] xl:text-[18px] relative group">
                            <p className="text-white">{item.label}</p>
                            <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full z-0`} />
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <Button radius="md" className={`lg:w-[198px] lg:h-[37px] xl:h-[45px] xl:w-[200px] lg:text-[16px] xl:text-[18px] lg:flex hidden bg-[#A3B18A] text-white`}>Entrar em contato</Button>
                <button className="bg-transparent text-white lg:hidden leading-none transition transform active:scale-85 flex place-self-center" onClick={() => setIsMenuOpen(!isMenuOpen)}><IoIosMenu size={30} /></button>
            </div>
            {isMenuOpen && (
                <Modal isOpen={isMenuOpen} radius="none" onOpenChange={() => setIsMenuOpen(false)} className="font-questrial !p-0 !m-0" hideCloseButton>
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