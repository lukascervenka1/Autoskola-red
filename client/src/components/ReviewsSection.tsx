
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import * as React from "react";

interface Review {
    name: string;
    text: string;
    date: string;
}

const reviewsData: Review[] = [
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

interface ReviewsSectionProps {
    reviews?: Review[];
}

export default function ReviewsSection({ reviews = reviewsData }: ReviewsSectionProps) {
    const [apiState, setApiState] = React.useState<CarouselApi>();

    React.useEffect(() => {
        if (!apiState) return;
        const intervalId = setInterval(() => {
            apiState.scrollNext();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [apiState]);

    return (
        <section id="recenze" className="py-24 bg-white relative overflow-hidden">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-8">
                    <div className="relative inline-flex flex-col items-center group">
                        {/* Simplified Premium Glow - Single layer, less CPU intensive */}
                        <div className="absolute -inset-[3px] bg-gradient-to-r from-amber-400/20 via-yellow-500/40 to-amber-400/20 rounded-[2.7rem] blur-sm opacity-70" />
                        
                        <div className="relative flex flex-col items-center gap-6 p-10 md:p-14 bg-white rounded-[2.5rem] shadow-2xl z-10 w-full max-w-2xl border border-amber-500/20">
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
                                <Button asChild size="lg" className="rounded-full bg-white border-2 border-amber-500/30 text-amber-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 h-14 px-10 text-lg font-bold shadow-lg hover:shadow-primary/40 active:scale-95">
                                    <a href="https://search.google.com/local/writereview?placeid=ChIJ8-bh676VC0cRx9a6vFNu-i4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        Napsat recenzi na Google
                                    </a>
                                </Button>
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
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
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
    );
}
