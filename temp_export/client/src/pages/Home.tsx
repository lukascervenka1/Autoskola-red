import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Mail, Star, Users, Zap, Award, CheckCircle2, Clock, Shield, Navigation } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { MobileNav } from "@/components/MobileNav";
import { Navbar } from "@/components/Navbar";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const MotorcycleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    fill="currentColor"
    className={className}
  >
    <path d="M280 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h57.7l16.4 30.3L256 192l-45.3-45.3c-12-12-28.3-18.7-45.3-18.7H64c-17.7 0-32 14.3-32 32v32h96c88.4 0 160 71.6 160 160c0 11-1.1 21.7-3.2 32h70.4c-2.1-10.3-3.2-21-3.2-32c0-52.2 25-98.6 63.7-127.8l15.4 28.6C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L418.2 128H480c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H459.6c-7.5 0-14.7 2.6-20.5 7.4L391.7 78.9l-14-26c-7-12.9-20.5-21-35.2-21H280zM462.7 311.2l28.2 52.2c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-28.2-52.2c2.3-.3 4.7-.4 7.1-.4c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64c0-15.5 5.5-29.7 14.7-40.8zM187.3 376c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c26.9 0 49.9 16.5 59.3 40h66.4C242.5 268.8 190.5 224 128 224C57.3 224 0 281.3 0 352s57.3 128 128 128c62.5 0 114.5-44.8 125.8-104H187.3zM128 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

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

