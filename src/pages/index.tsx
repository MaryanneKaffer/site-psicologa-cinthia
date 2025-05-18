
import AboutMe from "@/components/mainPage/aboutMe";
import Cover from "@/components/mainPage/cover";

export default function IndexPage() {
  return (
    <section className="font-ramillas bg-[#e7e5e4] overflow-x-hidden overflow-y-hidden scroll-smooth">
      <Cover />
      <AboutMe />
    </section>
  );
}
