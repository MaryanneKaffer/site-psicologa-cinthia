import AboutMe from "@/components/mainPage/aboutMe";
import Cover from "@/components/mainPage/cover";
import FeedBacks from "@/components/mainPage/feedBacks";
import NavbarComponent from "@/components/mainPage/navbar";
import Quote from "@/components/mainPage/quote";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(Number(window.scrollY))
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section className="font-ramillas bg-[#e7e5e4] overflow-x-hidden overflow-y-hidden scroll-smooth">
      <NavbarComponent scrolled={scroll} />
      <Cover />
      <AboutMe />
      <Quote />
      <FeedBacks />
    </section>
  );
}