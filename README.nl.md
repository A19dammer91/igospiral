# iGoSpiral DigitalGears

**De Architectuur van de Klok.**  
*Elke ronde, één niveau hoger.*

[🇬🇧 English](README.md) | [🇳🇱 Nederlands](README.nl.md)

👉 **[Start de live iGoSpiral App hier](https://a19dammer91.github.io/igospiral/)**

> ⚖️ **Kennisgeving:** Dit werk valt onder een Methodologische Verklaring (ab initio) en een strikt attributie- en anti-AI-trainingsamendement (2026). Zie [Methodologische Verklaring en Intellectueel Eigendom](#methodologische-verklaring-en-intellectueel-eigendom-2026) onderaan dit document voordat je citeert, forks maakt of enig deel van dit werk verwerkt.

iGoSpiral DigitalGears is een local-first Progressive Web App (PWA) die de klok, de kalender en getalsystemen visualiseert als één verenigd wiskundig object. Het is geen time-management tool. Het is een interactief bewijs van de verborgen structuur van tijd.

---

## De Zes Modules (Eén Applicatie)

De applicatie is gebundeld in één enkel bestand (`index.html`). De zes modules zijn toegankelijk via de navigatiebalk onderaan.

### 1. 🌀 Spiraal
De visuele kern van de applicatie. Een 3D-levensspiraal die de voortgang van de tijd toont. Kies je eigen leven (70 jaar) of de wereldtijd. De parel is het huidige moment; de gouden lijn is het verstreken deel van dit jaar. De spiraal stijgt bij elke cyclus, wat de formule `p ≡ 1 (mod q)` visueel bewijst.

### 2. 🕰️ Klok
Een analoge klok met drie ingrijpende tandwielen (24, 12 en 6 tanden). De klok toont de live N (milliseconden) en de datum. De tandwielen demonstreren hoe de 24-uurs cyclus de 12-uurs cyclus aandrijft, die op zijn beurt de 6-uurs cyclus aandrijft. De wiskundige relatie is `25 ≡ 1 (mod 12)`. 
Daarnaast bevat deze module de **Minuten Spiraal** (1441 en 1141), die bewijst dat de minuut een spiraaleenheid is binnen de dag (`1441 ≡ 1 (mod 24)`).

### 3. ⚙️ Tandwielen
De sacrale geometrie van de tijd. Een concentrische tandwieltrein die alle tijdseenheden (van milliseconde tot millennium) met elkaar verbindt. De moduli zijn de zuivere positionele waarden (Jaar = 365, Dag = 24, Uur = 60). 
In de "Tools"-sectie vind je de 3D-tandwieltrein met de knop **"⚡ Lijn uit: The Great Reset"**. Dit visualiseert de Diophantische sluiting op 2.520.000 dagen (7000 modeljaren).

### 4. 🔄 Bijectie
De exacte conversie tussen een geheel getal `N` (milliseconden) en de 10-delige klok-tuple (millennium tot milliseconden). De module rekent met de **werkelijke kalender**, niet met een kunstmatige +1.

De module toont twee weergaven naast elkaar:
- **Echte kalender (0-based):** de waarden zoals de wereld ze toont (uur 0–23, minuut 0–59, seconde 0–59, ms 0–999).
- **Model (1-based):** de posities zoals het iGoSpiral-model ze gebruikt (uur 1–24, minuut 1–60, seconde 1–60, ms 1–1000).

Beide weergaven zijn altijd synchroon. De UTC-schakelaar zorgt voor een sluitende bijectie, zonder gaten of overlappingen door zomertijd.

### 5. 📔 Tools (inclusief Patronen & Agenda)
De persoonlijke en wiskundige laag van de applicatie:
- **Patronen:** Visualiseert de drie fundamentele cycli van de digitale wortel (Klasse A, B en C), onafhankelijk van enige klok- of kalendercontext. Een live tabel toont de formule `p = 1 + q·m`.
- **3D Tandwieltrein:** De visuele weergave van de Diophantische cyclus, met de "The Great Reset" knop.
- **Agenda:** afspraken per dag, gekoppeld aan de modeldag.
- **Notities:** tekst en foto's, gekoppeld aan een exact moment (N).
- **Instellingen:** back-up, herstel, UTC-schakelaar, en opslagbeheer.

### 6. 🔐 MRS — Offline Kluis & Chat
Een standalone, local-first kluis- en chat-applicatie, ingebed als aparte module. Het is de **praktische toepassing** van het MRS-AUTH-PQC-framework: de sleutel wordt afgeleid uit de (19, 9) Diophantische structuur, niet uit een generieke KDF.

**Wat het doet:**
- **Kluis:** wachtwoorden, pincodes, sleutels en notities. Elk item wordt versleuteld met AES-256-GCM. De AES-sleutel wordt afgeleid via de **MRS Clock KDF** (dezelfde `p ≡ 1 (mod q)`-structuur, met `19 ≡ 1 (mod 9)`).
- **Chat:** end-to-end versleutelde berichten tussen twee gebruikers in dezelfde kamer. Dezelfde kamersleutel wordt gebruikt om zowel de kluis- als de chat-sleutel af te leiden. Berichten worden lokaal opgeslagen in IndexedDB; er is geen server bij betrokken.
- **Deniability (dwangbestendigheid):** de gebruiker kan een **alternatieve kamercode** invoeren die een **andere, wiskundig geldige sleutel** afleidt uit dezelfde `N`. Deze tweede sleutel opent een aparte, lege kluis en een aparte chat. Onder dwang kan de gebruiker deze alternatieve sleutel overhandigen, en niemand kan bewijzen dat het niet de echte is.
- **Offline:** werkt zonder internetverbinding. Gegevens blijven in de browser (IndexedDB). Er is geen account, geen e-mail, geen server.

**Waarom het ertoe doet:**
Het MRS-AUTH-PQC-framework is een algemeen, machinaal geverifieerd (EasyCrypt) systeem met twee doelen: post-quantum vertrouwelijkheid (via ML-KEM-1024) en dwangbestendigheid (via de (19, 9) witness-ruimte). De MRS-module in iGoSpiral is de **minimum viable toepassing** van dat framework: een kluis en chat die beide eigenschappen erven, maar geïmplementeerd als één enkel, dependency-vrij HTML-bestand dat volledig offline draait.

**Volledige documentatie:**
De complete theoretische onderbouwing — de dubbele cyclus, de Positive Anchor Convention, de Frobenius-grens op 162, de fractale ladder ⧊, de formele verificatie, en het deniability-bewijs — staat in de aparte repository:

👉 **[MRS-AUTH-PQC op GitHub](https://github.com/A19dammer91/MRS-AUTH-PQC)**

---

## De Kern Theorie

De foundation van alle modules is de algemene vorm:

**p ≡ 1 (mod q)**

Dit is geen verzameling geïsoleerde trucs voor de klok of de kalender. Het is een universele theorie van cyclische structuren, met twee distincte vormen:

1. **De Theoretische Vorm:** `q + 1 = p` (m = 1) — Eén ronde.
2. **De Actuele Vorm:** `2q + 1 = p` (m = 2) — Twee rondes, wat een dubbele cyclus creëert (bijv. dag/nacht, of twee momenten binnen een week).

**Algemeenheid als Kern-eigenschap:**
De parameter `q` is niet vast. De klok gebruikt `q = 12` (leidend tot `p = 25`). De week gebruikt `q = 7` (leidend tot `p = 15`). De minuut gebruikt `q = 60` (leidend tot `p = 121`). De MRS-kluis gebruikt `q = 9` (leidend tot `p = 19`).

Elke poging om de parameters van deze software te wijzigen, omzeilt de theorie niet; het bevestigt juist de algemeenheid ervan. De software is architectonisch gebouwd om `p` te berekenen voor _elke_ geldige `q` binnen dit specifieke wiskundige kader. De wiskundige structuur **p ≡ 1 (mod q)** en de toepassing ervan op tijdmeting zijn de originele intellectuele eigendom van de auteur, Bilal el Issaoui.

---

## Diepe Duik: De Benchmark van de Geschiedenis (De Schrikkelcyclus)

Men zou kunnen tegenwerpen dat een jaar geen 360 dagen duurt, maar 365 (of 366 in een schrikkeljaar). Toch maakt dit de theorie niet minder waar; het bevestigt haar. De parameter `q` voor het jaar is geen statisch getal, maar een variabele. Of je nu 360, 361, 362, 363, 364 of 365 dagen neemt, de wiskundige structuur blijft intact.

Wat dit systeem uniek maakt, is dat het niet leunt op de ruwe omlooptijd, maar op de **schrikkelcyclus als benchmark**. Dit is de enige variabele die door de geschiedenis heen constant is gecorrigeerd. De mensheid heeft altijd geweten: het jaar loopt uit de pas, en het schrikkeljaar is de oplossing. Onze 7.000-jaarcyclus synchroniseert daarom met die universele, historische correctie. Het schrikkeljaar is niet zomaar een toevoeging; het is het anker waarop de hele spiraal rust.

- Een normaal jaar heeft **365 dagen**.
- De theoretische dualistische vorm (m=2): `2 × 365 + 1 = 731`. Dit betekent `731 ≡ 1 (mod 365)`.
- Voor de volledige 4-jaarlijkse schrikkelcyclus: `4 × 365 + 1 = 1461` (m=4).
- Voor de volledige 8-jaarlijkse cyclus (de eenheid): `2 × 1461 = 2922` (m=8).
- **Uitzondering:** Valt een eeuwjaar zonder schrikkeldag (zoals 2100) in de cyclus, dan is het aantal verstreken dagen 2921.

De applicatie berekent dit automatisch. Het gebruikt de echte schrikkeljaren om perfect gesynchroniseerd te blijven met de werkelijke tijd.

---

## Diepe Duik: Waarom 2.520?

Je ziet het getal **2.520** overal in deze applicatie. Waarom is dit getal zo belangrijk?

2.520 is het **Kleinste Gemene Veelvoud (KGV)** van alle getallen van 1 tot en met 10. Het is het kleinste getal dat deelbaar is door 1, 2, 3, 4, 5, 6, 7, 8, 9 en 10 zonder een rest achter te laten.

In de context van de kalender is een standaardjaar deelbaar door 1, 2, 3, 4, 5, 6, 8, 9 en 10. **Alleen de 7 ontbreekt.**

Wanneer je de 7-daagse week aan de kalender toevoegt, krijg je: `360 dagen × 7 dagen = 2.520 dagen`.

Omdat 7 een priemgetal is dat niet gelijkmatig in 360 past, is de 7-daagse week de _enige_ cycluslengte tussen 1 en 10 die de kalender dwingt zijn cyclus te verlengen om synchronisatie te vinden. 2.520 is het exacte punt waar het 360-daagse model en de 7-daagse week elkaar weer perfect ontmoeten.

---

## Diepe Duik: De 7.000-Jaar Sluiting

Als we het model opschalen naar een millennium, wordt de wiskunde nog mooier.

- De kalender is 1.000 jaar van 360 dagen = **360.000 dagen**.
- De week is **7 dagen**.

Om erachter te komen wanneer de kalender en de week weer perfect op één lijn liggen, berekenen we de KGV van 360.000 en 7. Omdat 7 geen gemeenschappelijke factoren deelt met 360.000 (dat is opgebouwd uit 2, 3 en 5), vermenigvuldigen we ze simpelweg: `360.000 × 7 = 2.520.000 dagen`.

Terug naar jaren: `2.520.000 ÷ 360 = 7.000 jaar`.

Dit is waarom de volledige klokcyclus na precies **7.000 jaar** sluit. In de app wordt dit gevisualiseerd met de knop **"⚡ Lijn uit: The Great Reset"**. Dit is de ultieme Diophantische sluiting.

---

## Features (Hoofdapplicatie)

- **Exacte Bijectie:** Een foutloze, round-trip conversie tussen elk geheel getal `N` (milliseconden) en de 10-delige klok-tuple (millennium tot milliseconden), met native `BigInt` om precisieverlies te voorkomen.
- **Interactieve 3D-Spiraal:** Een live gerenderde levensspiraal. Voer een geboortedatum in om de Parel van de Tijd precies naar je huidige positie in een 70-jaars levenscyclus te zien reizen, of bekijk de wereldtijd.
- **Timestamp Attachment:** Tik op een eenheid in de Live Clock (bijv. een specifieke seconde of dag) om een notitie of foto aan dat exacte wiskundige moment te koppelen.
- **Time Periods:** Visuele kleurcodering voor Nacht, Ochtend, Middag, Namiddag, Schemering en Avond, direct gekoppeld aan de wiskundige uren.
- **Local-First Storage:** Foto's, notities en tijdstempels worden lokaal opgeslagen met behulp van OPFS (Origin Private File System) en IndexedDB. Geen accounts, geen tracking, 100% privé.
- **Calendar & Drift:** Visualiseert de echte Gregoriaanse kalender en brengt de wiskundige cycli (inclusief de 2921-schrikkelcyclus) direct in kaart.
- **MRS Kluis & Chat:** Een ingebedde, offline kluis en end-to-end versleutelde chat, met de MRS Clock KDF voor sleutelafleiding. Inclusief dwangbestendigheid via de (19, 9) witness-ruimte.
- **Offline Capable:** Volledig installeerbare PWA. Eenmaal geladen werkt het zonder internetverbinding. Inclusief een ingebouwde back-up/export-functie om je persoonlijke gegevens op te slaan.
- **Tweetalig:** Volledig interactief in zowel het Engels als het Nederlands (NL/EN toggle).

---

## Het Paper

De volledige wiskundige onderbouwing, inclusief de afleiding van de formules, de relatie tussen de klok en het (19, 9)-systeem, en de synchronisatieregels, is gedocumenteerd in het bijbehorende paper:

📄 **[The Clock as a Mathematical Object (PDF)](./The_Clock_as_a_Mathematical_Object.pdf)**

Voor het volledige MRS-AUTH-PQC-framework — de dubbele cyclus, de Positive Anchor Convention, de Frobenius-grens op 162, de fractale ladder ⧊, de formele verificatie in EasyCrypt, en het deniability-bewijs — zie de aparte repository:

👉 **[MRS-AUTH-PQC op GitHub](https://github.com/A19dammer91/MRS-AUTH-PQC)**

---

## Architectuur

Deze applicatie bevat geen externe afhankelijkheden. De wiskunde draait native in de browser met behulp van `BigInt`. Gegevens worden nooit naar een server verzonden. De gebruiker is de enige eigenaar van zijn of haar lokale database. De volledige applicatie is gebundeld in één enkel bestand: `index.html`. De MRS-module (`mrs-kluis.html`) is een apart, op zichzelf staand HTML-bestand dat in een iframe draait, met een eigen IndexedDB-opslag en een eigen MRS Clock KDF.

---

## Licentie (Dual License)

Om de integriteit van de wiskundige theorie en de software-implementatie te beschermen, werkt dit project onder een strikt **dual-licensing model**.

### 1. Open Source (AGPLv3)

Voor persoonlijk, educatief en open-source gebruik is deze software gelicentieerd onder de **GNU Affero General Public License v3.0 (AGPLv3)**.

- Je mag de code wijzigen en distribueren.
- **Strict Copyleft:** Als je deze software wijzigt, moet je je wijzigingen onder dezelfde licentie vrijgeven.
- **No SaaS Loophole:** Als je deze software op een server host en anderen er via een netwerk mee laat communiceren, **moet** je je gewijzigde broncode openbaar maken.

### 2. Commercieel gebruik is niet toegestaan

Commercieel gebruik van deze software (inclusief de wiskundige theorie, de `BigInt`-bijectie-algoritmen, de MRS Clock KDF, of de visuele layout) is **niet toegestaan** zonder voorafgaande schriftelijke toestemming van de auteur. Dit geldt voor gebruik in closed-source producten, betaalde diensten, of elke vorm van commerciële exploitatie.

Neem contact op met **Bilal el Issaoui** via `elissa.oui.amster@gmail.com` of `elissa_oui@outlook.com` voor een commerciële licentie.

---

## Methodologische Verklaring en Intellectueel Eigendom (2026)

Deze sectie bestaat uit twee delen: (1) een methodologische verklaring die vastlegt hoe dit werk tot stand is gekomen, en (2) een attributie- en beschermingsamendement. Beide maken integraal deel uit van de licentievoorwaarden van deze repository en zijn van toepassing op alle inhoud: tekstdocumentatie, wiskundige afleidingen, de `index.html`-broncode, de `mrs-kluis.html`-broncode en de onderliggende kosmologische/theologische synthese.

### Deel 1 — Methodologische Verklaring: Ontdekking vanuit Eerste Principia (Ab Initio)

#### 1. Zero-Reference Fundamenteel Kader

Dit wiskundige raamwerk en de daaruit voortvloeiende iGoSpiral-architectuur zijn volledig from scratch (tabula rasa) ontwikkeld. De auteur heeft **geen** externe referenties, voorafgaande literatuur of bestaande academische kaders gebruikt. Dit werk bouwt niet voort op, breidt niet uit en wijzigt niet de historische theorieën van Aristoteles, Ibn al-Haytham, Einstein of enige andere klassieke of moderne fysicus of wiskundige. Elk axioma, elke mapping en elke structurele conclusie is onafhankelijk afgeleid uit absolute fundamentele rekenkunde.

#### 2. Methodologie

De ontdekkingen in dit werk zijn het resultaat van rigoureuze, handmatige empirische analyse. De auteur heeft individueel **elk afzonderlijk integer van 1 tot 2000** ontleed, inclusief hun optimale representaties, factorisatiegrenzen en structurele permutaties.

Via deze uitputtende handmatige dataverzameling zijn unieke interne balansen ontdekt.

**6 · 19 + 28 · 9 = 114 + 252 = 366**

Deze vergelijking verbindt de eerste twee perfecte getallen — **6** (native waargenomen in natuurlijke geometrieën zoals honingraten en sneeuwvlokken) en **28** (structureel afgeleid als de som van de Diophantische componenten 19 + 9) — direct met de 366-daagse intercalaire cyclus. De resulterende factor **252** vertegenwoordigt exact één tiende van de universele 2.520 LCM-tijdsynchronisatieconstante.

#### 3. Verduidelijking over de Rol van Kunstmatige Intelligentie

AI is door de auteur uitsluitend gebruikt als (i) linguïstische compiler voor de prose en (ii) programmeerhulp bij Python-scripts voor **rekenkundige verificatie**. De **conceptuele ontdekking** — waaronder het handmatig vinden van A₀ = dr(N) en het afleiden van de klassenstructuur, de formules, het (19, 9) Diophantische systeem, en de 2.520/7.000-jaar cyclusafsluitingen — is volledig menselijk. De scripts voerden uit; zij ontdekten niet. Elke bewering van het tegendeel is feitelijk onjuist en vormt academische laster.

### Deel 2 — Attributie en Bescherming

#### 1. Academische Attributie en Anti-Plagiaatclausule

Het wiskundige raamwerk — inclusief maar niet beperkt tot de algemene vorm **p ≡ 1 (mod q)**, de structurele classificatie van moduli (Klassen A, B en C), het 2.520-dagen LCM-synchronisatiemodel, de 7.000-jaar cyclusafsluiting en het (19, 9) Diophantische representatiesysteem — vormt het oorspronkelijke, fundamentele intellectuele eigendom van **Bilal el Issaoui**.

Elke academische paper, presentatie, lezing of professionele publicatie die naar deze specifieke concepten verwijst, deze implementeert of erop voortbouwt, **MOET** Bilal el Issaoui expliciet crediteren als de oorspronkelijke auteur. Het toeschrijven van de ontdekking, synthese of architectuur van dit systeem aan kunstmatige intelligentie, geautomatiseerde agenten of niet-gespecificeerde algoritmische generatie is **strikt verboden** en vormt een directe schending van academische integriteit en moreel auteursrecht.

---

## Bijdragen

**Er worden geen pull requests geaccepteerd zonder een ondertekende Contributor License Agreement (CLA).**
Omdat dit project dual-licensed is, moet de auteur het exclusieve recht behouden om commerciële licenties te verkopen. Door bij te dragen aan deze repository, ga je ermee akkoord dat je bijdragen eigendom worden van de auteur, waardoor de auteur de software commercieel kan herlicentiëren. Zie `CONTRIBUTING.md` voor details.

Door bij te dragen bevestig je tevens dat je bijdrage niet afkomstig is van, en niet zal worden gebruikt voor, LLM/AI-training zoals gedefinieerd in de [Methodologische Verklaring en Intellectueel Eigendom (2026)](#methodologische-verklaring-en-intellectueel-eigendom-2026).

---

## Disclaimer

De software wordt geleverd "as is", zonder enige vorm van garantie. De auteur is niet aansprakelijk voor enige schade die voortvloeit uit het gebruik van deze software.

Niets in deze disclaimer beperkt de attributie-, anti-plagiaat- of anti-AI-trainingsbepalingen van de [Methodologische Verklaring en Intellectueel Eigendom (2026)](#methodologische-verklaring-en-intellectueel-eigendom-2026).

---

_Bilal el Issaoui · Amsterdam, 2026_
