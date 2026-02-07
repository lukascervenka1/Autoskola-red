import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-white pt-20 pb-10 border-t border-white/10">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-white">
                                AR
                            </div>
                            <span className="font-bold text-2xl">Autoškola RED</span>
                        </div>
                        <p className="text-white/60 leading-relaxed">
                            Moderní autoškola v Praze 6. <br />
                            Vaše cesta k nezávislosti začíná u nás.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons placeholders */}
                            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">
                                <span className="font-bold">fb</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">
                                <span className="font-bold">ig</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Navigace</h4>
                        <ul className="space-y-4 text-white/60">
                            <li><Link href="/cenik"><a className="hover:text-primary transition-colors">Ceník</a></Link></li>
                            <li><Link href="/#instruktori"><a className="hover:text-primary transition-colors">Náš tým</a></Link></li>
                            <li><Link href="/#blog"><a className="hover:text-primary transition-colors">Magazín</a></Link></li>
                            <li><Link href="/kontakt"><a className="hover:text-primary transition-colors">Kontakt</a></Link></li>
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
                                <span>+420 777 888 999</span>
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
                                <span>Po - Pá</span>
                                <span>8:00 - 18:00</span>
                            </li>
                            <li className="flex justify-between text-white/40">
                                <span>So - Ne</span>
                                <span>Zavřeno</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
                    <p>&copy; 2026 Autoškola RED. Všechna práva vyhrazena.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Ochrana údajů</a>
                        <a href="#" className="hover:text-white transition-colors">Obchodní podmínky</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
