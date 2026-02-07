import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Info, AlertCircle, Phone, Mail, Clock, Calendar, Shield, Zap, Star, CreditCard, Wallet, QrCode } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// --- PRICING DATA CONFIGURATION ---
// Edit this object to update prices across the Pricing page.
export const PRICING = {
    cars: {
        economy: {
            price: 22900,
            originalPrice: null,
            name: "Economy",
            duration: "6 měsíců",
            description: "Nejpohodovější tempo pro ty, kteří nikam nespěchají.",
            features: ["1h až 2h jízdy za 14 dní", "Flexibilní plánování", "Online studovna zdarma"],
        },
        student: {
            price: 23900,
            originalPrice: 24900,
            name: "Standard - Student",
            duration: "3 měsíce",
            description: "Zlatá střední cesta. Ideální ke škole.",
            features: ["2 až 4 hodiny jízd týdně", "Pravidelný výcvik", "Jízdy i o víkendech (+0 Kč)", "Online testy zdarma"],
            highlight: true,
            tag: "Nejoblíbenější pro studenty"
        },
        standard: {
            price: 25900,
            originalPrice: 26900,
            name: "Standard",
            duration: "3 měsíce",
            description: "Klasický kurz pro pracující a ostatní.",
            features: ["2 až 4 hodiny jízd týdně", "Individuální přístup", "Plánování online", "Všechny studijní materiály"],
        },
        expres: {
            price: 29900,
            originalPrice: 30900,
            name: "Expres",
            duration: "1 měsíc",
            description: "Rychlo-kurz pro ty, co potřebují řidičák včera.",
            features: ["Jízdy téměř každý den", "Prioritní plánování", "Intenzivní výuka", "Zkouška ihned po ukončení"],
            tag: "Nejrychlejší cesta"
        }
    },
    motorcycles: {
        am: { price: 21900, name: "Skupina AM", subtitle: "Od 15 let" },
        a1: { price: 22900, name: "Skupina A1", subtitle: "Od 16 let" },
        a2: { price: 23900, name: "Skupina A2", subtitle: "Od 18 let" },
        a: { price: 24900, name: "Skupina A", subtitle: "Od 24 let (nebo 20 let + praxe)" },
    },
    extensions: [
        { name: "Rozšíření A1 → A2", price: 9900, note: "Včetně 2 lekcí jízdy" },
        { name: "Rozšíření A2 → A", price: 9900, note: "Včetně 2 lekcí jízdy" },
        { name: "Rozšíření A1 → A", price: 23900, note: "V ceně 13 lekcí (při splnění věku)" },
    ],
    bundles: {
        combined: { price: 44900, name: "Sdružený výcvik B + A2/A", note: "Ušetříte při platbě najednou" }
    },
    services: [
        { name: "Vrácení řidičského oprávnění", price: 7500, note: "Po zákazu řízení" },
        { name: "Výměna ŘP pro cizince", price: 9500, note: "Příprava + zkouška" },
        { name: "Kondiční jízda (45 min)", price: 1100, note: "Pro držitele ŘP" },
        { name: "Balíček 10 kondičních jízd", price: 8900, note: "Výhodnější cena" },
        { name: "VIP Servis", price: 8000, note: "Přistavení vozu domů/do práce, absolutní priorita" },
        { name: "Storno kurzu", price: 3000, note: "Předčasné ukončení" },
        { name: "Převod z jiné autoškoly", price: 2000, note: "Administrativní poplatek" },
    ]
};

const CarIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M18.92 6.01C18.72 5.41 18.16 5 17.5 5h-11c-.66 0-1.21.41-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-.02-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
    </svg>
);

