/**
 * Prerender Script for Autoškola RED
 *
 * Generates route-specific HTML files with pre-baked meta tags,
 * structured data (JSON-LD), and key textual content so that:
 *   1. Googlebot sees correct meta tags without executing JS
 *   2. AI assistants (ChatGPT, Perplexity, Google SGE) can read content
 *   3. Social media crawlers get proper OG tags
 *
 * Run after `vite build`:
 *   node scripts/prerender.mjs
 */

import fs from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const SITE = "https://autoskola.red";
const OG_IMAGE = `${SITE}/images/skoda-kodiaq-dejvice.webp`;

// ---------------------------------------------------------------------------
// Route definitions — keep in sync with App.tsx & blog-data.ts
// ---------------------------------------------------------------------------
const routes = [
  {
    path: "/",
    file: "index.html",
    title: "Autoškola RED Praha 6 Dejvice | Řidičák snadno a v pohodě",
    description:
      "Prémiová autoškola v srdci Dejvic. Moderní výcvik v nových vozech Škoda Kodiaq 2024. Individuální přístup, klidné jízdy a vysoká úspěšnost u zkoušek v Praze 6.",
    canonical: `${SITE}/`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "DrivingSchool",
        name: "Autoškola RED",
        alternateName: "Autoškola Praha 6 RED",
        image: `${SITE}/images/skoda-kodiaq-dejvice.webp`,
        description:
          "Prémiová autoškola v Praze 6 Dejvicích. Nabízíme individuální přístup, moderní vozy Škoda Kodiaq 2024 a výcvik v klidu a pohodě pro skupiny B a A.",
        "@id": `${SITE}/#organization`,
        url: SITE,
        telephone: "+420608913000",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Puškinovo náměstí 681/3",
          addressLocality: "Praha 6 - Bubeneč",
          postalCode: "160 00",
          addressCountry: "CZ",
        },
        geo: { "@type": "GeoCoordinates", latitude: 50.1018, longitude: 14.4034 },
        areaServed: [
          { "@type": "City", name: "Praha 6" },
          { "@type": "City", name: "Dejvice" },
          { "@type": "City", name: "Bubeneč" },
          { "@type": "City", name: "Hradčany" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "37" },
        knowsAbout: [
          "Řidičský průkaz skupina B",
          "Řidičský průkaz skupina A",
          "Kondiční jízdy",
          "Vrácení řidičského průkazu",
        ],
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Thursday"], opens: "14:00", closes: "18:00" },
        ],
        sameAs: [
          "https://www.facebook.com/profile.php?id=61569570703723",
          "https://www.instagram.com/autoskola_red/",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Autoškola RED",
        url: SITE,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Autoškola RED Praha 6 Dejvice",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".seo-speakable", "h1", ".hero-description"],
        },
        mainEntity: {
          "@type": "DrivingSchool",
          "@id": `${SITE}/#organization`,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Kolik přednášek / teorie musím absolvovat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Celkem 4 přednášky, ve kterých je zahrnut i zdravotnický kurz. Bez splnění této podmínky nelze žáka připustit k závěrečné zkoušce.",
            },
          },
          {
            "@type": "Question",
            name: "Jak probíhá výuka?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Délka a intenzita závisí na typu kurzu. Například standardní lekce trvá 2x 45 minut (tedy 90 minut čistého času).",
            },
          },
          {
            "@type": "Question",
            name: "Mohu si vybrat, s jakým autem chci kurz absolvovat?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Výběr vozu je vázán na konkrétního instruktora. Pokud si zvolíte kurz s automatickou převodovkou, v naší autoškole momentálně disponujeme moderním vozem Škoda Kodiaq.",
            },
          },
          {
            "@type": "Question",
            name: "Musím mít nějaké potvrzení od lékaře?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ano, to je zcela klíčové. Bez platné lékařské prohlídky a potvrzení o zdravotní způsobilosti není ze zákona možné zahájit praktický výcvik.",
            },
          },
          {
            "@type": "Question",
            name: "Jak vypadá závěrečná zkouška?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zkouška začíná písemným testem z pravidel silničního provozu. Po jeho úspěšném absolvování následuje praktická jízda s komisařem, kde prokážete své řidičské dovednosti.",
            },
          },
          {
            "@type": "Question",
            name: "Bojím se řídit, je možné si to nejdřív vyzkoušet na simulátoru?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Samozřejmě! Začneme v naprostém klidu na trenažéru. Do ostrého provozu půjdeme až ve chvíli, kdy získáte potřebnou jistotu.",
            },
          },
          {
            "@type": "Question",
            name: "Jak se nejlépe připravit na závěrečnou zkoušku?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Základem je pravidelná docházka a aktivní příprava během celého kurzu. Doporučujeme průběžně procvičovat online testy – naše autoškola vám poskytne přístup k aplikaci, kde si můžete testy zkoušet neomezeně a zcela zdarma.",
            },
          },
        ],
      },
    ],
    noscriptContent: `
      <h1>Autoškola RED Praha 6 Dejvice — Řidičák snadno a v pohodě</h1>
      <p>Prémiová autoškola v srdci Dejvic. Moderní výcvik v nových vozech Škoda Kodiaq 2024. Individuální přístup, klidné jízdy a vysoká úspěšnost u zkoušek v Praze 6.</p>
      <h2>Ceník kurzů</h2>
      <ul>
        <li>Economy — 22 900 Kč (4–6 měsíců)</li>
        <li>Standard Student — 23 900 Kč (3 měsíce, sleva pro studenty)</li>
        <li>Standard — 25 900 Kč (3 měsíce)</li>
        <li>Expres — 29 900 Kč (1 měsíc)</li>
      </ul>
      <h2>Kontakt</h2>
      <p>Adresa: Puškinovo náměstí 681/3, 160 00 Praha 6 - Bubeneč</p>
      <p>Telefon: <a href="tel:+420608913000">+420 608 913 000</a></p>
      <p>Email: <a href="mailto:info@autoskola.red">info@autoskola.red</a></p>
      <p>Otevírací doba: Po a Čt 14:00–18:00</p>
      <h2>Často kladené otázky</h2>
      <dl>
        <dt>Kolik přednášek musím absolvovat?</dt><dd>Celkem 4 přednášky včetně zdravotnického kurzu.</dd>
        <dt>Jak probíhá výuka?</dt><dd>Standardní lekce trvá 2× 45 minut (90 minut čistého času).</dd>
        <dt>Musím mít potvrzení od lékaře?</dt><dd>Ano, bez lékařské prohlídky nelze zahájit praktický výcvik.</dd>
        <dt>Jak vypadá závěrečná zkouška?</dt><dd>Písemný test z pravidel a poté praktická jízda s komisařem.</dd>
      </dl>
      <h2>Rychlé odpovědi</h2>
      <p><strong>Kolik stojí řidičák v Autoškole RED?</strong> Ceny kurzů skupiny B začínají na 22 900 Kč (Economy) a sahají do 29 900 Kč (Expres). Studentská sleva: Standard Student za 23 900 Kč.</p>
      <p><strong>Kde se Autoškola RED nachází?</strong> Puškinovo náměstí 681/3, Praha 6 - Bubeneč (Archi HUB), 5 minut chůze od metra Dejvická.</p>
      <p><strong>Jaká auta se používají?</strong> Škoda Kodiaq 2024 (automat), Škoda Octavia, Škoda Yeti, Hyundai i20 a motocykly.</p>
      <p><strong>Jaké hodnocení má Autoškola RED?</strong> 5.0 z 5 hvězdiček na Google (37+ recenzí).</p>
      <p><a href="/registrace">Online přihláška do autoškoly</a> | <a href="/cenik">Kompletní ceník</a> | <a href="/kontakt">Kontakt</a></p>
    `,
  },
  {
    path: "/cenik",
    file: "cenik.html",
    title: "Ceník autoškoly Praha 6 Dejvice 2026 | Autoškola RED",
    description:
      "Transparentní ceník řidičských průkazů v Praze 6. Skupiny B (manuál i automat), motocykly A, A1, A2, AM. Férové ceny bez skrytých poplatků v centru Dejvic.",
    canonical: `${SITE}/cenik`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Kurzy autoškoly RED",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Economy — 22 900 Kč", description: "4–6 měsíců, 1 hodina jízdy týdně" },
          { "@type": "ListItem", position: 2, name: "Standard Student — 23 900 Kč", description: "3 měsíce, 2–4 hodiny jízd týdně, sleva pro studenty" },
          { "@type": "ListItem", position: 3, name: "Standard — 25 900 Kč", description: "3 měsíce, garance termínu zkoušky" },
          { "@type": "ListItem", position: 4, name: "Expres — 29 900 Kč", description: "1 měsíc, intenzivní výcvik, prioritní plánování" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
          { "@type": "ListItem", position: 2, name: "Ceník", item: `${SITE}/cenik` },
        ],
      },
    ],
    noscriptContent: `
      <h1>Ceník autoškoly Praha 6 Dejvice 2026</h1>
      <h2>Osobní automobil — Skupina B</h2>
      <ul>
        <li>Economy — 22 900 Kč (4–6 měsíců, 1h jízdy týdně)</li>
        <li>Standard Student — 23 900 Kč (3 měsíce, sleva pro studenty s ISIC)</li>
        <li>Standard — 25 900 Kč (3 měsíce, garance termínu zkoušky)</li>
        <li>Expres — 29 900 Kč (1 měsíc, intenzivní výcvik)</li>
      </ul>
      <h2>Motocykly</h2>
      <ul>
        <li>Skupina AM (od 15 let) — 21 900 Kč</li>
        <li>Skupina A1 (od 16 let) — 22 900 Kč</li>
        <li>Skupina A2 (od 18 let) — 23 900 Kč</li>
        <li>Skupina A (od 24 let) — 24 900 Kč</li>
      </ul>
      <p>Všechny ceny jsou konečné a bez skrytých poplatků. Možnost splátek na 3×.</p>
      <p><a href="/registrace">Přihlásit se online</a></p>
    `,
  },
  {
    path: "/registrace",
    file: "registrace.html",
    title: "Online přihláška | Autoškola Praha 6 Dejvice 2026",
    description:
      "Závazná online přihláška do Autoškoly RED v Dejvicích. Vyberte si kurz B, B automat nebo motocykl. Začněte v Praze 6 ještě dnes.",
    canonical: `${SITE}/registrace`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Přihláška do autoškoly",
        provider: { "@type": "DrivingSchool", name: "Autoškola RED", "@id": `${SITE}/#organization` },
        areaServed: ["Praha 6", "Dejvice", "Bubeneč"],
      },
    ],
    noscriptContent: `
      <h1>Online přihláška do Autoškoly RED Praha 6</h1>
      <p>Vyplňte přihlášku a my se vám ozveme s nejbližším termínem zahájení kurzu.</p>
      <p>Kurzy: B manuál, B automat, AM, A1, A2, A</p>
      <p>Kontakt: <a href="tel:+420608913000">+420 608 913 000</a> | <a href="mailto:info@autoskola.red">info@autoskola.red</a></p>
    `,
  },
  {
    path: "/kontakt",
    file: "kontakt.html",
    title: "Kontakt a kudy k nám | Autoškola Praha 6 Dejvice",
    description:
      "Hledáte nás v Dejvicích? Sídlíme na Puškinově náměstí 3, Praha 6. Zastavte se za námi nebo nás kontaktujte telefonicky na +420 608 913 000.",
    canonical: `${SITE}/kontakt`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "DrivingSchool",
        name: "Autoškola RED",
        "@id": `${SITE}/#organization`,
        url: `${SITE}/kontakt`,
        telephone: "+420608913000",
        email: "info@autoskola.red",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Puškinovo náměstí 681/3",
          addressLocality: "Praha 6 - Bubeneč",
          postalCode: "160 00",
          addressCountry: "CZ",
        },
        geo: { "@type": "GeoCoordinates", latitude: 50.1018, longitude: 14.4034 },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Thursday"], opens: "14:00", closes: "18:00" },
        ],
      },
    ],
    noscriptContent: `
      <h1>Kontakt — Autoškola RED Praha 6 Dejvice</h1>
      <p>Adresa: Puškinovo náměstí 681/3, 160 00 Praha 6 - Bubeneč (Archi HUB, vchod z boku budovy)</p>
      <p>Telefon: <a href="tel:+420608913000">+420 608 913 000</a></p>
      <p>Email: <a href="mailto:info@autoskola.red">info@autoskola.red</a></p>
      <p>Otevírací doba: Pondělí a Čtvrtek 14:00–18:00, ostatní dny dle domluvy</p>
      <p>Kudy k nám: Ze stanice metra Dejvická (výstup Václavkova) cca 5 minut chůze parkem.</p>
    `,
  },
  {
    path: "/blog",
    file: "blog.html",
    title: "Blog Autoškola Praha 6 | Rady pro řidiče z Dejvic",
    description:
      "Magazín Autoškoly RED. Tipy k řízení v Praze 6, novinky v předpisech a rady pro studenty z Dejvic, jak zvládnout řidičák v klidu.",
    canonical: `${SITE}/blog`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Magazín Autoškoly RED",
        url: `${SITE}/blog`,
        publisher: { "@type": "Organization", name: "Autoškola RED", "@id": `${SITE}/#organization` },
      },
    ],
    noscriptContent: `
      <h1>Blog Autoškoly RED Praha 6 Dejvice</h1>
      <ul>
        <li><a href="/blog/novinky-z-dopravy-pro-rok-2026">Novinky z dopravy pro rok 2026: Co čeká řidiče?</a></li>
        <li><a href="/blog/kolik-stoji-ridicak-v-praze">Kolik dnes stojí řidičák v Praze a na co si dát pozor</a></li>
        <li><a href="/blog/proc-delat-ridicak-v-dejvicich">Proč dělat řidičák právě v Dejvicích?</a></li>
        <li><a href="/blog/co-muzete-ridit-s-jakym-opravnenim">Přehled řidičských oprávnění v ČR</a></li>
      </ul>
    `,
  },
  {
    path: "/ochrana-osobnich-udaju",
    file: "ochrana-osobnich-udaju.html",
    title: "Ochrana osobních údajů | Autoškola RED",
    description: "Zásady ochrany osobních údajů Autoškoly RED Praha 6.",
    canonical: `${SITE}/ochrana-osobnich-udaju`,
    structuredData: [],
    noscriptContent: `<h1>Ochrana osobních údajů — Autoškola RED</h1><p>Zásady zpracování osobních údajů.</p>`,
  },
  {
    path: "/obchodni-podminky",
    file: "obchodni-podminky.html",
    title: "Obchodní podmínky | Autoškola RED",
    description: "Obchodní podmínky Autoškoly RED Praha 6 Dejvice.",
    canonical: `${SITE}/obchodni-podminky`,
    structuredData: [],
    noscriptContent: `<h1>Obchodní podmínky — Autoškola RED</h1><p>Obchodní podmínky pro služby Autoškoly RED.</p>`,
  },
];

