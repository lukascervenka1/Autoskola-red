
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield } from "lucide-react";
import { MotorcycleIcon } from "@/components/icons/MotorcycleIcon";

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

export default function LicenseTypesSection() {
    return (
        <section id="vozovy-park" className="py-24 bg-white">
            <div className="container">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold">Řidičská oprávnění</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Vyberte si skupinu, kterou chcete získat. Klikněte pro více informací o tom, co můžete řídit.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-primary/10 bg-gradient-to-br from-white to-gray-50">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <CarIcon className="w-24 h-24 text-primary" />
                                </div>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                        <CarIcon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">Skupina B</CardTitle>
                                    <CardDescription>Osobní automobil (Manuál)</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Klasický řidičák na auto s manuální převodovkou. Základ pro každého řidiče.</p>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-2xl">
                                    <CarIcon className="w-6 h-6 text-primary" /> Skupina B
                                </DialogTitle>
                                <DialogDescription>
                                    Oprávnění k řízení osobních automobilů s manuální převodovkou.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <h4 className="font-semibold">Co můžete řídit?</h4>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                                    <li>Motorová vozidla do 3.500 kg (osobní auta, dodávky)</li>
                                    <li>Vozidla s max. 8 místy k sezení kromě řidiče</li>
                                    <li>K vozidlu smí být připojeno přípojné vozidlo do 750 kg</li>
                                    <li>Traktory a samojízdné pracovní stroje do 3.500 kg</li>
                                    <li>Mopedy a malé motocykly (AM) a vozidla A1 s automatickou převodovkou (pouze v ČR)</li>
                                </ul>
                                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                                    <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Podmínky:</span> Věk min. 18 let (výcvik od 16.5 let s mentorem).</p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-primary/10 bg-gradient-to-br from-white to-gray-50">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <CarIcon className="w-24 h-24 text-primary" />
                                </div>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                        <CarIcon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">Skupina B - Automat</CardTitle>
                                    <CardDescription>Osobní automobil (Automat)</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Moderní cesta k řízení. Bez spojky, bez stresu, plné soustředění na provoz.</p>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-2xl">
                                    <CarIcon className="w-6 h-6 text-primary" /> Skupina B - Automat
                                </DialogTitle>
                                <DialogDescription>
                                    Oprávnění k řízení osobních automobilů pouze s automatickou převodovkou.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <h4 className="font-semibold">Co můžete řídit?</h4>
                                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                                    <li>Motorová vozidla do 3.500 kg vybavená automatickou převodovkou</li>
                                    <li>Ideální pro jízdu ve městě a moderní vozy</li>
                                    <li>Stejný rozsah jako skupina B, ale omezeno na automat (kód 78 v řidičáku)</li>
                                    <li>Mopedy a malé motocykly (AM)</li>
                                </ul>
                                <div className="bg-yellow-500/10 p-4 rounded-lg mt-4 border border-yellow-500/20">
                                    <p className="text-xs text-yellow-700"><span className="font-semibold">Pozor:</span> S tímto oprávněním nesmíte řídit manuál. Pro zrušení omezení je nutná doplňovací zkouška.</p>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-primary/10 bg-gradient-to-br from-white to-gray-50">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MotorcycleIcon className="w-24 h-24 text-primary" />
                                </div>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                        <MotorcycleIcon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">Skupina AM / A1</CardTitle>
                                    <CardDescription>Motorky pro začínající</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">První krok do světa jedné stopy. Pro mladé řidiče od 15 nebo 16 let.</p>
                                </CardContent>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-2xl">
                                    <MotorcycleIcon className="w-6 h-6 text-primary" /> Skupina AM / A1
                                </DialogTitle>
                                <DialogDescription>
                                    Oprávnění pro malé motocykly a skútry.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                                <h4 className="font-semibold">Co můžete řídit?</h4>
                                <div className="space-y-4">
                                    <div>
                                        <strong className="text-sm">Skupina AM (od 15 let):</strong>
                                        <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                                            <li>Motorová vozidla s konstrukční rychlostí do 45 km/h</li>
                                            <li>Dvoukolová, tříkolová i lehká čtyřkolová vozidla</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-sm">Skupina A1 (od 16 let):</strong>
                                        <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                                            <li>Lehké motocykly do objemu 125 ccm</li>
                                            <li>Výkon nejvýše 11 kW</li>
                                            <li>Poměr výkon/hmotnost nejvýše 0.1 kW/kg</li>
                                            <li>Tříkolky do 15 kW</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    );
}
