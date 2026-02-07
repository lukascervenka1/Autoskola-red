import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { SEO } from "@/components/SEO";

export default function Terms() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20 selection:text-primary">
            <SEO
                title="Obchodní podmínky | Autoškola RED"
                description="Všeobecné obchodní podmínky Autoškoly RED."
                canonical="https://autoskola.red/obchodni-podminky"
            />
            <Navbar />
            <main className="container pt-32 pb-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Všeobecné obchodní podmínky</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead">
                        Tyto obchodní podmínky upravují smluvní vztah mezi provozovatelem autoškoly a žadatelem o řidičské oprávnění.
                    </p>

                    <div className="p-6 bg-muted/50 rounded-lg border border-border my-8">
                        <h3 className="text-xl font-bold mb-2 mt-0">Doplnit text obchodních podmínek</h3>
                        <p className="mb-0">
                            Zde bude vložen plný text všeobecných obchodních podmínek. Text připravíme a vložíme později.
                        </p>
                    </div>

                    <p>
                        Plné znění obchodních podmínek je k dispozici také k nahlédnutí v provozovně autoškoly.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
