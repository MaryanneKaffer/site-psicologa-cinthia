export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col font-ramillas cursor-default bg-[#e7e5e4] scroll-smooth overflow-y-hidden">
            <main className="grid w-full">
                {children}
            </main>
        </div>
    );
}
