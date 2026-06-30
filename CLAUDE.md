# Autoškola RED — Kontext projektu pro Claude

## Co je to za projekt

Web autoškoly RED sídlící v Praze 6 Dejvicích (autoskola.red). Majitel a instruktor: **Jiří Červenka**, tel. 608 913 000, email jiri@autoskola.red, adresa Puškinovo náměstí 681/3, Praha 6 – Archi HUB.

## Technický stack

- **React SPA** — Vite + Wouter (routing), Tailwind CSS, shadcn/ui komponenty
- **Hosting:** Vercel (auto-deploy z GitHubu na push do `main`)
- **Git remote:** `git@github.com:lukascervenka1/Autoskola-red.git` — push funguje **pouze přes SSH**, ne HTTPS
- **Pracovní adresář:** `/Users/lukas.cervenka/Documents/Autoskola-red/Autoskola-red-git`
- **Package manager:** pnpm

## Klíčové služby a klíče

| Služba | ID / endpoint |
|--------|---------------|
| Google Analytics 4 | `G-S88E3P9X3Q` |
| Google Tag Manager | `GTM-MTG44LDS` |
| Formspree — registrace | `xvzbowwd` |
| Formspree — kontakt | `mzdydbjw` |
| Google Maps Place ID | `ChIJ8-bh676VC0cRx9a6vFNu-i4` |

## Důležité soubory

```
client/src/
├── pages/
│   ├── Pricing.tsx       — ceník (hlavní stránka /cenik)
│   ├── Home.tsx          — homepage
│   ├── Contact.tsx       — kontakt (/kontakt)
│   ├── Registration.tsx  — přihláška (/registrace)
│   ├── Blog.tsx          — seznam článků
│   ├── Terms.tsx         — obchodní podmínky (/obchodni-podminky)
│   └── StudentZone.tsx   — zóna pro žáky
├── components/
│   ├── PricingSection.tsx — ceník na homepage (3 balíčky)
│   ├── ReviewsSection.tsx — Google recenze
│   ├── Navbar.tsx        — navigace (POZOR: má pre-existující hydration warning — nested <a> tag, neřeš pokud není zadáno)
│   └── Footer.tsx
├── data/
│   └── blog-data.ts      — obsah všech blog článků
├── lib/
│   └── analytics.ts      — GA4 tracking funkce (trackPageView, trackRegistration, trackContactForm)
└── App.tsx               — routing + RouteTracker pro SPA page view tracking
client/index.html          — GTM + GA4 skripty v <head>
client/public/images/      — obrázky (WebP formát)
```

## Aktuální ceník (stav po poslední úpravě)

| Balíček | Cena | Automat příplatek |
|---------|------|-------------------|
| Economy | 22 900 Kč | +3 000 Kč |
| Standard Student | 23 900 Kč (sleva z 25 900) | +3 000 Kč |
| Standard | 25 900 Kč (sleva z 27 900) | +1 999 Kč |
| Expres | 30 900 Kč | +1 999 Kč |

Ceník je na **dvou místech** — vždy upravuj obě:
1. `client/src/pages/Pricing.tsx` — plná stránka ceníku
2. `client/src/components/PricingSection.tsx` — widget na homepage

## Google Analytics — jak funguje

- `send_page_view: false` v gtag config (aby se nepočítalo dvakrát)
- `RouteTracker` komponenta v `App.tsx` sleduje změny route přes Wouter `useLocation`
- Konverzní eventy: `generate_lead` — volá se z `Registration.tsx` a `Contact.tsx`
- **DŮLEŽITÉ:** Nepřidávat GA4 tag do GTM kontejneru — způsobí double tracking

## Google Maps embed

Používá `pb=` formát (získaný přes Google Maps → Sdílet → Vložit mapu). Starý `q=&output=embed` formát Google v 2025 vypnul. Aktuální embed URL:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.08102457398!2d14.40012827695696!3d50.103490371528046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95beebe1e6f3%3A0x2efa6e53bcbad6c7!2sAuto%C5%A1kola%20RED!5e0!3m2!1scs!2scz!4v1781860560700!5m2!1scs!2scz
```
Použito v `Home.tsx` i `Contact.tsx`.

## Motokurzy — záloha za vozidlo

- **A2, A:** záloha 10 000 Kč
- **AM, AM automat, A1, A1 automat:** záloha 5 000 Kč
- Záloha = spoluúčast pojištění, vrací se po kurzu
- Info je na dvou místech: `Pricing.tsx` (sekce Důležité informace) + `Terms.tsx` (oddíl III)

## Blog

Články v `client/src/data/blog-data.ts`, seřazeny od nejnovějšího (`dateIso` DESC v `Blog.tsx`). Náhledy v `client/public/images/` jako WebP. Aktuálně 5 článků, poslední: "Benzín za 42 Kč, autoškoly zdražují — Autoškola RED ceny drží" (2026-04-14).

## Hover efekt na outline tlačítkách

Tailwind outline varianta má výchozí `hover:bg-accent` (modrá). Přepsáno na červenou pomocí:
```
hover:bg-primary hover:text-white hover:border-primary
```
Platí pro Economy a Expres tlačítka v `Pricing.tsx` a `PricingSection.tsx`.

## Workflow pro nasazení

```bash
# Dev server
cd /Users/lukas.cervenka/Documents/Autoskola-red/Autoskola-red-git
pnpm dev   # nebo npm run dev

# Push na produkci (Vercel auto-deploy)
git add <soubory>
git commit -m "popis"
git push origin main   # SSH, ne HTTPS
```

## Vizitka

SVG soubor na `/Users/lukas.cervenka/Documents/Autoskola-red/vizitka-jiri-cervenka.svg` (není součástí git repozitáře webu).
