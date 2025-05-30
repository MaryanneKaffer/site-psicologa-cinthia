import Footer from "@/components/footer";
import FixedNavbar from "@/components/mainPage/fixedNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col font-questrial cursor-default bg-[#8c947d] scroll-smooth overflow-hidden">
            <FixedNavbar />
            <main className="grid w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
