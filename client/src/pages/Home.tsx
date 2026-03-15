
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, MapPin, Phone, Mail, Star, Users, Zap, Award, CheckCircle2, Clock, Shield, Navigation, Heart, Car, GraduationCap, Banknote, BookOpen, CalendarCheck, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { MobileNav } from "@/components/MobileNav";
import { Navbar } from "@/components/Navbar";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { lazy, Suspense } from "react";

const PricingSection = lazy(() => import("@/components/PricingSection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const LicenseTypesSection = lazy(() => import("@/components/LicenseTypesSection"));

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

const faqData = [
  {
    question: "Kolik přednášek / teorie musím absolvovat?",
    answer: "Celkem 4 přednášky, ve kterých je zahrnut i zdravotnický kurz. Bez splnění této podmínky nelze žáka připustit k závěrečné zkoušce."
  },
  {
    question: "Jak probíhá výuka?",
    answer: "Délka a intenzita závisí na typu kurzu. Například standardní lekce trvá 2x 45 minut (tedy 90 minut čistého času)."
  },
  {
    question: "Mohu si vybrat, s jakým autem chci kurz absolvovat?",
    answer: "Výběr vozu je vázán na konkrétního instruktora. Pokud si zvolíte kurz s automatickou převodovkou, v naší autoškole momentálně disponujeme moderním vozem Škoda Kodiaq."
  },
  {
    question: "Musím mít nějaké potvrzení od lékaře?",
    answer: "Ano, to je zcela klíčové. Bez platné lékařské prohlídky a potvrzení o zdravotní způsobilosti není ze zákona možné zahájit praktický výcvik."
  },
  {
    question: "Jak vypadá závěrečná zkouška?",
    answer: "Zkouška začíná písemným testem z pravidel silničního provozu. Po jeho úspěšném absolvování následuje praktická jízda s komisařem, kde prokážete své řidičské dovednosti."
  },
  {
    question: "Bojím se řídit, je možné si to nejdřív vyzkoušet na simulátoru?",
    answer: "Samozřejmě! To je u nás běžný postup. Nemusíte mít strach – začneme v naprostém klidu na trenažéru. Do ostrého provozu půjdeme až ve chvíli, kdy získáte potřebnou jistotu. Rozumíme stresu začátečníků a rozhodně vás nebudeme tlačit do složitých situací dříve, než na ně budete připraveni."
  },
  {
    question: "Jak se nejlépe připravit na závěrečnou zkoušku?",
    answer: "Základem je pravidelná docházka a aktivní příprava během celého kurzu. Doporučujeme průběžně procvičovat online testy – naše autoškola vám poskytne přístup k aplikaci, kde si můžete testy zkoušet neomezeně a zcela zdarma."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
} as any;

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
} as any;

const structuredDataStatic = [
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
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
];

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


  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <SEO
        title="Autoškola RED Praha 6 Dejvice | Řidičák snadno a v pohodě"
        description="Prémiová autoškola v srdci Dejvic. Moderní výcvik v nových vozech Škoda Kodiaq 2024. Individuální přístup, klidné jízdy a vysoká úspěšnost u zkoušek v Praze 6."
        canonical="https://autoskola.red/"
        image="/images/skoda-kodiaq-dejvice.png"
        structuredData={structuredDataStatic}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 bg-background">
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] rounded-full opacity-30 translate-x-1/3 -translate-y-1/4 bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] rounded-full opacity-20 -translate-x-1/3 translate-y-1/4 bg-[radial-gradient(circle,_var(--color-accent)_0%,_transparent_70%)]" />

        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 will-change-transform will-change-opacity"
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] lg:h-[700px] mt-8 lg:mt-0 will-change-transform"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] md:rounded-[3rem] rotate-3 transform scale-95" />
            <img
              src="/images/skoda-kodiaq-dejvice.png"
              alt="Instrukční vůz Škoda Kodiaq 2024 na Vítězném náměstí"
              className="relative rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl object-cover h-full w-full z-10 border-4 border-white"
              loading="eager"
            />

            {/* Floating Badge 1 - Hidden on small mobile */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -left-4 md:-left-12 top-1/4 z-20 glass p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 max-w-[180px] md:max-w-[250px]"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Shield className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-bold text-xs md:text-base text-foreground">Bezpečnost</p>
                <p className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">Moderní asistenti</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 - Hidden on small mobile */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 md:-right-8 bottom-[45%] z-20 glass p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <CarIcon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-bold text-xs md:text-base text-foreground">Nové vozy</p>
                <p className="text-[10px] md:text-xs text-muted-foreground whitespace-nowrap">Kodiaq 2024</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Promotional Packages Section */}
      <Suspense fallback={<div className="h-96" />}>
        <PricingSection />
      </Suspense>

      {/* Testimonials / Google Reviews Section */}
      <Suspense fallback={<div className="h-96" />}>
        <ReviewsSection />
      </Suspense>

      {/* License Types Section */}
      <Suspense fallback={<div className="h-96" />}>
        <LicenseTypesSection />
      </Suspense>

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
                Jízdy si plánujete jednoduše přes online kalendáře pro lepší a efektivní plánování času vašich jízd.
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white relative">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              Často kladené otázky
            </h2>
            <p className="text-lg text-muted-foreground">
              Vše, co potřebujete vědět před zahájením kurzu v Autoškole RED.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary/20 rounded-2xl px-6 border-none transition-all duration-200 data-[state=open]:bg-secondary/40"
              >
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
