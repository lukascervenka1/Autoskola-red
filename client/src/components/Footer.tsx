import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { SteeringWheelLogo } from "./icons/SteeringWheelLogo";

export function Footer() {
    return (
        <footer className="bg-foreground text-white pt-20 pb-10 border-t border-white/10">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <SteeringWheelLogo className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-bold text-2xl group-hover:text-primary transition-colors">Autoškola RED</span>
                        </Link>
                        <p className="text-white/60 leading-relaxed">
                            Moderní autoškola v Praze 6. <br />
                            Vaše cesta k nezávislosti začíná u nás.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61569570703723" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors" aria-label="Facebook">
                                <span className="font-bold">fb</span>
                            </a>
                            <a href="https://www.instagram.com/autoskola_red/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors" aria-label="Instagram">
                                <span className="font-bold">ig</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Navigace</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/" className="hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Domů</Link></li>
                            <li><Link href="/cenik" className="hover:text-primary transition-colors">Ceník</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Magazín</Link></li>
                            <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
                            <li><Link href="/studenti" className="text-primary hover:text-primary/80 transition-colors font-medium">Pro žáky</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Kontakt</h4>
                        <ul className="space-y-4 text-white/60">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Puškinovo náměstí 681/3<br />160 00 Praha 6</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+420 608 913 000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@autoskola.red</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Otevírací doba</h4>
                        <ul className="space-y-2 text-white/60">
                            <li className="flex justify-between">
                                <span>Po a Čt</span>
                                <span>14:00 - 18:00</span>
                            </li>
                            <li className="flex flex-col text-white/60 mt-2">
                                <span>Ostatní dny:</span>
                                <span className="text-sm opacity-70">Na telefonické domluvě</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>&copy; 2026 Autoškola RED. Všechna práva vyhrazena.</p>
                    <div className="flex gap-8">
                        <Link href="/ochrana-osobnich-udaju" className="hover:text-white transition-colors">Ochrana údajů</Link>
                        <Link href="/obchodni-podminky" className="hover:text-white transition-colors">Obchodní podmínky</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
