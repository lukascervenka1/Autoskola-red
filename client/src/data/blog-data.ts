export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Using simple HTML/string for content or we could use markdown
  date: string;
  dateIso: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "novinky-z-dopravy-pro-rok-2026",
    title: "Novinky z dopravy pro rok 2026: Co čeká řidiče?",
    excerpt: "Rok 2026 přináší řadu změn v dopravních předpisech a fungování autoškol. Podívejte se na přehled toho nejdůležitějšího, co by měl každý řidič vědět.",
    date: "3. Únor 2026",
    dateIso: "2026-02-03",
    author: "Tým Autoškola RED",
    category: "Zákony a předpisy",
    readTime: "4 min čtení",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p class="mb-4">Rok 2026 je tady a s ním i několik důležitých novinek, které ovlivní jak stávající řidiče, tak ty, kteří se na získání řidičského oprávnění teprve připravují. Připravili jsme pro vás souhrn nejdůležitějších změn.</p>

      <h2 class="text-2xl font-bold mb-3 mt-6">1. Digitalizace dokladů pokročila</h2>
      <p class="mb-4">Od letošního roku se již plně spoléhá na digitální verzi řidičského průkazu v rámci ČR. Fyzickou kartičku sice stále dostanete (pro cesty do zahraničí je nezbytná), ale při silniční kontrole na českém území postačí prokázat se občanským průkazem nebo aplikací eDoklady. Systém propojení policejních databází byl letos opět zrychlen.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">2. Změny v bodovém systému</h2>
      <p class="mb-4">Pozor si dejte na zpřísnění postihů za telefonování za jízdy. Nově se tento přestupek trestá 4 body (dříve 2) a vyšší pokutou na místě. Cílem je snížit nepozornost, která je stále jednou z nejčastějších příčin nehod.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-6">3. Řidičák na zkoušku ("L17") - první data</h2>
      <p class="mb-4">Systém L17 (řízení od 17 let pod dohledem mentora), který běží už druhým rokem, se osvědčil. Pro rok 2026 se zpřesnily podmínky pro mentory – nově musí mentor projít krátkým online školením o zásadách bezpečné výuky, které je zdarma dostupné na portálu dopravy.</p>

      <h2 class="text-2xl font-bold mb-3 mt-6">4. Povinná výbava a nová lékárnička</h2>
      <p class="mb-4">Ministerstvo dopravy aktualizovalo obsah autolékárničky. Pokud vaše lékárnička expiruje v roce 2026, zkontrolujte si, že nová již odpovídá vyhlášce 2026 (zjednodušení obsahu, důraz na kvalitní obvazový materiál a turniket).</p>

      <h2 class="text-2xl font-bold mb-3 mt-6">5. Ekologické zóny ve městech</h2>
      <p class="mb-4">Praha a Brno rozšiřují nízkoemisní zóny. Pro vjezd do širšího centra je nyní potřeba mít vozidlo splňující normu alespoň EURO 4. Zkontrolujte si technický průkaz, abyste se vyhnuli pokutám z automatických kamerových systémů.</p>

      <h3 class="text-xl font-bold mb-2 mt-6">Závěrem</h3>
      <p class="mb-4">V Autoškole RED všechny tyto novinky sledujeme a zapracováváme je do naší teoretické výuky. Naši žáci tak jdou ke zkouškám vždy připraveni na aktuální legislativu. Přejeme vám mnoho šťastných kilometrů v roce 2026!</p>
    `
  },
  {
    id: "2",
    slug: "kolik-stoji-ridicak-v-praze",
    title: "Kolik dnes stojí řidičák v Praze a na co si dát pozor při výběru autoškoly",
    excerpt: "Zjistěte, kolik dnes stojí řidičák v Praze, na co si dát pozor při výběru autoškoly a proč je důležitá transparentní cena bez skrytých poplatků.",
    date: "14. Březen 2026",
    dateIso: "2026-03-14",
    author: "Tým Autoškola RED",
    category: "Tipy a rady",
    readTime: "7 min čtení",
    image: "/images/kolik-stoji-ridicak-v-praze.png",
    content: `
      <p class="mb-4 text-lg font-medium">Vybrat si dnes správnou autoškolu v Praze není jen o tom najít nejnižší cenu. Na první pohled mohou vypadat nabídky podobně, ale když se člověk začne dívat detailněji, zjistí, že rozdíly mezi jednotlivými autoškolami jsou často opravdu velké.</p>

      <p class="mb-4">Někde vás zaujme nízká startovní cena, ale až později zjistíte, že některé důležité položky nejsou v ceně zahrnuté. Jinde zase zaplatíte víc, ale dostanete jasné podmínky, kvalitní přístup a férové jednání bez nepříjemných překvapení.</p>

      <p class="mb-6">Pokud tedy řešíte, kolik dnes stojí řidičák v Praze a jak vybrat autoškolu, aby vás později nic nepřekvapilo, tady je to nejdůležitější, na co se zaměřit.</p>

      <h2 class="text-2xl font-black mb-4 mt-8">Kolik stojí řidičák v Praze</h2>
      <p class="mb-4">Cena za řidičský průkaz skupiny B se dnes v Praze nejčastěji pohybuje v řádu vyšších desítek tisíc korun. Rozdíly mezi autoškolami ale nejsou jen v samotné ceně kurzu. Často rozhoduje hlavně to, co všechno je v ceně skutečně zahrnuto a kolik vás bude stát případné pokračování, doplňkové jízdy nebo opakování.</p>
      
      <p class="mb-6">Právě proto se nevyplácí dívat jen na první číslo v ceníku. Důležité je porovnávat nabídky jako celek. Na naší stránce <a href="/cenik" class="text-primary font-bold hover:underline">Ceník</a> najdete vždy transparentní ceny všech našich balíčků.</p>

      <h2 class="text-3xl font-black mb-6 mt-12">Na co si dát při výběru autoškoly opravdu pozor</h2>
      
      <h3 class="text-xl font-bold mb-3 mt-8">1. Podezřele nízká cena nemusí znamenat výhodu</h3>
      <p class="mb-4">Mnoho lidí vybírá autoškolu hlavně podle ceny. To je pochopitelné. Jenže nejnižší cena na webu ještě automaticky neznamená nejvýhodnější nabídku. U některých autoškol může být základní kurz nastavený tak, aby vypadal atraktivně, ale další důležité věci se dopočítávají zvlášť. A právě tam se může původně „výhodná“ nabídka rychle prodražit.</p>
      
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/20 my-6">
        <p class="font-bold mb-3">Proto je dobré si vždy ověřit:</p>
        <ul class="list-disc pl-5 space-y-1">
          <li>co přesně je v ceně kurzu,</li>
          <li>kolik stojí doplňkové jízdy,</li>
          <li>kolik stojí opakování zkoušek,</li>
          <li>zda jsou někde další příplatky,</li>
          <li>jestli je ceník veřejný, jasný a přehledný.</li>
        </ul>
      </div>

      <h3 class="text-xl font-bold mb-3 mt-8">2. Skryté poplatky umí výslednou cenu výrazně navýšit</h3>
      <p class="mb-6">Právě skryté nebo méně viditelné poplatky bývají při výběru autoškoly jeden z největších problémů. Člověk si vybere kurz podle ceny, ale až během výcviku zjistí, že konečná částka může být úplně jiná, než čekal. Proto se vyplatí vybírat takovou autoškolu, která hraje narovinu a má ceny zveřejněné otevřeně. Když je ceník veřejný, přehledný a bez mlžení, je to vždy dobré znamení.</p>

      <h2 class="text-2xl font-black mb-4 mt-12">Dobrá autoškola není jen o ceně</h2>
      <p class="mb-6">Cena je důležitá, ale není jediná. Ještě důležitější je často to, jak se v autoškole budete cítit a jaký přístup dostanete.</p>

      <h3 class="text-xl font-bold mb-3 mt-8">3. Přístup instruktorů rozhoduje víc, než si lidé myslí</h3>
      <p class="mb-4">Pro někoho je řízení radost, pro jiného stres. Zvlášť na začátku je důležité mít vedle sebe člověka, který umí vysvětlit chyby klidně, lidsky a srozumitelně. Autoškola by neměla být jen o splnění hodin, ale o tom, aby člověk získal jistotu za volantem a cítil se bezpečně.</p>

      <h3 class="text-xl font-bold mb-3 mt-8">4. Lokalita hraje velkou roli</h3>
      <p class="mb-4">Pokud hledáte autoškolu Praha 6 nebo autoškolu v Dejvicích, je výhodou mít zázemí právě v této části Prahy a nemuset kvůli každé jízdě cestovat přes celé město. Podívejte se na naše <a href="/kurzy" class="text-primary font-bold hover:underline">Kurzy</a> a zjistěte, jaké možnosti výcviku v naší lokalitě nabízíme.</p>

      <h3 class="text-xl font-bold mb-3 mt-8">5. Důvěryhodnost a zkušenosti ostatních</h3>
      <p class="mb-6">Recenze často napoví víc než samotný reklamní text. Pokud má autoškola dobré hodnocení, spokojené klienty a dlouhodobě si drží dobrou pověst, je to silný signál, že něco dělá správně. Důvěra vzniká férovým přístupem a jasnou komunikací.</p>

      <div class="bg-secondary/20 p-8 rounded-3xl border border-border my-10 text-center">
        <h3 class="text-2xl font-black mb-4">Hledáte férovou autoškolu v Praze 6?</h3>
        <p class="mb-8">V Autoškole RED si zakládáme na transparentnosti, jasných podmínkách a lidském přístupu. Žádné skryté poplatky, jen kvalitní výcvik v klidu a v nových vozech Škoda Kodiaq.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/registrace" class="px-8 py-4 bg-primary text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all">
            Přihlásit se do kurzu
          </a>
          <a href="/kontakt" class="px-8 py-4 bg-white border border-border text-foreground font-bold rounded-full hover:bg-secondary/50 transition-all">
            Kontaktujte nás
          </a>
        </div>
      </div>

      <h2 class="text-2xl font-black mb-4 mt-12">Jak poznat férovou autoškolu</h2>
      <p class="mb-4">Férová autoškola nepotřebuje lákat na nejasné sliby. Má jasně zveřejněný ceník, otevřeně komunikuje podmínky a zakládá si na spokojenosti svých žáků. Právě to je při výběru autoškoly v dnešní době často důležitější než pár stovek rozdílu v základní ceně.</p>

      <h3 class="text-xl font-bold mb-3 mt-8">Závěr</h3>
      <p class="mb-4">Řidičák je důležitý krok a výběr autoškoly by se neměl podceňovat. Pokud hledáte autoškolu v Praze 6 Dejvicích, která sází na transparentní ceny, férové jednání a spokojenost žáků, Autoškola RED je volba, která stojí za zvážení.</p>
    `
  },
  {
    id: "3",
    slug: "proc-delat-ridicak-v-dejvicich",
    title: "Proč dělat řidičák právě v Dejvicích? 5 důvodů, proč je Praha 6 nejlepší volbou",
    excerpt: "Hledáte autoškolu v Praze? Dejvice jsou specifické svým provozem, skvělou dostupností a atmosférou. Zjistěte, proč vám výcvik v Dejvicích dodá největší jistotu za volantem.",
    date: "10. Březen 2026",
    dateIso: "2026-03-10",
    author: "Tým Autoškola RED",
    category: "Tipy a rady",
    readTime: "6 min čtení",
    image: "/images/dejvice-white-kodiaq-blog.png",
    content: `
      <p class="mb-4">Výběr autoškoly je jedním z nejdůležitějších rozhodnutí pro vaši budoucí bezpečnost na cestách. Pokud bydlíte nebo studujete v Praze 6, máte obrovskou výhodu. Dejvice jsou totiž pro výcvik budoucích řidičů naprosto unikátní lokalitou. Proč je ale \"řidičák v Dejvicích\" tak vyhledávaným pojmem?</p>

      <h2 class="text-2xl font-bold mb-3 mt-8">1. Legendární \"Kulaťák\" vás naučí vše</h2>
      <p class="mb-4">Vítězné náměstí, neboli Kulaťák, je postrachem mnoha začátečníků i zkušených přespolních řidičů. Ale pro žáky <strong>Autoškoly RED</strong> je to ta nejlepší škola. Proč? Protože kdo se naučí suverénně projíždět Kulaťákem v Dejvicích, zvládne jakýkoliv kruhový objezd v Evropě. Výcvik v reálném, hustém provozu vám dodá reflexy, které na prázdných okreskách prostě nezískáte.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-8">2. Perfektní dostupnost pro studenty ČVUT a VŠCHT</h2>
      <p class="mb-4">Naše učebny a zázemí Archi HUBu na Puškinově náměstí jsou doslova pár kroků od dejvického kampusu. Pro studenty vysokých škol v Praze 6 je autoškola v Dejvicích ideálním řešením. Mezi přednáškami si odskočíte na jízdu nebo konzultaci, aniž byste ztráceli hodiny cestováním přes celé město.</p>
      
      <h2 class="text-2xl font-bold mb-3 mt-8">3. Kombinace všech typů dopravy</h2>
      <p class="mb-4">V Dejvicích se setkáte se vším: frekventované tramvajové tratě na Evropské, úzké rezidenční uličky v Bubenči, kde si procvičíte parkování, i rychlé výjezdy směrem na Pražský okruh. Tato diverzita dělá z Prahy 6 špičkové tréninkové hřiště. V Autoškole RED vás nevodíme jen po snadných trasách – učíme vás řídit tam, kde se to opravdu počítá.</p>

      <h2 class="text-2xl font-bold mb-3 mt-8">4. Moderní vozy do moderní čtvrti</h2>
      <p class="mb-4">Dejvice jsou čtvrtí inovací a kvality. To reflektuje i náš vozový park. Výcvik v <strong>novém bílém Škodě Kodiaq 2024</strong> není jen o prestiži, ale o bezpečnosti. Moderní asistenti, senzory a komfort vám pomohou soustředit se na to hlavní – na klidné a bezpečné ovládání vozu v městském provozu.</p>

      <h2 class="text-2xl font-bold mb-3 mt-8">5. Atmosféra a lidský přístup</h2>
      <p class="mb-4">V Dejvicích se cítíme doma a chceme, aby to tak měli i naši žáci. Žádný stres, žádný křik v autě. Autoškola by měla být zážitkem, na který budete rádi vzpomínat. Naši instruktoři znají každý kout Prahy 6 a rádi se s vámi podělí o tipy, jak projet specifické křižovatky s přehledem a úsměvem.</p>

      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/20 mt-10">
        <h3 class="text-xl font-bold mb-2">Chcete začít jezdit v Dejvicích?</h3>
        <p class="mb-4">Nečekejte na další semestr. Naše termíny se rychle plní, zejména u oblíbených balíčků Standard a Expres. Přihlaste se online ještě dnes a získejte řidičák v té nejkrásnější části Prahy.</p>
        <a href="/registrace" class="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all">
          Chci se přihlásit do kurzu
        </a>
      </div>

      <p class="mt-8 italic text-sm text-muted-foreground">Klíčová slova: Autoškola Praha 6, Autoškola Dejvice, řidičský průkaz Praha 6, výcvik v Praze, Škoda Kodiaq autoškola, Vítězné náměstí doprava.</p>
    `
  }
];
