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
import { CheckCircle2, Wallet, GraduationCap, Trophy, MapPin, BadgePercent } from "lucide-react";
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
  course: z.enum(["B", "B_automat", "AM", "A1", "A2", "A"]),
  variant: z.enum(["standart", "student", "expres", "return", "conditioning", "other"]),
  consent: z.boolean().default(false).refine((val) => val === true, {
    message: "Musíte souhlasit se zpracováním osobních údajů",
  }),
});

export default function Registration() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      firstName: "Jan",
      lastName: "Novák",
      age: "",
      email: "",
      phone: "",
      variant: undefined,
      consent: false,
    } as any,
  });

  async function onSubmit(values: any) {
    try {
      // Send to Formspree
      await axios.post("https://formspree.io/f/xvzbowwd", {
        ...values,
        _subject: `Nová závazná přihláška: ${values.firstName} ${values.lastName}`,
      });
      toast.success("Přihláška odeslána!", {
        description: "Potvrzení vám přijde na email. Brzy se vám ozveme.",
      });
      form.reset();
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
        title="Online Přihláška | Autoškola RED Praha 6"
        description="Nezávazná přihláška do autoškoly. Vyplňte formulář online a začněte s výcvikem ještě dnes. Skupina B a motorky."
      />
      <Navbar />

      <div className="pt-24 pb-12 container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Přihláška do autoškoly</h1>
            <p className="text-muted-foreground">Vyplňte formulář a začněte svou cestu za řidičákem ještě dnes.</p>
          </div>

          <Card className="border border-black/10 shadow-lg bg-white/80 backdrop-blur-md">
            <CardHeader>
              <CardTitle>Osobní údaje</CardTitle>
              <CardDescription>Všechny údaje jsou u nás v bezpečí.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Zvolte typ kurzu" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="B">Skupina B (Osobní automobil)</SelectItem>
                              <SelectItem value="B_automat">Skupina B (Automat)</SelectItem>
                              <SelectItem value="AM">Skupina AM (Moped od 15 let)</SelectItem>
                              <SelectItem value="A1">Skupina A1 (Motocykl od 16 let)</SelectItem>
                              <SelectItem value="A2">Skupina A2 (Motocykl od 18 let)</SelectItem>
                              <SelectItem value="A">Skupina A (Motocykl bez omezení)</SelectItem>
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
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Zvolte variantu" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="standart">Standart (B - 3 Měsíce, Moto - 2 Měsíce)</SelectItem>
                              <SelectItem value="student">Standart - Student (B s mentorem od 17let)</SelectItem>
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
                    Nejste si jistí? Můžeme to probrat i telefonicky.
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

                  <Button type="submit" size="lg" className="w-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                    Odeslat nezávaznou přihlášku <CheckCircle2 className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

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
