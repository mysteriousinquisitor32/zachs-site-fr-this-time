

function NavItem({ children, activePage }: { children: React.ReactNode, activePage: string }) {
    const isActive = children == activePage
    const isHome = children == "Home"
    return (
        <a className="flex h-full w-full items-center justify-center
         font-bold hover:bg-gray-600 z-5"
         href={isHome ? "/" : "/" + children}>
            <text href={isHome ? "/" : "/" + children}  className={isActive ? "underline underline-offset-4 decoration-2" : ""}>{children}</text>
        </a>
    );
}



export default function Nav({ activePage }: { activePage: string }) {
    return (
        <nav id="nav" className="flex fixed top-0 left-0 flex-col w-25 h-32 
        items-center bg-gray-700/50 text-white list-none rounded-br-lg
        opacity-60 backdrop-blur-[2rem] z-999
        transition-opacity
        duration-150 
        hover:opacity-95
        "> {/* idk what lg is btw */}
            <NavItem activePage={activePage}>Home</NavItem>
            <NavItem activePage={activePage}>Blog</NavItem>
            <NavItem activePage={activePage}>About</NavItem>
            <div className="h-1/8! w-full"></div>
        </nav>
    );
}