// Blog posts — keep in sync with blog-data.ts
const blogPosts = [
  {
    slug: "novinky-z-dopravy-pro-rok-2026",
    title: "Novinky z dopravy pro rok 2026: Co čeká řidiče?",
    excerpt:
      "Rok 2026 přináší řadu změn v dopravních předpisech a fungování autoškol. Podívejte se na přehled toho nejdůležitějšího.",
    dateIso: "2026-02-03",
    author: "Tým Autoškola RED",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "kolik-stoji-ridicak-v-praze",
    title: "Kolik dnes stojí řidičák v Praze a na co si dát pozor při výběru autoškoly",
    excerpt:
      "Zjistěte, kolik dnes stojí řidičák v Praze, na co si dát pozor při výběru autoškoly a proč je důležitá transparentní cena.",
    dateIso: "2026-03-14",
    author: "Tým Autoškola RED",
    image: "/images/kolik-stoji-ridicak-v-praze.png",
  },
  {
    slug: "proc-delat-ridicak-v-dejvicich",
    title: "Proč dělat řidičák právě v Dejvicích?",
    excerpt:
      "Dejvice jsou ideálním místem pro začátek vaší řidičské kariéry. Kombinace klidných ulic a skvělé dostupnosti.",
    dateIso: "2026-03-10",
    author: "Tým Autoškola RED",
    image: "/images/dejvice-white-kodiaq-blog.png",
  },
  {
    slug: "co-muzete-ridit-s-jakym-opravnenim",
    title: "Přehled řidičských oprávnění v ČR: Co můžete řídit a od kolika let?",
    excerpt:
      "Kompletní průvodce skupinami řidičských oprávnění v České republice — AM, A1, A2, A, B a B+E.",
    dateIso: "2026-03-22",
    author: "Tým Autoškola RED",
    image: "/images/driving_licenses_thumbnail.png",
  },
];

