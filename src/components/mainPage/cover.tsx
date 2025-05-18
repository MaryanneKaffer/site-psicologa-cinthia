import NavbarComponent from "./navbar";

export default function Cover() {
    return (
        <section className="bg-[#8c947d] w-[100dvw] h-[100dvh] text-white sm:rounded-b-[100px] rounded-b-[50px] px-10 relative flex justify-center text-center overflow-hidden">
            <NavbarComponent />
            <h1 className="cursor-default lg:text-[13vh] text-[12vh] lg:leading-normal leading-[75px] font-ramillasItalic tracking-tight mt-[20vh]">Cinthia <span className="font-bold">Correia</span></h1>
            <img draggable={false} src="/src/assets/coverPicture.png" alt="cover picture" className="sm:h-[80vh] lg:h-[85vh] object-cover absolute -bottom-[10vh] self-center" />
        </section>
    )
}