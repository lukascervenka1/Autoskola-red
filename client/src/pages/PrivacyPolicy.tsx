import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { SEO } from "@/components/SEO";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20 selection:text-primary">
            <SEO
                title="Ochrana osobních údajů | Autoškola RED"
                description="Informace o zpracování osobních údajů (GDPR) v Autoškole RED."
                canonical="https://autoskola.red/ochrana-osobnich-udaju"
            />
            <Navbar />
            <main className="container pt-32 pb-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Ochrana osobních údajů</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead">
                        Informace o zpracování osobních údajů v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR).
                    </p>

                    <h2>1. Správce osobních údajů</h2>
                    <p>
                        Správcem osobních údajů je <strong>Autoškola RED</strong>, se sídlem Puškinovo náměstí 681/3, 160 00 Praha 6 (dále jen "správce").
                    </p>

                    <h2>2. Jaké údaje zpracováváme</h2>
                    <p>
                        Zpracováváme osobní údaje, které nám poskytnete v souvislosti s využíváním našich služeb (přihláška do autoškoly, kontaktní formulář), zejména:
                    </p>
                    <ul>
                        <li>Jméno a příjmení</li>
                        <li>Datum narození</li>
                        <li>Adresa bydliště</li>
                        <li>E-mailová adresa</li>
                        <li>Telefonní číslo</li>
                        <li>Údaje o zdravotní způsobilosti (pro účely výcviku)</li>
                    </ul>

                    <h2>3. Účel zpracování</h2>
                    <p>
                        Vaše osobní údaje zpracováváme za účelem:
                    </p>
                    <ul>
                        <li>Poskytování služeb autoškoly (teoretická a praktická výuka)</li>
                        <li>Komunikace s vámi ohledně průběhu výcviku</li>
                        <li>Plnění zákonných povinností (evidence žáků, přihlašování ke zkouškám)</li>
                        <li>Zasílání obchodních sdělení (pokud jste k tomu udělili souhlas)</li>
                    </ul>

                    <h2>4. Doba uchování údajů</h2>
                    <p>
                        Osobní údaje uchováváme po dobu nezbytnou k výkonu práv a povinností vyplývajících ze smluvního vztahu a dále po dobu vyplývající z obecně závazných právních předpisů (např. zákon o archivnictví).
                    </p>

                    <h2>5. Vaše práva</h2>
                    <p>
                        Máte právo:
                    </p>
                    <ul>
                        <li>Požadovat od správce přístup k vašim osobním údajům</li>
                        <li>Na opravu nepřesných osobních údajů</li>
                        <li>Na výmaz osobních údajů („právo být zapomenut“)</li>
                        <li>Na omezení zpracování údajů</li>
                        <li>Vznést námitku proti zpracování</li>
                        <li>Na přenositelnost údajů</li>
                    </ul>

                    <h2>6. Zabezpečení údajů</h2>
                    <p>
                        Správce prohlašuje, že přijal veškerá vhodná technická a organizační opatření k zabezpečení osobních údajů.
                    </p>

                    <h2>7. Kontakt</h2>
                    <p>
                        V případě dotazů týkajících se zpracování osobních údajů nás můžete kontaktovat na e-mailu: <a href="mailto:info@autoskola.red">info@autoskola.red</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