for (const post of blogPosts) {
  routes.push({
    path: `/blog/${post.slug}`,
    file: `blog/${post.slug}.html`,
    title: `${post.title} | Magazín Autoškola RED`,
    description: post.excerpt,
    canonical: `${SITE}/blog/${post.slug}`,
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: post.image.startsWith("http") ? post.image : `${SITE}${post.image}`,
        datePublished: post.dateIso,
        dateModified: post.dateIso,
        author: { "@type": "Person", name: post.author },
        publisher: {
          "@type": "Organization",
          name: "Autoškola RED",
          "@id": `${SITE}/#organization`,
        },
        mainEntityOfPage: `${SITE}/blog/${post.slug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Domů", item: SITE },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
        ],
      },
    ],
    noscriptContent: `
      <h1>${post.title}</h1>
      <p>${post.excerpt}</p>
      <p>Autor: ${post.author} | Datum: ${post.dateIso}</p>
      <p><a href="/blog">Zpět na blog</a> | <a href="/">Autoškola RED</a></p>
    `,
  });
}

// ---------------------------------------------------------------------------
// Generate HTML files
// ---------------------------------------------------------------------------
function generateHead(route) {
  const ogImage = route.path === "/" ? OG_IMAGE : `${SITE}/images/skoda-kodiaq-dejvice.webp`;

  let head = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${route.canonical}" />
    <link rel="alternate" hrefLang="cs-CZ" href="${route.canonical}" />

    <meta property="og:locale" content="cs_CZ" />
    <meta property="og:site_name" content="Autoškola RED" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${route.canonical}" />
    <meta property="og:image" content="${ogImage}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${ogImage}" />`;

  for (const schema of route.structuredData) {
    head += `\n    <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
  }

  return head;
}

function run() {
  const templatePath = path.join(DIST, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("ERROR: dist/index.html not found. Run `vite build` first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  let generated = 0;
  for (const route of routes) {
    // Replace the generic <title> and <meta description> with route-specific ones
    let html = template;

    // Remove existing title and description
    html = html.replace(/<title>[^<]*<\/title>/, "");
    html = html.replace(/<meta\s+name="description"[^>]*\/>/, "");

    // Inject route-specific head content before </head>
    const headContent = generateHead(route);
    html = html.replace("</head>", `${headContent}\n  </head>`);

    // Add noscript content for bots/AI that don't execute JS
    const noscript = `<noscript><div class="seo-content">${route.noscriptContent}</div></noscript>`;
    html = html.replace('<div id="root"></div>', `<div id="root"></div>\n    ${noscript}`);

    // Write file
    const filePath = path.join(DIST, route.file);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, html, "utf-8");
    generated++;
  }

  console.log(`✓ Prerendered ${generated} routes into dist/`);
  routes.forEach((r) => console.log(`  ${r.path} → ${r.file}`));
}

run();
