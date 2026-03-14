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
                noindex={true}
            />
            <Navbar />
            <main className="container pt-32 pb-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Všeobecné obchodní podmínky</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-foreground/80">
                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">I. Smlouva</h2>
                        <p>
                            Smlouva mezi právnickou osobou Jiří Červenka, IČO: 63954508, DIČ: CZ7204210046, se sídlem Pod Vodárnou 215, Doubravčice, 282 01 (dále jen „autoškola Czech“) a žadatelem o přijetí k výuce a výcviku (dále jen „žadatel“) je uzavřena v okamžiku, kdy autoškola od žadatele převezme řádně potvrzený a platný posudek o zdravotní způsobilosti k řízení motorových vozidel a současně řádně vyplněnou a podepsanou žádost o přijetí k výuce a výcviku (dále jen „žádost“). Posudek o zdravotní způsobilosti k řízení motorových vozidel, který ke dni podání žádosti autoškole nesmí být starší více než tři (3) měsíce, potvrzuje praktický lékař a současně řádně vyplněnou a podepsanou Smlouvou.
                        </p>
                        <p>
                            Žadatel a/nebo zákonný zástupce nezletilého žadatele současně podpisem žádosti prohlašuje a potvrzuje, že všechny údaje uvedené v žádosti jsou pravdivé a žadatel splňuje všechny podmínky přijetí k výuce a výcviku dle platné právní úpravy, a to zejména dle § 13 zákona č. 247/2000 Sb., zákon o získávání a zdokonalování odborné způsobilosti k řízení motorových vozidel a o změnách některých zákonů, ve znění pozdějších předpisů (dále jen „Zákon“).
                        </p>
                        <p>
                            Autoškola Czech v souladu s uzavřenou Smlouvou a příslušnými platnými právními předpisy poskytne žadateli teoretickou výuku a praktický výcvik k získání nebo rozšíření řidičského oprávnění v ujednaném rozsahu, přičemž po řádném ukončení výuky a výcviku přihlásí žadatele k závěrečné zkoušce z odborné způsobilosti (dále jen „závěrečná zkouška“) dle podmínek uvedených ve Smlouvě a v těchto VOP.
                        </p>
                        <p>
                            Žadatel a/nebo zákonný zástupce nezletilého žadatele stvrzuje svým podpisem na Smlouvě, že VOP řádně a zcela pochopil a porozuměl jim, hodlá se jimi řídit a v plném rozsahu a bez jakýchkoliv výhrad je akceptuje.
                        </p>
                        <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                            <p className="font-bold mb-1">Kontaktní údaje autoškoly:</p>
                            <p className="mb-0">E-mail: <a href="mailto:info@autoskola.red" className="text-primary hover:underline">info@autoskola.red</a></p>
                            <p className="mb-0">Telefon: <a href="tel:+420608913000" className="text-primary hover:underline">608 913 000</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">II. Cena služeb autoškoly</h2>
                        <p>
                            Úplný ceník služeb, doplňkových služeb a poplatků autoškoly (dále jen „ceník“) je k dispozici v provozovně autoškoly a uvedený na webových stránkách autoškoly. Žadatel a/nebo zákonný zástupce nezletilého žadatele stvrzuje svým podpisem na Smlouvě, že ceník řádně a zcela pochopil, porozuměl mu v plném rozsahu a bez jakýchkoliv výhrad jej akceptuje.
                        </p>
                        <p>
                            Cenu za sjednanou výuku a výcvik (dále jen „školné“) uhradí žadatel a/nebo zákonný zástupce nezletilého žadatele nejpozději dva (2) kalendářní dny před stanoveným dnem zahájení příslušné výuky či výcviku na bankovní účet autoškoly.
                        </p>
                        <div className="my-6 p-6 bg-primary/5 rounded-xl border border-primary/20">
                            <h4 className="text-lg font-bold mb-2">Bankovní spojení Autoškola Czech:</h4>
                            <p className="text-xl font-mono text-primary font-bold mb-0">Účet č. 5698698/5500</p>
                            <p className="text-sm text-muted-foreground mt-1">vedený u Raiffeisenbank</p>
                        </div>
                        <p>
                            Po uzavření Smlouvy autoškola rovněž předá či jinak poskytne žadateli a/nebo zákonnému zástupci nezletilého žadatele příslušné číslo bankovního účtu autoškoly, jakož i variabilní symbol pro identifikaci platby. Při platbě na bankovní účet autoškoly uvede žadatel a/nebo zákonný zástupce nezletilého žadatele příslušný variabilní symbol, přičemž do poznámky uvede jméno a příjmení daného žadatele. Školné je možno uhradit i v hotovosti v souladu s příslušnými právními předpisy.
                        </p>
                        <p>
                            V případě, že bude ze strany autoškoly povolena platba školného ve splátkách, uhradí žadatel a/nebo zákonný zástupce nezletilého žadatele první splátku ve výši 50 % školného nejpozději dva (2) kalendářní dny před stanoveným dnem zahájení příslušné výuky či výcviku na příslušný bankovní účet autoškoly. Zbylou část školného uhradí po vyčerpání výše splátky školného, tj. před dalším výcvikem. Výcvik nebude prováděn, pokud nebude kryt platbou školného.
                        </p>
                        <p>
                            Školné nezahrnuje jakoukoli výuku a/nebo výcvik nad rámec učební osnovy podle Zákona, úhradu zameškané a/nebo neomluvené a/nebo zmařené výuky a/nebo výcviku ze strany žadatele, zpracovatelské poplatky, případné úroky z prodlení, úhradu způsobené škody, správní poplatky při závěrečné zkoušce, ani jakékoliv související náklady žadatele, vynaložené v souvislosti s výukou a/nebo výcvikem a/nebo přípravou k absolvování zkoušky z odborné způsobilosti k řízení motorového vozidla.
                        </p>
                        <p>
                            V případě prodlení s úhradou jakékoli platby dle ceníku (a to včetně jakékoli splátky školného) uhradí žadatel a/nebo zákonný zástupce nezletilého žadatele autoškole zpracovatelský poplatek za upomínání a/nebo vymáhání dané dlužné částky dle ceníku. Kromě toho je autoškola oprávněna požadovat úhradu úroku z prodlení dle platné právní úpravy.
                        </p>
                        <p>
                            Žadatel není oprávněn účastnit se výuky a/nebo výcviku, pokud bude v prodlení s úhradou jakékoli platby vůči autoškole. Autoškola je oprávněna nepokračovat ve výuce a výcviku ve vztahu k žadatelovi či neukončit výuku a výcvik, pokud bude evidovat jakoukoli neuhrazenou pohledávku vůči žadateli a tuto skutečnost žadateli a/nebo zákonnému zástupci nezletilého žadatele sdělí.
                        </p>
                        <p>
                            Po provedení úplné úhrady veškerých splatných závazků žadatele vůči autoškole (tj. zejména školného, veškerých případných plateb za doplňkové služby, poplatků dle ceníku atd.), autoškola ukončí výuku a výcvik a přihlásí žadatele k závěrečné zkoušce.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">III. Předčasné ukončení Smlouvy a finanční vypořádání</h2>
                        <p>
                            Smluvní strany mohou Smlouvu kdykoli v průběhu jejího trvání ukončit písemnou dohodou. Žadatel a/nebo zákonný zástupce nezletilého žadatele je oprávněn Smlouvu vypovědět kdykoli v průběhu jejího trvání, a to i bez uvedení důvodu. Výpověď musí být učiněna písemně a doručena autoškole. Výpovědní doba činí pět (5) pracovních dnů a počíná běžet dnem následujícím po dni doručení výpovědi autoškole.
                        </p>
                        <p>
                            V případě výpovědi Smlouvy ze strany žadatele po zahájení výuky a/nebo výcviku nemá žadatel automatický nárok na vrácení uhrazeného školného ani jeho části. Školné představuje úhradu za rezervaci kapacit autoškoly, organizační a administrativní zajištění kurzu, teoretickou výuku, praktický výcvik, zajištění lektorů, provoz vozidel a další související náklady, a to i v případě, že žadatel nevyužije sjednané služby v plném rozsahu.
                        </p>
                        <p>
                            V případě ukončení Smlouvy ze strany žadatele může autoškola provést individuální finanční vypořádání, a to s přihlédnutím k dosud skutečně poskytnutým službám a k nákladům, které autoškole v souvislosti se žadatelem již vznikly. Mezi tyto náklady patří zejména náklady na výuku a výcvik, mzdy a odměny lektorů, pohonné hmoty, provoz a údržbu vozidel, administrativní a organizační činnost, rezervace kapacit a další související provozní náklady.
                        </p>
                        <p>
                            Za vážné důvody, které mohou být podkladem pro individuální finanční vypořádání, se považují zejména dlouhodobé zdravotní důvody, které žadateli objektivně znemožňují pokračování ve výuce a výcviku, a které jsou doloženy lékařským potvrzením, případně jiné mimořádné okolnosti hodné zvláštního zřetele, které žadatel prokazatelně doloží. Posouzení důvodnosti těchto okolností je na autoškole.
                        </p>
                        <p>
                            V případě, že žadatel po zahájení výuky a/nebo výcviku přestane bez vážného důvodu projevovat zájem o pokračování kurzu, zejména se dlouhodobě neúčastní výuky, neobjednává se na výcvikové jízdy nebo s autoškolou nekomunikuje, považuje se tato skutečnost za nevyužití služeb ze strany žadatele. Tato skutečnost nezakládá nárok na vrácení školného ani jeho části, a to ani v případě, že k výpovědi Smlouvy dojde s výrazným časovým odstupem od zahájení kurzu.
                        </p>
                        <p>
                            V případě nespokojenosti žadatele s konkrétním lektorem praktického výcviku se autoškola zavazuje, pokud tomu nebrání provozní nebo kapacitní důvody, umožnit žadateli změnu lektora. Nespokojenost s konkrétním lektorem sama o sobě nezakládá právo na vrácení školného ani jeho části.
                        </p>
                        <p>
                            V případě nespokojenosti žadatele se službami autoškoly je žadatel povinen tuto skutečnost bez zbytečného odkladu písemně oznámit autoškole a uvést konkrétní důvody nespokojenosti. Autoškola se zavazuje tyto důvody posoudit a přijmout přiměřená opatření k nápravě, jsou-li shledány oprávněnými. Teprve v případě, že by náprava nebyla objektivně možná, může být otázka finančního vypořádání posouzena individuálně.
                        </p>
                        <p>
                            Ukončení Smlouvy ze strany žadatele z důvodů spočívajících výhradně ve změně osobních preferencí, časových možností, ztrátě zájmu o absolvování kurzu nebo z jiných obdobných subjektivních důvodů nezakládá nárok na vrácení školného ani jeho části.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-foreground mb-4">IX. Závěrečná ustanovení</h2>
                        <p>
                            Autoškola Czech je oprávněna z důvodu změny v poskytovaných službách a/nebo změny platné právní úpravy jednostranně měnit tyto VOP. V tomto případě autoškola oznámí změnu VOP nejpozději 30 (třicet) dní přede dnem účinnosti navrhovaných změn.
                        </p>
                        <p>
                            Pokud žadatel a/nebo zákonný zástupce nezletilého žadatele písemně neodmítne navrhovanou změnu VOP nejpozději do 5 (pěti) dnů před navrhovaným datem účinnosti změn VOP, platí, že s navrhovanou změnou souhlasí.
                        </p>
                        <p>
                            Je-li, nebo stane-li se některé ustanovení těchto VOP neplatné či neúčinné, zůstávají ostatní ustanovení platná a účinná. Namísto neplatného či neúčinného ustanovení se použijí ustanovení obecně závazných právních předpisů.
                        </p>
                        <p>
                            VOP jsou platné a účinné ode dne 1. prosince 2020 a vztahují se na Smlouvy uzavřené od 1. prosince 2020 do roku 2026.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
