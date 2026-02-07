import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SteeringWheelLogo } from "@/components/icons/SteeringWheelLogo";
import { MobileNav } from "@/components/MobileNav";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-sm transition-all duration-300 border-b border-gray-100">
            <div className="container flex items-center justify-between h-20">
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30 rotate-3 hover:rotate-0 transition-transform duration-300">
                            <SteeringWheelLogo className="w-7 h-7 text-white" />
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-foreground">
                            Autoškola <span className="text-primary">RED</span>
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="/#kurzy"
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                document.getElementById('kurzy')?.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                        Kurzy
                    </a>
                    <Link href="/cenik">
                        <a className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            Ceník
                        </a>
                    </Link>

                    <Link href="/blog">
                        <a className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            Blog
                        </a>
                    </Link>
                    <Link href="/kontakt">
                        <a className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                            Kontakt
                        </a>
                    </Link>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6 cursor-pointer">
                        <Link href="/registrace">
                            Přihlásit se do kurzu
                        </Link>
                    </Button>
                </div>

                <MobileNav />
            </div>
        </nav>
    );
}
