# Seelenmeer Redesign

Modernisierung von https://seelenmeer.eu/ als statische Website mit
[daisyUI 5](https://daisyui.com) auf Tailwind CSS 4.

## Struktur

Die Seite ist ein One-Pager mit Anker-Navigation und Scrollspy:

```
index.html        One-Pager: #home, #ueber-mich, #coaching (Zielgruppen,
                  Ablauf, FAQ), #meditation (Coming soon), #kontakt
                  (Kontaktkarte + Kennenlerngespräch-Formular → Mail)
impressum.html    Impressum (noindex; Adressdaten als Platzhalter markiert)
robots.txt        Crawling-Regeln inkl. Sitemap-Verweis
sitemap.xml       Einzige indexierbare URL (https://seelenmeer.eu/)
llms.txt          Zusammenfassung der Anchor-Struktur für KI-Crawler
favicon.svg       Wellen-Markenzeichen
og-cover.svg      Social-Preview-Bild (1200×630)
css/input.css     Tailwind/DaisyUI-Quelle inkl. Custom-Theme „seelenmeer“
css/site.css      Kompiliertes, minifiziertes CSS
js/main.js        Fortschreitendes Enhancement (Jahr, Scroll-Schatten,
                  Scrollspy, E-Mail kopieren, Formular → mailto)
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

- Konsolidierte Meta-Tags + Canonical `https://seelenmeer.eu/`, OG/Twitter-Cards.
- JSON-LD @graph mit stabilen @ids: `Person`, `ProfessionalService`, `WebSite`,
  `OfferCatalog` (Kennenlerngespräch, Einzelcoaching, Coaching-Pakete).
- Semantisches HTML (eine `h1`, Landmarks, Skip-Link), Anker-Ziele mit Scroll-Margin.
- Impressum als `noindex` markiert.

## Vor Veröffentlichung ergänzen

1. Impressum: Straße/Hausnummer und Ort der
   Maria Papadopoulos eintragen, Datenschutzerklärung anlegen und verlinken.
2. Authentische Bilder einsetzen: Im Home-Hero eine echte
   Portraitaufnahme von Maria einfügen (Rahmen: `.arch`, warmes Sand-Grüßen
   oben rund) und die Caption „Portraitfoto folgt“ entfernen. Landschafts-
   bilder in ruhigen Naturtönen ergänzen die Sektionen gut; auf Stock-Optik
   mit glatten Posen verzichten.
3. `og-cover.svg` gegen ein PNG/JPG (1200×630) tauschen, da einige
   Plattformen kein SVG für OG-Bilder unterstützen.
4. Kontaktformular nutzt `mailto:`; für echten Mailversand später ein
   Formular-Backend (z. B. formsimple, Netlify Forms, eigener Endpoint) anbinden.
