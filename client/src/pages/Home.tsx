
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Mail, Star, Users, Zap, Award, CheckCircle2, Clock, Shield, Navigation, Heart, Car, GraduationCap, Banknote, BookOpen, CalendarCheck, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { MobileNav } from "@/components/MobileNav";
import { Navbar } from "@/components/Navbar";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";

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

/**
 * Autoškola RED - Modern Driving School Website
 * Design: Trust & Clarity - Vibrant, Premium
 */

import { SEO } from "@/components/SEO";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const [apiState, setApiState] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!apiState) return;

    const intervalId = setInterval(() => {
      apiState.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [apiState]);
  const reviews = [
    {
      name: "Viktorie Ž.",
      text: "Vynikající organizace a vysoce profesionální, individuální přístup ke každému studentovi. Autoškolu RED mohu jen doporučit.",
      date: "před měsícem"
    },
    {
      name: "Filip F.",
      text: "Zkoušky jsem udělal hned na první pokus. Skvělý přístup instruktorů a moderní auta. Rozhodně doporučuji Autoškolu RED!",
      date: "před 2 měsíci"
    },
    {
      name: "Elena S.",
      text: "Začala jsem s řidičákem v 39 letech a měla jsem velký respekt. Pan instruktor Macek mě ale svým klidným a trpělivým přístupem naučil vše krok za krokem. Skvělá zkušenost.",
      date: "před 3 měsíci"
    },
    {
      name: "Denise A.",
      text: "Úžasná zkušenost, velmi flexibilní plánování jízd a moderní prostředí pro teorii. Moc děkuji panu Mackovi za trpělivost a skvělou přípravu na zkoušky.",
      date: "před měsícem"
    },
    {
      name: "Paul A.",
      text: "Amazing service and very flexible scheduling. The afternoon lectures were interesting and Mr. Macek is a very patient instructor who explains everything clearly.",
      date: "před 4 měsíci"
    },
    {
      name: "Petra K.",
      text: "Velké poděkování celé autoškole a speciálně panu Draškovičovi za profesionální a lidský přístup během celého kurzu.",
      date: "před 2 měsíci"
    },
    {
      name: "Marie S.",
      text: "Moje zkušenost s Autoškolou RED byla naprosto skvělá. Vše proběhlo hladce a bez stresu. Doporučuji všem, kdo hledají kvalitu.",
      date: "před 5 měsíci"
    },
    {
      name: "Jakub K.",
      text: "Super autoškola, jízdy v novém Kodiaqu jsou pecka. Instruktoři jsou v pohodě a všechno vysvětlí v klidu.",
      date: "před měsícem"
    },
    {
      name: "Veronika H.",
      text: "Oceňuji individuální přístup a trpělivost. S řidičákem jsem spokojená a cítím se za volantem jistě.",
      date: "před 3 měsíci"
    },
    {
      name: "Marek N.",
      text: "Profesionální trénink a zkušení instruktoři. Všechno klaplo na první dobrou. Díky moc!",
      date: "před 2 měsíci"
    }
  ];

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

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "DrivingSchool",
      "name": "Autoškola RED",
      "alternateName": "Autoškola Praha 6 RED",
      "image": "https://autoskola.red/images/skoda-kodiaq-dejvice.png",
      "description": "Prémiová autoškola v Praze 6 Dejvicích. Nabízíme individuální přístup, moderní vozy Škoda Kodiaq 2024 a výcvik v klidu a pohodě pro skupiny B a A.",
      "@id": "https://autoskola.red/#organization",
      "url": "https://autoskola.red",
      "telephone": "+420608913000",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Puškinovo náměstí 681/3",
        "addressLocality": "Praha 6 - Bubeneč",
        "postalCode": "160 00",
        "addressCountry": "CZ"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.1018,
        "longitude": 14.4034
      },
      "areaServed": [
        { "@type": "City", "name": "Praha 6" },
        { "@type": "City", "name": "Dejvice" },
        { "@type": "City", "name": "Bubeneč" },
        { "@type": "City", "name": "Hradčany" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "37"
      },
      "knowsAbout": ["Řidičský průkaz skupina B", "Řidičský průkaz skupina A", "Kondiční jízdy", "Vrácení řidičského průkazu"],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Thursday"],
          "opens": "14:00",
          "closes": "18:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61569570703723",
        "https://www.instagram.com/autoskola_red/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Autoškola RED",
      "url": "https://autoskola.red",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://autoskola.red/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kde se nachází Autoškola RED?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Autoškola RED sídlí v Praze 6 na Puškinově náměstí 681/3, v Dejvicích (Archi HUB)."
          }
        },
        {
          "@type": "Question",
          "name": "Jaké vozy používáte k výcviku?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "K výcviku používáme moderní vozy Škoda Kodiaq 2024. Nabízíme výcvik s manuální i automatickou převodovkou."
          }
        },
        {
          "@type": "Question",
          "name": "Jak dlouho trvá kurz v autoškole?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standardní délka kurzu je přibližně 3 měsíce. Nabízíme také rychlokurz Expres, který lze stihnout za 1 měsíc, nebo Economy tempo v délce 4-6 měsíců."
          }
        },
        {
          "@type": "Question",
          "name": "Nabízíte studentské slevy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ano, pro studenty máme speciální balíček Standard - Student se slevou 2 000 Kč oproti běžné ceně."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <SEO
        title="Autoškola RED Praha 6 Dejvice | Řidičák snadno a v pohodě"
        description="Prémiová autoškola v srdci Dejvic. Moderní výcvik v nových vozech Škoda Kodiaq 2024. Individuální přístup, klidné jízdy a vysoká úspěšnost u zkoušek v Praze 6."
        canonical="https://autoskola.red/"
        image="/images/skoda-kodiaq-dejvice.png"
        structuredData={structuredData}
      />
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
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Nová pobočka Autoškola RED v Dejvicích otevřena
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              Řidičák <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                snadno a <br className="hidden md:inline" />v pohodě.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6">
              Získejte řidičák v klidu a bez stresu přímo v srdci Dejvic. Spojujeme moderní
              přístup s precizním výcvikem v nejnovějších vozech pro váš jistý start do provozu.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg font-bold rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer">
                <Link href="/registrace">
                  Chci řidičák <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50 cursor-pointer">
                <Link href="/cenik">
                  Ceník
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8 flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Spokojený student autoškoly v Praze 6 č. ${i}`} className="w-full h-full object-cover" />
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
                <a href="https://search.google.com/local/reviews?placeid=ChIJ8-bh676VC0cRx9a6vFNu-i4" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <span className="font-bold text-foreground">5.0 na Google</span> (37+ recenzí)
                </a>
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
              src="/images/skoda-kodiaq-dejvice.png"
              alt="Instrukční vůz Škoda Kodiaq 2024 na Vítězném náměstí"
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
              className="absolute -right-8 bottom-[45%] z-20 glass p-4 rounded-2xl shadow-xl flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CarIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Nové vozy</p>
                <p className="text-xs text-muted-foreground">Škoda Kodiaq 2024</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Promotional Packages Section */}
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
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
            <Card className="border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">VIP Expres</CardTitle>
                <CardDescription>Individuální přístup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="text-4xl font-extrabold text-foreground">37.900 Kč</span>
                  <span className="text-muted-foreground ml-2">/ kurz</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Všechny výhody balíčků Economy a Standard",
                    "Expresní kurz (cca 1 měsíc)",
                    "Individuální plánování jízd",
                    "Vyzvednutí doma/v práci",
                    "Přistavení vozu ke zkoušce",
                    "Individuální konzultace",
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
                    Vybrat VIP
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Button asChild size="lg" variant="secondary" className="h-12 px-8 rounded-full font-semibold hover:bg-primary hover:text-white transition-all relative z-10 hover:scale-105 shadow-sm hover:shadow-lg">
            <Link href="/cenik">
              Zobrazit kompletní ceník <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials / Google Reviews Section - Moved here for better conversion */}
      <section id="recenze" className="py-24 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-8">
            <div className="relative inline-flex flex-col items-center group">
              {/* Specialized Animated Gold Border */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-200 via-yellow-500 to-amber-200 rounded-[2.6rem] opacity-75 blur-[2px] group-hover:opacity-100 transition-opacity animate-pulse" />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-300 via-yellow-600 to-amber-300 rounded-[2.55rem] animate-shimmer bg-[length:200%_100%]" />

              <div className="relative flex flex-col items-center gap-6 p-10 md:p-14 bg-white rounded-[2.5rem] shadow-2xl z-10 w-full max-w-2xl">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-8xl md:text-9xl font-black text-foreground tracking-tighter drop-shadow-sm">5.0</span>
                  </div>
                  <div className="flex text-amber-500 gap-1 pb-2">
                    <Star className="w-10 h-10 md:w-12 h-12 fill-current drop-shadow-md" />
                    <Star className="w-10 h-10 md:w-12 h-12 fill-current drop-shadow-md" />
                    <Star className="w-10 h-10 md:w-12 h-12 fill-current drop-shadow-md" />
                    <Star className="w-10 h-10 md:w-12 h-12 fill-current drop-shadow-md" />
                    <Star className="w-10 h-10 md:w-12 h-12 fill-current drop-shadow-md" />
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="space-y-2">
                    <p className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight">Excelentní hodnocení</p>
                    <p className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em]">Nejlépe hodnocená autoškola na Googlu</p>
                  </div>

                  <Button asChild size="lg" className="rounded-full bg-white border-2 border-amber-500/30 text-amber-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 h-14 px-10 text-lg font-bold shadow-lg hover:shadow-primary/40 group-hover:scale-105 active:scale-95">
                    <a href="https://search.google.com/local/writereview?placeid=ChIJ8-bh676VC0cRx9a6vFNu-i4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Napsat recenzi na Google
                    </a>
                  </Button>
                </div>

                {/* Subtle elite glow elements */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-12 h-12 text-amber-500 fill-current rotate-12" />
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-10">
                  <Star className="w-12 h-12 text-amber-500 fill-current -rotate-12" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
                Co o nás říkají žáci?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Vaše spokojenost je pro nás nejlepší vizitkou. S hodnocením 5.0 na Googlu patříme mezi nejlépe hodnocené autoškoly v Praze.
              </p>
            </div>
          </div>

          <Carousel
            setApi={setApiState}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {reviews.map((review, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full p-8 bg-background rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col"
                  >
                    <div className="flex text-amber-500 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-foreground/90 italic mb-6 flex-grow">"{review.text}"</p>
                    <div className="flex items-center justify-between border-t pt-4">
                      <span className="font-bold">{review.name}</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    {/* Google Icon Badge */}
                    <div className="absolute top-6 right-8 opacity-10">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                        <path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-1.82 2.56l2.84 2.2c1.66-1.53 2.62-3.79 2.62-6.48 0-.46-.04-.9-.11-1.32H12.48z" fill="#4285F4" />
                        <path d="M12.48 21c2.43 0 4.47-.81 5.96-2.18l-2.84-2.2c-.81.54-1.85.86-3.12.86-2.38 0-4.4-1.61-5.12-3.77L4.4 16.03C5.89 19 8.94 21 12.48 21z" fill="#34A853" />
                        <path d="M7.36 13.75c-.18-.54-.28-1.12-.28-1.75s.1-1.21.28-1.75V7.92H4.4c-.65 1.25-1.02 2.67-1.02 4.18s.37 2.93 1.02 4.18l2.96-2.53z" fill="#FBBC05" />
                        <path d="M12.48 6.44c1.32 0 2.5.45 3.44 1.35l2.58-2.58C16.94 3.65 14.91 3 12.48 3c-3.54 0-6.59 2-8.08 4.92l2.96 2.33c.72-2.16 2.74-3.77 5.12-3.77z" fill="#EA4335" />
                      </svg>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Conditional navigation arrows if needed, but autoplay is primary */}
          </Carousel>

          <div className="mt-16 text-center">
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJ8-bh676VC0cRx9a6vFNu-i4"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Zobrazit všech 37+ recenzí na Google <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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

      {/* Mid-Page CTA - Redesigned */}
      <section className="py-12">
        <div className="container">
          <div className="relative rounded-[2rem] overflow-hidden p-8 md:p-12 bg-gradient-to-br from-primary/5 to-orange-500/5 border border-primary/10">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  Nečekejte, až „bude čas“. <br />
                  <span className="text-primary">Ten správný čas je teď.</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Registrace zabere jen 2 minuty. První jízdu naplánujeme obratem.
                </p>
              </div>

              <div className="shrink-0">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer">
                  <Link href="/registrace">
                    Přihlásit se online <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              Proč si vybrat nás?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Děláme autoškolu jinak. Moderně, v klidu a s úsměvem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Klidný přístup</h3>
              <p className="text-muted-foreground">
                Žádný křik, žádný stres. Naši instruktoři jsou profesionálové s lidským přístupem a trpělivostí.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Moderní vozy</h3>
              <p className="text-muted-foreground">
                Výcvik probíhá v nových a bezpečných vozidlech s moderními asistenty a klimatizací.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Slevy pro studenty</h3>
              <p className="text-muted-foreground">
                Studujete? Ukažte nám ISIC a my vám dáme slevu na základní výcvik. Podporujeme vzdělání!
              </p>
            </div>

            {/* Highlight 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Banknote className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lze platit splátkami</h3>
              <p className="text-muted-foreground">
                Nemusíte platit vše najednou. Kurzovné si můžete rozložit do několika splátek bez navýšení.
              </p>
            </div>

            {/* Highlight 5 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Všechny materiály</h3>
              <p className="text-muted-foreground">
                Učebnice a přístup k online testům máte v ceně. Nic dalšího si kupovat nemusíte.
              </p>
            </div>

            {/* Highlight 6 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-3xl border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Jednoduché rezervace</h3>
              <p className="text-muted-foreground">
                Jízdy si plánujete online přes náš rezervační systém. Kdykoliv a odkudkoliv.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text / Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-foreground">
                  Autoškola Praha 6 – Kontakt
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Najdete nás v moderních prostorách <strong>Archi HUB v Dejvicích</strong>. Jsme ideální autoškola pro studenty ČVUT, VŠCHT a obyvatele Prahy 6.
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

      <section className="pb-24 overflow-hidden">
        <div className="container">
          <div className="relative rounded-[3rem] bg-slate-50 border border-slate-200 p-8 md:p-16 overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10">
              <div className="max-w-4xl mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Autoškola Praha 6 Dejvice: <br />
                  <span className="text-primary">Vaše cesta začíná u nás</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Jsme lokální autoškola se sídlem v Bubenči, kousek od metra Dejvická. Naším revírem je celá Praha 6, od Kulaťáku až po Břevnov.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* SEO Card 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Lokalita Dejvická & Kulaťák</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Výcvik v Dejvicích a Bubenči nabízí ideální mix klidných ulic a náročných uzlů. Naučíme vás suverénně zvládat Vítězné náměstí (Kulaťák) i úzké uličky Prahy 6.
                  </p>
                </div>

                {/* SEO Card 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Zázemí u areálu ČVUT</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Najdete nás v moderním prostoru Archi HUB, přímo v srdci technického kampusu. Jsme jasná volba pro studenty ČVUT, VŠCHT i pracující z okolí Prahy 6.
                  </p>
                </div>

                {/* SEO Card 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Znalost zkušebních tras</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Známe každou "záludnost" zkušebních tras v oblasti Dejvic. Připravíme vás tak, že vás u závěrečné zkoušky v Autoškole RED nic nepřekvapí.
                  </p>
                </div>
              </div>
            </div>
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
                Stačí vyplnit krátký formulář a my se vám ozveme s nejbližším termínem. Autoškola Praha 6 nemusí být stres, když víte, do čeho jdete.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 min-w-[300px]">
              <Button asChild size="lg" className="h-16 text-xl bg-white text-primary hover:bg-gray-100 border-0 rounded-2xl shadow-2xl cursor-pointer">
                <Link href="/registrace">
                  Online přihláška
                </Link>
              </Button>
              <div className="text-center text-white/60 text-sm">
                Nezávazná registrace
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
