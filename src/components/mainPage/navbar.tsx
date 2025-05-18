import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import { navItems, navMenuItems } from "../../config/site.ts";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [size, setSize] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setSize(window.innerWidth);
    });

    return (
        <>
            {size >= 1024 && (
                <Navbar position="static" className="absolute bg-[#8c947d] top-0 left-0 text-xl sm:flex hidden">
                    <NavbarBrand className="text-xl absolute lg:-left-[18vw]">
                        <p className="cursor-default">LOGO</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-[50px] absolute left-[11vw]" >
                        {navItems.map((item) => (
                            <NavbarItem key={item.label}>
                                <Link color="foreground" href={item.href} className="text-xl text-white relative group">
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full z-0" />
                                </Link>
                            </NavbarItem>
                        ))}
                    </NavbarContent>
                    <NavbarContent >
                        <NavbarItem className="absolute lg:-right-[18vw]">
                            <Button radius="full" className="w-[250px] text-lg bg-[#667561] text-white transition-shadow duration-1000 hover:shadow-lg">Agende sua sessão <FaLongArrowAltRight /></Button>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar >
            )}

            {size < 1024 && (
                <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#8c947d] absolute top-0 left-0 text-xl">
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand>
                            <p className="font-bold text-inherit">LOGO</p>
                        </NavbarBrand>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button radius="full" className="w-[200px] text-sm bg-[#667561] text-white">Agende sua sessão <FaLongArrowAltRight /></Button>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarMenu className="bg-[#8c947d] bg-opacity-70">
                        {navMenuItems.map((item) => (
                            <NavbarMenuItem key={item.label}>
                                <Link
                                    className="w-full text-xl text-white"
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>
            )}
        </>
    );
}