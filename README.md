# Seelenmeer Redesign

Modernisierung von https://seelenmeer.eu/ als statische Website mit
[daisyUI 5](https://daisyui.com) auf Tailwind CSS 4.

## Struktur

```
index.html        Home (Hero, Über mich, Werte, CTA)
coaching.html     Coaching (Text, Zielgruppen, Ablauf, FAQ, CTA)
meditation.html   Meditation (Coming soon)
kontakt.html      Kontakt (Kontaktkarte + Kennenlerngespräch-Formular → Mail)
impressum.html    Impressum (Adressdaten als Platzhalter markiert)
robots.txt        Crawling-Regeln inkl. Sitemap-Verweis
sitemap.xml       Alle Seiten mit Prioritäten
llms.txt          Zusammenfassung für KI-Crawler
favicon.svg       Wellen-Markenzeichen
og-cover.svg      Social-Preview-Bild (1200×630)
css/input.css     Tailwind/DaisyUI-Quelle inkl. Custom-Theme „seelenmeer“
css/site.css      Kompiliertes, minifiziertes CSS (7 klassische daisyUI-Komponenten)
js/main.js        Fortschreitendes Enhancement (Jahr, Scroll-Schatten,
                  E-Mail kopieren, Formular → mailto)
```

## Build

```bash
npm install
npm run build:css   # kompiliert css/site.css (minifiziert)
npm run watch:css   # für Entwicklung
```

Für den Live-Betrieb genügen alle Dateien außer `css/input.css` und
`node_modules/`. Das CSS ist fertig kompiliert – die Website läuft ohne
Build-Schritte und ohne externe Requests (keine CDN-Fonts/Scripts, DSGVO-
freundlich, System-Schriftstacks statt herange ladener Webfonts).

## SEO

- Eindeutiger Title + Meta-Description je Seite, Canonical URLs, OG/Twitter-Cards.
- JSON-LD: `Person`, `ProfessionalService`, `WebSite`, `Service`, `BreadcrumbList`, `ContactPage` (@graph mit stabilen @ids).
- Frame-freies, semantisches HTML (ein `h1` je Seite, Landmarks, Skip-Link).
- Impressum als `noindex` markiert.

## Vor Veröffentlichung ergänzen

1. Impressum: Straße/Hausnummer und Ort der
   Maria Papadopoulos eintragen, Datenschutzerklärung anlegen und verlinken.
2. Optional echte Fotos statt der SVG-Avatare – `og-cover.svg` gegen ein
   PNG/JPG (1200×630) tauschen, da einige Plattformen kein SVG für OG-Bilder
   unterstützen.
3. Kontaktformular nutzt `mailto:`; für echten Mailversand später ein
   Formular-Backend (z. B. formsimple, Netlify Forms, eigener Endpoint) anbinden.
