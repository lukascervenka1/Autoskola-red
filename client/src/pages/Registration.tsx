import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { CheckCircle2, Wallet, GraduationCap, Trophy, MapPin, BadgePercent, FileText, Download, Info } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const formSchema = z.object({
  firstName: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  lastName: z.string().min(2, "Příjmení musí mít alespoň 2 znaky"),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 15, {
    message: "Musíte být starší 15 let",
  }),
  email: z.string().email("Neplatný email"),
  phone: z.string().min(9, "Telefon musí mít alespoň 9 znaků"),
  course: z.enum(["B", "B_automat", "AM", "A1", "A2", "A", "combined"]),
  variant: z.enum(["economy", "standard", "student", "expres", "return", "conditioning", "other"]),
  consent: z.boolean().default(false).refine((val) => val === true, {
    message: "Musíte souhlasit se zpracováním osobních údajů",
  }),
});

import { useState, useEffect } from "react";

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Přihláška do autoškoly",
    "provider": {
      "@type": "DrivingSchool",
      "name": "Autoškola RED",
      "url": "https://autoskola.red",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Puškinovo náměstí 681/3",
        "addressLocality": "Praha 6 - Bubeneč",
        "postalCode": "160 00",
        "addressCountry": "CZ"
      }
    },
    "areaServed": ["Praha 6", "Dejvice", "Bubeneč"]
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      phone: "",
      course: undefined,
      variant: undefined,
      consent: false,
    } as any,
  });

  // Handle pre-selection from URL parameters and scroll to top
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Logic for pre-selection from URL parameters

      const params = new URLSearchParams(window.location.search);
      const variant = params.get("variant");
      const course = params.get("course");

      // Use a small timeout to ensure form is fully initialized
      const timer = setTimeout(() => {
        if (course) {
          form.setValue("course", course as any);
        }
        if (variant) {
          form.setValue("variant", variant as any);
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [form]);

  async function onSubmit(values: any) {
    try {
      // Send to Formspree
      await axios.post("https://formspree.io/f/xvzbowwd", {
        ...values,
        _subject: `Nová závazná přihláška: ${values.firstName} ${values.lastName}`,
      });
      setIsSubmitted(true);
      toast.success("Přihláška odeslána!", {
        description: "Potvrzení vám přijde na email. Brzy se vám ozveme.",
      });
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Chyba při odesílání", {
        description: "Zkuste to prosím znovu nebo nám zavolejte.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <SEO
        title="Online přihláška | Autoškola Praha 6 Dejvice 2026"
        description="Závazná online přihláška do Autoškoly RED v Dejvicích. Vyberte si kurz B, B automat nebo motocykl. Začněte v Praze 6 ještě dnes."
        canonical="https://autoskola.red/registrace"
        image="/images/skoda-kodiaq-dejvice.webp"
        structuredData={structuredData}
      />
      <Navbar />

      <div className="pt-24 pb-12 container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10 space-y-4">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
              Získejte řidičák <span className="text-primary text-nowrap">v klidu a v pohodě</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Registrace je prvním krokem k vaší nezávislosti. Nečekejte na fronty, vše vyřešíme online a o zbytek papírování se postaráme my.
            </p>
          </div>


          <Card className="border border-black/10 shadow-2xl bg-white/90 backdrop-blur-md overflow-hidden ring-1 ring-black/5">
            <CardHeader className="bg-gray-50/50 border-b border-black/5 p-8">
              <CardTitle className="text-2xl font-black flex items-center gap-2">
                <div className="w-2 h-8 bg-primary rounded-full" />
                Vaše cesta začíná zde
              </CardTitle>
              <CardDescription className="text-base font-medium mt-2">
                Vyplňte krátkou přihlášku a my se vám ozveme zpět s dalším postupem.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center p-8 space-y-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-gray-900 tracking-tight">Gratulujeme, jste v systému! 🎉</h3>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Děkujeme za důvěru. Vaše přihláška dorazila k nám do týmu RED. Teď si dejte kávu, my se na to podíváme a <span className="font-bold text-foreground">do 24 hodin se vám ozveme</span> s detaily první jízdy.
                    </p>
                  </div>
                  <Button size="lg" variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
                    Vyplnit další přihlášku
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field for spam protection */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Jméno</FormLabel>
                            <FormControl>
                              <Input placeholder="Jan" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Příjmení</FormLabel>
                            <FormControl>
                              <Input placeholder="Novák" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Věk</FormLabel>
                            <FormControl>
                              <Input type="number" placeholder="18" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+420 777 666 555" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jan.novak@email.cz" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vyberte kurz</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full overflow-hidden">
                                  <div className="truncate w-full text-left">
                                    <SelectValue placeholder="Zvolte typ kurzu" />
                                  </div>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="B">Skupina B (Osobní automobil)</SelectItem>
                                <SelectItem value="B_automat">Skupina B (Automat)</SelectItem>
                                <SelectItem value="AM">Skupina AM (Moped od 15 let)</SelectItem>
                                <SelectItem value="A1">Skupina A1 (Motocykl od 16 let)</SelectItem>
                                <SelectItem value="A2">Skupina A2 (Motocykl od 18 let)</SelectItem>
                                <SelectItem value="A">Skupina A (Motocykl bez omezení)</SelectItem>
                                <SelectItem value="combined">Sdružený výcvik B + A2/A</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="variant"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Varianta kurzu</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full overflow-hidden">
                                  <div className="truncate w-full text-left">
                                    <SelectValue placeholder="Zvolte variantu" />
                                  </div>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="economy">Economy (B - nejpohodovější tempo)</SelectItem>
                                <SelectItem value="standard">Standard (B - 3 Měsíce, Moto - 2 Měsíce)</SelectItem>
                                <SelectItem value="student">Standard - Student (B s mentorem od 17let)</SelectItem>
                                <SelectItem value="expres">Expres 1 Měsíc</SelectItem>
                                <SelectItem value="return">Vrácení ŘP</SelectItem>
                                <SelectItem value="conditioning">Kondiční Jízdy (balíček 10jízd)</SelectItem>
                                <SelectItem value="other">Jiná služba</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="text-sm text-muted-foreground -mt-4 mb-4">
                      Nejste si jistí? Můžeme to probrat i telefonicky na čísle <a href="tel:+420608913000" className="font-bold text-primary hover:underline">+420 608 913 000</a>.
                    </div>

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Souhlasím se zpracováním osobních údajů
                            </FormLabel>
                            <FormDescription>
                              Vaše údaje použijeme pouze pro účely registrace do kurzu.
                            </FormDescription>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
                      Odeslat přihlášku online <CheckCircle2 className="ml-2 w-6 h-6" />
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          {/* Important Notice - Documents (Moved & Compact) */}
          <div className="mt-8 p-5 bg-primary/5 border border-primary/10 rounded-2xl flex flex-col sm:flex-row items-center gap-5 shadow-sm">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0 border border-primary/5 text-primary">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1 text-center sm:text-left space-y-1">
              <h3 className="font-bold text-base flex items-center justify-center sm:justify-start gap-2">
                Nezapomeňte na lékařský posudek <Info className="w-3.5 h-3.5 text-primary/60" />
              </h3>
              <p className="text-xs text-muted-foreground leading-snug max-w-md">
                Pro začátek výcviku potřebujete potvrzení od lékaře. Stáhněte si formulář a nechte ho potvrdit.
              </p>
            </div>
            <Button asChild size="sm" className="rounded-full gap-2 px-6 py-5 h-auto shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all font-bold group text-sm">
              <a href="/docs/posudek-o-zdravotni-zpusobilosti.pdf" download="Lekarsky_posudek_Autoskola_RED.pdf">
                Stáhnout PDF <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center justify-center text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-colors w-full sm:w-40 h-32">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 shrink-0">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm leading-tight">Řidičák na splátky</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-colors w-full sm:w-40 h-32">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm leading-tight">Sleva pro studenty</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-colors w-full sm:w-40 h-32">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm leading-tight">Vysoká úspěšnost</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-colors w-full sm:w-40 h-32">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm leading-tight">Místa na metru</span>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-colors w-full sm:w-40 h-32">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 shrink-0">
                <BadgePercent className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm leading-tight">Záruka nejlepší ceny</span>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
