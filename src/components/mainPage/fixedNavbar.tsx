import { navItems } from "@/config/site";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FixedNavbar() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.02, 0.06], [0, 1]);
    return (
        <motion.div style={{ opacity }}>
            <Navbar className="fixed">
                <NavbarBrand>
                    <img src="/assets/logo.png" alt="logo" className="w-[60px]" />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-12" justify="center">
                    {navItems.map((item) => (
                        <NavbarItem>
                            <Link
                                key={item.href}
                                href={item.href}
                                color="foreground"
                                className="hover:text-[#8c947d] relative group lg:text-[16px] xl:text-[18px]"
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-[2px] bg-[#8c947d] transition-all duration-300 group-hover:w-full z-0`} />
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button radius="md" className={`lg:w-[198px] lg:h-[37px] xl:h-[42px] xl:w-[200px] lg:text-[16px] xl:text-[18px] lg:flex hidden bg-[#A3B18A] text-white`}>Entrar em contato</Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </motion.div>
    );
}