/**
 * Autoškola RED - Modern Driving School Website
 * Design: Trust & Clarity - Vibrant, Premium
 */

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  } as any;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  } as any;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background">
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4" />

        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Nová pobočka v Dejvicích otevřena
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              Řidičák <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                snadno a v pohodě.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Moderní výuka, která vás bude bavit. Žádný stres, jen čistá radost z jízdy v nových vozech a s instruktory, kteří jsou v klidu.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="/registrace">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer">
                  Chci jezdit <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/cenik">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50 cursor-pointer">
                  Ceník
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span>500+ spokojených studentů</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[700px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] rotate-3 blur-sm transform scale-95" />
            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
              alt="Moderní autoškola"
              className="relative rounded-[2.5rem] shadow-2xl object-cover h-full w-full z-10 border-4 border-white"
            />

            {/* Floating Badge 1 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -left-12 top-1/4 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[250px]"
            >
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Bezpečnost</p>
                <p className="text-xs text-muted-foreground">Moderní asistenti vozu</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-8 bottom-1/4 z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CarIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Nové vozy</p>
                <p className="text-xs text-muted-foreground">Škoda Octavia 2024</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Promotional Packages Section */}
      <section id="kurzy" className="py-24 bg-secondary/30 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        <div className="container relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Vyberte si svůj balíček</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Všechny ceny jsou konečné, žádné skryté poplatky. Možnost platby na splátky bez navýšení.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Economy */}
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Economy</CardTitle>
                <CardDescription>Pro studenty s časem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-extrabold text-foreground">21.900 Kč</span>
                  <span className="text-muted-foreground ml-2">/ kurz</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Standardní délka 3-4 měsíce",
                    "Jízdy 1-2x týdně",
                    "Základní teoretická příprava",
                    "E-learning zdarma"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/registrace">
                  <Button variant="outline" className="w-full rounded-full h-11 border-primary/20 hover:border-primary hover:text-primary">
                    Vybrat Economy
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Standard - Highlighted */}
            <Card className="relative border-primary bg-background shadow-2xl scale-105 z-10">
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
                    <span className="text-4xl font-extrabold text-foreground">24.900 Kč</span>
                    <span className="text-muted-foreground line-through decoration-red-500/50 decoration-2">26.900 Kč</span>
                  </div>
                  <p className="text-xs font-semibold text-green-600 mt-1">Ušetříte 2.000 Kč</p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Rychlokurz (2-3 měsíce)",
                    "Přednostní plánování jízd",
                    "Rozšířená výuka v provozu",
                    "Garance termínu zkoušky",
                    "Jízda v simulátoru zdarma"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/registrace">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-11 shadow-lg shadow-primary/20">
                    Vybrat Standard
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* VIP */}
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">VIP Expres</CardTitle>
                <CardDescription>Individuální přístup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-extrabold text-foreground">29.900 Kč</span>
                  <span className="text-muted-foreground ml-2">/ kurz</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Expresní kurz (cca 1 měsíc)",
                    "Jízdy každý den včetně víkendů",
                    "Vyzvednutí doma/v práci",
                    "Přistavení vozu ke zkoušce",
                    "Individuální konzultace"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/registrace">
                  <Button variant="outline" className="w-full rounded-full h-11 border-primary/20 hover:border-primary hover:text-primary">
                    Vybrat VIP
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* License Types Section */}
      <section id="instruktori" className="py-24 bg-white">
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
                      <Zap className="w-6 h-6" />
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
                    <Zap className="w-6 h-6 text-primary" /> Skupina B - Automat
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
                    <CardTitle className="text-xl">Skupina A2 / A</CardTitle>
                    <CardDescription>Silné motocykly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Pro zkušenější jezdce. Od středně silných strojů až po neomezené mašiny.</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-2xl">
                    <MotorcycleIcon className="w-6 h-6 text-primary" /> Skupina A2 / A
                  </DialogTitle>
                  <DialogDescription>
                    Oprávnění pro řízení výkonných motocyklů.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <h4 className="font-semibold">Co můžete řídit?</h4>
                  <div className="space-y-4">
                    <div>
                      <strong className="text-sm">Skupina A2 (od 18 let):</strong>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                        <li>Motocykly s výkonem do 35 kW</li>
                        <li>Poměr výkon/hmotnost nejvýše 0.2 kW/kg</li>
                        <li>Nesmějí být upraveny z motocyklu s více než dvojnásobným výkonem</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-sm">Skupina A (od 24 let nebo 2 roky po A2):</strong>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1">
                        <li>Všechny druhy motocyklů bez omezení výkonu</li>
                        <li>"Velká motorka" - královská třída</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

            <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Začněte řídit <br /> ještě dnes
              </h2>
              <p className="text-white/80 text-lg md:text-xl">
                Stačí vyplnit krátký formulář a my se vám ozveme s nejbližším možným termínem. Nečekejte na zázrak, řidičák se sám neudělá!
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 min-w-[300px]">
              <Link href="/registrace">
                <Button size="lg" className="h-16 text-xl bg-white text-primary hover:bg-gray-100 border-0 rounded-2xl shadow-2xl cursor-pointer">
                  Online přihláška
                </Button>
              </Link>
              <div className="text-center text-white/60 text-sm">
                Nezávazná registrace
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text / Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-foreground">
                  Kde nás najdete?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sídlíme v moderních prostorách <strong>Archi HUB</strong> v srdci Dejvic. Zastavte se za námi na kávu a probereme vaše plány za volantem.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-3xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Adresa</h3>
                    <p className="text-muted-foreground">
                      Puškinovo náměstí 681/3<br />
                      160 00 Praha 6 - Bubeneč<br />
                      <span className="text-sm opacity-70">(Vchod z boku budovy Archi HUB)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary/30 rounded-3xl border border-border/50">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Navigation className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Jak k nám?</h3>
                    <p className="text-muted-foreground">
                      Je to kousek! Ze stanice metra <strong>Dejvická</strong> (výstup směr Václavkova) je to jen cca 5 minut chůze příjemným parkem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                src="https://maps.google.com/maps?saddr=Dejvick%C3%A1&daddr=Pu%C5%A1kinovo+n%C3%A1m%C4%9Bst%C3%AD+681%2F3,+Praha+6&output=embed"
                className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa trasy do Autoškoly RED"
              />
              <div className="absolute inset-0 pointer-events-none rounded-[2.5rem] ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
