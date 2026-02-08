import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Unlock, CalendarDays, Car, ChevronDown, ChevronUp, Phone, Bike } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SHARED_PASSWORD = "Autoskolared1";
const STORAGE_KEY = "autoskola_student_auth";

export default function StudentZone() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(false);
    const [showSimulator, setShowSimulator] = useState(false);

    useEffect(() => {
        const storedAuth = localStorage.getItem(STORAGE_KEY);
        if (storedAuth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === SHARED_PASSWORD) {
            setIsAuthenticated(true);
            localStorage.setItem(STORAGE_KEY, "true");
            setError(false);
        } else {
            setError(true);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem(STORAGE_KEY);
        setPassword("");
    };

    const calendars = [
        {
            id: "i20",
            name: "Hyundai i20",
            src: "https://calendar.google.com/calendar/embed?src=4266064c138f8dc8e70a7de1fac3f84fca6442df8d2c88799e72f05f05dae700%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "blue",
            type: "car"
        },
        {
            id: "kodiaq",
            name: "Škoda Kodiaq (Automat)",
            src: "https://calendar.google.com/calendar/embed?src=6d0b05514fdd3c64b94910dd301bb40e7ecbc17572962884ae046441969ba491%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "red",
            type: "car"
        },
        {
            id: "octavia2",
            name: "Škoda Octavia II",
            src: "https://calendar.google.com/calendar/embed?src=d618b48803fd8775dfefe6ec93e7cf6550289adf1053dcd417ee3cdb8a60bfba%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "green",
            type: "car"
        },
        {
            id: "octavia3",
            name: "Škoda Octavia III",
            src: "https://calendar.google.com/calendar/embed?src=0e893f2345f220f3780438943b494f6302dfa1034e2166e10fa85b65f46b069c%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "purple",
            type: "car"
        },
        {
            id: "yeti",
            name: "Škoda Yeti",
            src: "https://calendar.google.com/calendar/embed?src=74f9d1152758a428f9f656365d1609305e91985c0d4a118624802a4596cd3ef8%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "orange",
            type: "car"
        },
        {
            id: "moto_jiri",
            name: "Motorka - Jiří",
            src: "https://calendar.google.com/calendar/embed?src=16c474cdd937cdac5f24b2612a58ed3a1e964ed159132710481055b8a1bdbefd%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "yellow",
            type: "moto"
        },
        {
            id: "moto_marek",
            name: "Motorka - Marek",
            src: "https://calendar.google.com/calendar/embed?src=d88ccaf8231d7c9a4ec175962a40e76f2f282e91a767e3c6b8cbc16fa2297dc5%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "pink",
            type: "moto"
        }
    ];

    const simulatorCalendar = "https://calendar.google.com/calendar/embed?src=073fd01bb7ba98b5655c749d4a88a4164875ba765782022477d303a204f6da7a%40group.calendar.google.com&ctz=Europe%2FPrague";
    const examsCalendar = "https://calendar.google.com/calendar/embed?src=bdd033d6febb8c117ab540797e8af9794faed2c8c894c8c2659dc335e0203753%40group.calendar.google.com&ctz=Europe%2FPrague";

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Studentská zóna | Autoškola RED"
                description="Rozvrh jízd pro žáky Autoškoly RED. Přehled obsazenosti vozidel, trenažéru a termíny zkoušek."
            />
            <Navbar />

            <div className="pt-32 pb-20 container min-h-[calc(100vh-80px)]">
                {!isAuthenticated ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md mx-auto"
                    >
                        <Card className="shadow-2xl border-primary/20">
                            <CardHeader className="text-center space-y-4 pb-2">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                                    <Lock className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-2xl">Studentská zóna</CardTitle>
                                <CardDescription>
                                    Zadejte heslo pro přístup k rozvrhu jízd.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleLogin} className="space-y-4">
                                    <div className="space-y-2">
                                        <Input
                                            type="password"
                                            placeholder="Heslo"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
                                        />
                                        {error && (
                                            <p className="text-sm text-red-500 font-medium animate-in slide-in-from-left-1">
                                                Nesprávné heslo. Zkuste to znovu.
                                            </p>
                                        )}
                                    </div>
                                    <Button type="submit" className="w-full text-lg h-12">
                                        <Unlock className="w-4 h-4 mr-2" /> Vstoupit
                                    </Button>
                                    <p className="text-xs text-center text-muted-foreground pt-2">
                                        Heslo vám sdělí váš instruktor.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
                            <div>
                                <h1 className="text-3xl font-bold flex items-center gap-3">
                                    <CalendarDays className="w-8 h-8 text-primary" />
                                    Rozvrh jízd a Zkoušek
                                </h1>
                                <p className="text-muted-foreground mt-1">
                                    Přehled obsazenosti vozidel, trenažéru a termíny zkoušek.
                                </p>
                            </div>
                            <Button variant="outline" onClick={handleLogout} className="text-muted-foreground hover:text-red-500">
                                Odhlásit se
                            </Button>
                        </div>

                        {/* Main Tabs - Cars & Moto */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Jízdy (Auto & Moto)</h2>
                            <Tabs defaultValue={calendars[0].id} className="w-full">
                                <TabsList className="w-full h-auto flex-wrap justify-start gap-2 bg-transparent p-0 mb-6">
                                    {calendars.map((cal) => (
                                        <TabsTrigger
                                            key={cal.id}
                                            value={cal.id}
                                            className="data-[state=active]:bg-primary data-[state=active]:text-white border bg-white px-4 py-3 h-auto text-base"
                                        >
                                            {cal.type === 'moto' ? (
                                                <Bike className="w-5 h-5 mr-2" />
                                            ) : (
                                                <Car className="w-4 h-4 mr-2" />
                                            )}
                                            {cal.name}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {calendars.map((cal) => (
                                    <TabsContent key={cal.id} value={cal.id} className="mt-0">
                                        <Card className="overflow-hidden border-2 shadow-lg">
                                            <CardHeader className="bg-muted/30 border-b py-4">
                                                <CardTitle className="flex items-center gap-2 text-lg">
                                                    <span className={`w-3 h-3 rounded-full bg-${cal.color}-500`} />
                                                    {cal.name}
                                                </CardTitle>
                                            </CardHeader>
                                            <div className="aspect-[4/3] md:aspect-[16/9] w-full bg-white relative">
                                                <iframe
                                                    src={cal.src}
                                                    style={{ border: 0 }}
                                                    width="100%"
                                                    height="100%"
                                                    frameBorder="0"
                                                    scrolling="no"
                                                    className="absolute inset-0"
                                                />
                                            </div>
                                        </Card>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </section>

                        {/* Simulator Section */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                                        <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V6h16v12zM7 12l5-3 5 3-5 3z" />
                                    </svg>
                                    Trenažér
                                </h2>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setShowSimulator(!showSimulator)}
                                    className="rounded-full w-10 h-10 border-2"
                                    title={showSimulator ? "Skrýt" : "Zobrazit"}
                                >
                                    {showSimulator ? (
                                        <ChevronUp className="w-5 h-5" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5" />
                                    )}
                                </Button>
                            </div>

                            <AnimatePresence>
                                {showSimulator && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden mt-4"
                                    >
                                        <Card className="overflow-hidden border-2 shadow-md">
                                            <div className="aspect-[4/3] md:aspect-[16/9] w-full bg-white relative">
                                                <iframe
                                                    src={simulatorCalendar}
                                                    style={{ border: 0 }}
                                                    width="100%"
                                                    height="100%"
                                                    frameBorder="0"
                                                    scrolling="no"
                                                    className="absolute inset-0"
                                                />
                                            </div>
                                        </Card>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </section>

                        {/* Exams Section - Highlighted */}
                        <section className="bg-yellow-500/5 rounded-3xl p-6 md:p-10 border-2 border-yellow-500/30 shadow-xl shadow-yellow-500/10">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                <div>
                                    <h2 className="text-3xl font-black mb-2 text-yellow-600 dark:text-yellow-400">
                                        Kalendář závěrečných zkoušek
                                    </h2>
                                    <p className="text-lg text-muted-foreground">
                                        Přehled vypsaných termínů zkoušek.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Při dotazích můžete volat:
                                    </span>
                                    <a
                                        href="tel:+420608913000"
                                        className="flex items-center gap-2 text-xl font-bold text-primary hover:underline bg-white/50 px-4 py-2 rounded-lg border border-border/50"
                                    >
                                        <Phone className="w-5 h-5" />
                                        +420 608 913 000
                                    </a>
                                </div>
                            </div>

                            <Card className="overflow-hidden border-2 border-yellow-500/20 shadow-lg">
                                <div className="aspect-[4/3] md:aspect-[16/9] w-full bg-white relative">
                                    <iframe
                                        src={examsCalendar}
                                        style={{ border: 0 }}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        className="absolute inset-0"
                                    />
                                </div>
                            </Card>
                        </section>
                    </motion.div>
                )}
            </div>
            <Footer />
        </div>
    );
}