const PriceCard = ({ item, type }: { item: any, type: 'car' | 'moto' }) => {
    const isCar = type === 'car';

    return (
        <Card className={`relative flex flex-col h-full border-2 transition-all duration-300 hover:shadow-xl ${item.highlight ? 'border-primary shadow-lg shadow-primary/10 scale-105 z-10' : 'border-border/50 hover:border-primary/50'}`}>
            {item.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    {item.tag}
                </div>
            )}
            <CardHeader>
                <CardTitle className="text-2xl">{item.name}</CardTitle>
                <CardDescription className="text-base mt-2">{item.description || item.subtitle}</CardDescription>
                {isCar && (
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md w-fit">
                        <Clock className="w-4 h-4" /> {item.duration}
                    </div>
                )}
            </CardHeader>
            <CardContent className="flex-1">
                <div className="mb-6">
                    {item.originalPrice && (
                        <span className="text-muted-foreground/60 line-through text-lg block mb-1">
                            {item.originalPrice.toLocaleString()} Kč
                        </span>
                    )}
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-primary">
                            {item.price.toLocaleString()}
                        </span>
                        <span className="text-xl font-bold text-muted-foreground">Kč</span>
                    </div>
                </div>

                {isCar && (
                    <ul className="space-y-3">
                        {item.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                                <Check className="w-5 h-5 text-green-500 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
            <CardFooter>
                <Link href="/registrace" className="w-full">
                    <Button className={`w-full text-lg h-12 ${item.highlight ? 'bg-primary hover:bg-primary/90' : ''}`} variant={item.highlight ? 'default' : 'outline'}>
                        Chci se přihlásit
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";

import { Footer } from "@/components/Footer";
import { MotorcycleIcon } from "@/components/icons/MotorcycleIcon";

export default function Pricing() {
    return (
        <div className="min-h-screen bg-background pb-24">
            <SEO
                title="Ceník autoškoly | Řidičák sk. B od 22 900 Kč | Praha 6"
                description="Kompletní ceník autoškoly. Skupina B, motocykly (A, A1, A2, AM), kondiční jízdy a vrácení řidičáku. Žádné skryté poplatky, možnost splátek."
            />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Férový Ceník</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Žádné skryté poplatky. Vyberte si kurz, který sedí vašemu tempu a rozpočtu.
                        Investice do vzdělání, která se vám vrátí na každém kilometru.
                    </p>
                </div>
            </section>

            <div className="container relative z-20 mt-12">

                {/* Car Courses */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                            <CarIcon className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black tracking-tight">Osobní Automobil</h2>
                            <p className="text-lg text-muted-foreground mt-1">Skupina B - Manuál & Automat</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                        <PriceCard item={PRICING.cars.economy} type="car" />
                        <PriceCard item={PRICING.cars.student} type="car" />
                        <PriceCard item={PRICING.cars.standard} type="car" />
                        <PriceCard item={PRICING.cars.expres} type="car" />
                    </div>

                    {/* Payment Types */}
                    <div className="mt-16 grid md:grid-cols-3 gap-6">
                        <div className="bg-card border border-border/50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Platba kartou</h3>
                            <p className="text-muted-foreground text-sm">
                                Na pobočce můžete pohodlně zaplatit kartou. Přijímáme Visa i Mastercard.
                            </p>
                        </div>

                        <div className="bg-card border border-border/50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Možnost splátek</h3>
                            <p className="text-muted-foreground text-sm">
                                Kurzovné si můžete rozložit až na 3 splátky bez jakéhokoliv navýšení.
                            </p>
                        </div>

                        <div className="bg-card border border-border/50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                <QrCode className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Platba QR kódem</h3>
                            <p className="text-muted-foreground text-sm">
                                Jednoduchá a rychlá platba mobilem z pohodlí domova přes QR kód.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Visual Separator */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent my-24" />

                {/* Moto Courses */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                            <MotorcycleIcon className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black tracking-tight">Motocykly & Skútry</h2>
                            <p className="text-lg text-muted-foreground mt-1">Skupiny AM, A1, A2, A</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <PriceCard item={PRICING.motorcycles.am} type="moto" />
                                <PriceCard item={PRICING.motorcycles.a1} type="moto" />
                                <PriceCard item={PRICING.motorcycles.a2} type="moto" />
                                <PriceCard item={PRICING.motorcycles.a} type="moto" />
                            </div>
                        </div>

                        {/* Side Panel - Extensions & Bundles */}
                        <div className="space-y-6">
                            <Card className="bg-secondary/20 border-border/60">
                                <CardHeader>
                                    <CardTitle>Rozšiřující výcvik</CardTitle>
                                    <CardDescription>Máte už řidičák? Posuňte se dál.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {PRICING.extensions.map((ext, i) => (
                                        <div key={i} className="flex justify-between items-start border-b border-border/40 last:border-0 pb-4 last:pb-0">
                                            <div>
                                                <div className="font-bold">{ext.name}</div>
                                                <div className="text-xs text-muted-foreground">{ext.note}</div>
                                            </div>
                                            <div className="font-bold text-primary">{ext.price.toLocaleString()} Kč</div>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="bg-primary text-white border-0 shadow-xl shadow-primary/20">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        <span className="font-bold text-yellow-400 tracking-wide uppercase text-xs">Výhodný balíček</span>
                                    </div>
                                    <CardTitle className="text-xl">{PRICING.bundles.combined.name}</CardTitle>
                                    <CardDescription className="text-white/80">{PRICING.bundles.combined.note}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-black mb-2">{PRICING.bundles.combined.price.toLocaleString()} Kč</div>
                                    <Link href="/registrace">
                                        <Button variant="secondary" className="w-full font-bold text-primary hover:bg-white">
                                            Objednat balíček
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Other Services Table */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold">Ostatní služby a poplatky</h2>
                    <Card>
                        <div className="divide-y divide-border/40">
                            {PRICING.services.map((service, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-secondary/20 transition-colors">
                                    <div className="mb-2 sm:mb-0">
                                        <div className="font-medium">{service.name}</div>
                                        <div className="text-sm text-muted-foreground">{service.note}</div>
                                    </div>
                                    <div className="font-bold text-right min-w-[100px]">
                                        {service.price.toLocaleString()} Kč
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </section>

                {/* FAQ / Info regarding exams */}
                <section className="mt-16 bg-secondary/30 rounded-3xl p-8 border border-border/50">
                    <div className="flex items-start gap-4">
                        <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg">Důležité informace k poplatkům</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Ceny kurzů nezahrnují správní poplatky magistrátu za závěrečné zkoušky (tzv. kolky). Tyto poplatky se hradí přímo magistrátu.
                                První zkouška stojí 700 Kč, opakovaná jízda 400 Kč.
                            </p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Kurz je možné absolvovat i v <strong>anglickém jazyce</strong> za příplatek 4 000 Kč.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
