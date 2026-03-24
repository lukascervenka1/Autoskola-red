
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function PricingSection() {
    return (
        <section id="kurzy" className="py-24 bg-secondary/30 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            <div className="container relative">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight">Ceny kurzů Autoškoly RED v Dejvicích</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Transparentní ceník pro rok 2026. Možnost platby na splátky bez navýšení a kondiční jízdy v Praze 6.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {/* Economy */}
                    <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Economy</CardTitle>
                            <CardDescription>Pro studenty s časem</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <span className="text-4xl font-extrabold text-foreground">22.900 Kč</span>
                                <span className="text-muted-foreground ml-2">/ kurz</span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Standardní délka kurzu 4-6 měsíce",
                                    "Jízdy 1x týdně",
                                    "Základní teoretická příprava",
                                    "E-learning zdarma",
                                    "Simulátor zdarma",
                                    "Kurz první pomoci v ceně",
                                    "Možnost připlatit si automat 1500 Kč",
                                    "Možnost splátek na 3x"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant="outline" className="w-full rounded-full h-11 border-primary/20 hover:border-primary hover:text-primary">
                                <Link href="/registrace?variant=economy&course=B">
                                    Vybrat Economy
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Standard - Highlighted */}
                    <Card className="relative border-primary bg-background shadow-2xl scale-105 z-10 hover:scale-110 transition-transform duration-300">
                        <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                            <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Nejoblíbenější</span>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-primary">Standard</CardTitle>
                            <CardDescription>Ideální poměr cena/výkon</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-extrabold text-foreground">25.900 Kč</span>
                                    <span className="text-muted-foreground line-through decoration-red-500/50 decoration-2">27.900 Kč</span>
                                </div>
                                <p className="text-xs font-semibold text-green-600 mt-1">Ušetříte 2.000 Kč</p>
                            </div>

                            <div className="bg-emerald-100 p-3 rounded-lg border border-emerald-200">
                                <p className="text-sm font-medium text-emerald-800 leading-relaxed">
                                    <span className="font-bold">Největší benefit:</span> Maximální flexibilita. Začněte s manuálem a pokud vám nebude vyhovovat, kdykoliv zdarma přejdeme na automat. Cena se nemění!
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    "Všechny výhody balíčku Economy",
                                    "Rychlokurz (2-3 měsíce)",
                                    "Přednostní plánování jízd",
                                    "Garance termínu zkoušky",
                                    "Možnost zrušení jízd do 24h zdarma",
                                    "Simulace závěrečné zkoušky",
                                    "Možnost splátek na 3x"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 shrink-0 text-green-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="space-y-3 pt-2">
                                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-11 shadow-lg shadow-primary/20">
                                    <Link href="/registrace?variant=standard&course=B">
                                        Vybrat Standard
                                    </Link>
                                </Button>
                                <p className="text-center">
                                    <Link href="/cenik" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors hover:underline">
                                        Jste student? Zobrazit zvýhodněný balíček
                                    </Link>
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* VIP */}
                    <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Expres</CardTitle>
                            <CardDescription>Individuální přístup</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div>
                                <span className="text-4xl font-extrabold text-foreground">29.900 Kč</span>
                                <span className="text-muted-foreground ml-2">/ kurz</span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Všechny výhody balíčků Economy a Standard",
                                    "Expresní kurz (cca 1 měsíc)",
                                    "Individuální plánování jízd",
                                    "Intenzivní výuka",
                                    "Přistavení vozu ke zkoušce",
                                    "Možnost přikoupit VIP za 8 000 Kč",
                                    "Možnost splátek na 3x"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${i === 0 ? "text-purple-500 font-bold" : "text-purple-500"}`} />
                                        <span className={i === 0 ? "font-bold" : ""}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button asChild variant="outline" className="w-full rounded-full h-11 border-primary/20 hover:border-primary hover:text-primary">
                                <Link href="/registrace?variant=expres&course=B">
                                    Vybrat Expres
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="mt-24 text-center">
                <Button asChild size="lg" variant="secondary" className="h-12 px-8 rounded-full font-semibold hover:bg-primary hover:text-white transition-[color,background-color,box-shadow,transform] duration-200 relative z-10 hover:scale-105 shadow-sm hover:shadow-lg">
                    <Link href="/cenik">
                        Zobrazit kompletní ceník <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
