import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, Navigation, Facebook, Instagram } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Kontakt</h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        Jsme tu pro vás. Zastavte se za námi v Dejvicích nebo nám napište.
                    </p>
                </div>
            </section>

            <div className="container py-24 -mt-10 relative z-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info Side */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Kde nás najdete?</h2>
                            <p className="text-lg text-muted-foreground">
                                Naše učebna v Dejvicích je skvěle dostupná. Pár minut od metra a jste u nás.
                            </p>

                            <div className="grid gap-6">
                                <Card className="border-l-4 border-l-primary shadow-md">
                                    <CardContent className="p-6 flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Adresa učebny</h3>
                                            <p className="text-muted-foreground">
                                                Puškinovo náměstí 681/3<br />
                                                160 00 Praha 6 - Bubeneč
                                            </p>
                                            <div className="mt-2 text-sm text-primary font-medium flex items-center gap-1">
                                                <Navigation className="w-4 h-4" /> Vchod z boku budovy Archi HUB
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <Card className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-6 flex flex-col gap-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Telefon</h3>
                                                <a href="tel:+420777888999" className="text-lg font-semibold hover:text-primary transition-colors">
                                                    +420 777 888 999
                                                </a>
                                                <p className="text-sm text-muted-foreground mt-1">Po-Pá 9:00 - 17:00</p>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="hover:shadow-md transition-shadow">
                                        <CardContent className="p-6 flex flex-col gap-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold mb-1">Email</h3>
                                                <a href="mailto:info@autoskola.red" className="text-lg font-semibold hover:text-primary transition-colors break-words">
                                                    info@autoskola.red
                                                </a>
                                                <p className="text-sm text-muted-foreground mt-1">Odpovídáme do 24h</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold flex items-center gap-3">
                                <Clock className="w-6 h-6 text-primary" /> Otevírací doba
                            </h2>
                            <Card>
                                <CardContent className="p-0 divide-y divide-border">
                                    <div className="flex justify-between p-4">
                                        <span className="font-medium">Pondělí</span>
                                        <span>8:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between p-4">
                                        <span className="font-medium">Úterý</span>
                                        <span>8:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between p-4">
                                        <span className="font-medium">Středa</span>
                                        <span>8:00 - 18:00</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-muted/20">
                                        <span className="font-medium text-muted-foreground">Čtvrtek</span>
                                        <span className="text-muted-foreground">Na objednání</span>
                                    </div>
                                    <div className="flex justify-between p-4">
                                        <span className="font-medium">Pátek</span>
                                        <span>8:00 - 15:00</span>
                                    </div>
                                    <div className="flex justify-between p-4 bg-red-50 text-red-600/80">
                                        <span className="font-medium">Víkend</span>
                                        <span>Zavřeno</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="pt-6">
                            <h3 className="font-bold mb-4">Sledujte nás</h3>
                            <div className="flex gap-4">
                                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-2 hover:border-primary hover:text-primary">
                                    <Facebook className="w-5 h-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-2 hover:border-primary hover:text-primary">
                                    <Instagram className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="lg:pt-20">
                        <Card className="shadow-2xl border-primary/10 overflow-hidden">
                            <div className="h-2 bg-primary w-full" />
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl">Napište nám</CardTitle>
                                <CardDescription>
                                    Máte dotaz k výuce nebo ceníku? Rádi vám poradíme.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6" onSubmit={(e) => {
                                    e.preventDefault();
                                    // Placeholder for form submission
                                    alert("Děkujeme za zprávu. Brzy se ozveme!");
                                }}>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Jméno</label>
                                            <Input id="name" placeholder="Petr Novák" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">Telefon</label>
                                            <Input id="phone" type="tel" placeholder="+420 777 666 555" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                                        <Input id="email" type="email" placeholder="petr@email.cz" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">Vaše zpráva</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Dobrý den, měl bych zájem o..."
                                            className="min-h-[150px] resize-none"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90">
                                        Odeslat zprávu <Send className="ml-2 w-4 h-4" />
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground mt-4">
                                        Odesláním souhlasíte se zpracováním osobních údajů.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Full Width Map */}
            <section className="h-[500px] w-full mt-24 relative bg-gray-100">
                <iframe
                    width="100%"
                    height="100%"
                    src="https://maps.google.com/maps?saddr=Dejvick%C3%A1&daddr=Pu%C5%A1kinovo+n%C3%A1m%C4%9Bst%C3%AD+681%2F3,+Praha+6&output=embed"
                    className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Autoškola RED"
                />
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
            </section>

            <Footer />
        </div>
    );
}
