import Link from "next/link";

export default function Navigation() {
    return (
        <header id={'header'} className="fixed top-0 left-0 w-full h-16 text-muted-foreground bg-muted backdrop-blur-lg shadow z-50">
            <nav id={'navigation'} //data-state={open && 'active'}
                 className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
                <div className="font-bold text-lg">
                    <Link
                        href="/"
                        aria-label="home"
                        className="flex items-center space-x-2"
                    >
                        <p className="text-2xl">Next.JS Basic</p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}