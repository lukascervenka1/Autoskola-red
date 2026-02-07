
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { SteeringWheelLogo } from "@/components/icons/SteeringWheelLogo";
import { useState } from "react";
import { Link } from "wouter";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#kurzy", label: "Kurzy" },
    { href: "/cenik", label: "Ceník" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
    { href: "/studenti", label: "Pro žáky" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] border-l-border/50 glass">
        <SheetHeader className="mb-8 text-left">
          <SheetTitle className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary/30">
              <SteeringWheelLogo className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl">Autoškola RED</span>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                onClick={(e) => {
                  setOpen(false);
                  if (link.href.startsWith('/#') && window.location.pathname === '/') {
                    e.preventDefault();
                    const id = link.href.substring(2);
                    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                {link.label}
              </a>
            </Link>
          ))}
          <div className="pt-6 mt-6 border-t border-border">
            <Button asChild className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all text-lg h-12">
              <Link href="/registrace" onClick={() => setOpen(false)}>
                Přihlásit se do kurzu
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
