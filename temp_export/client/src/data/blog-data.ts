export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // Using simple HTML/string for content or we could use markdown
    date: string;
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
        author: "Jan Novák, Instruktor",
        category: "Tipy pro řidiče",
        readTime: "5 min čtení",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
        content: "Obsah článku připravujeme..."
    },
    {
        id: "3",
        slug: "proc-delat-ridicak-v-dejvicich",
        title: "Proč dělat řidičák právě v Dejvicích?",
        excerpt: "Dejvice jsou specifické svým provozem. Kulaťák, tramvaje, úzké uličky. Kdo se naučí jezdit tady, zvládne už všechno.",
        date: "10. Prosinec 2025",
        author: "Tým Autoškola RED",
        category: "O autoškole",
        readTime: "3 min čtení",
        image: "https://images.unsplash.com/photo-1541343672885-9fd581715087?q=80&w=2070&auto=format&fit=crop",
        content: "Obsah článku připravujeme..."
    }
];
