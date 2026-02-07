import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, Unlock, CalendarDays, Car } from "lucide-react";
import { motion } from "framer-motion";

const SHARED_PASSWORD = "Autoskolared1";
const STORAGE_KEY = "autoskola_student_auth";

export default function StudentZone() {
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(false);

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
            color: "blue"
        },
        {
            id: "kodiaq",
            name: "Škoda Kodiaq (Automat)",
            src: "https://calendar.google.com/calendar/embed?src=6d0b05514fdd3c64b94910dd301bb40e7ecbc17572962884ae046441969ba491%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "red"
        },
        {
            id: "octavia2",
            name: "Škoda Octavia II",
            src: "https://calendar.google.com/calendar/embed?src=d618b48803fd8775dfefe6ec93e7cf6550289adf1053dcd417ee3cdb8a60bfba%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "green"
        },
        {
            id: "octavia3",
            name: "Škoda Octavia III",
            src: "https://calendar.google.com/calendar/embed?src=0e893f2345f220f3780438943b494f6302dfa1034e2166e10fa85b65f46b069c%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "purple"
        },
        {
            id: "yeti",
            name: "Škoda Yeti",
            src: "https://calendar.google.com/calendar/embed?src=74f9d1152758a428f9f656365d1609305e91985c0d4a118624802a4596cd3ef8%40group.calendar.google.com&ctz=Europe%2FPrague",
            color: "orange"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Studentská zóna | Autoškola RED"
                description="Rozvrh jízd pro žáky Autoškoly RED. Přehled obsazenosti vozidel."
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
                        className="space-y-8"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-6">
                            <div>
                                <h1 className="text-3xl font-bold flex items-center gap-3">
                                    <CalendarDays className="w-8 h-8 text-primary" />
                                    Rozvrh jízd
                                </h1>
                                <p className="text-muted-foreground mt-1">
                                    Vyberte vozidlo pro zobrazení obsazenosti.
                                </p>
                            </div>
                            <Button variant="outline" onClick={handleLogout} className="text-muted-foreground hover:text-red-500">
                                Odhlásit se
                            </Button>
                        </div>

                        <Tabs defaultValue={calendars[0].id} className="w-full">
                            <TabsList className="w-full h-auto flex-wrap justify-start gap-2 bg-transparent p-0 mb-6">
                                {calendars.map((cal) => (
                                    <TabsTrigger
                                        key={cal.id}
                                        value={cal.id}
                                        className="data-[state=active]:bg-primary data-[state=active]:text-white border bg-white px-4 py-3 h-auto text-base"
                                    >
                                        <Car className="w-4 h-4 mr-2" /> {cal.name}
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

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 text-sm">
                            <strong>Tip:</strong> Pokud se kalendář nezobrazuje správně, zkuste to v jiném prohlížeči nebo vypněte blokování sledování.
                        </div>
                    </motion.div>
                )}
            </div>
            <Footer />
        </div>
    );
}
