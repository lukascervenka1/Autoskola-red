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
    slug: "jak-zvladnout-jizdy-v-zime",
    title: "Jak zvládnout první jízdy v zimním provozu?",
    excerpt: "Sníh, náledí a brzká tma. Zimní měsíce jsou pro začínající řidiče výzvou. Přinášíme tipy, jak se nebát a jezdit bezpečně.",
    date: "15. Leden 2026",
    dateIso: "2026-01-15",
    author: "Jan Novák, Instruktor",
    category: "Tipy pro řidiče",
    readTime: "5 min čtení",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
    content: "Obsah článku připravujeme..."
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
