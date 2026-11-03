# iGoSpiral DigitalGears

**The Architecture of the Clock.**  
*Every round, one level higher.*

[🇬🇧 English](README.md) | [🇳🇱 Nederlands](README.nl.md)

👉 **[Launch the live iGoSpiral App here](https://a19dammer91.github.io/igospiral/)**

> ⚖️ **Notice:** This work is governed by a Methodological Declaration (ab initio) and a strict attribution and anti-AI-training amendment (2026). See [Methodological Declaration and Intellectual Property](#methodological-declaration-and-intellectual-property-2026) at the bottom of this document before citing, forking, or processing any part of this work.

iGoSpiral DigitalGears is a local-first Progressive Web App (PWA) that visualizes the clock, calendar, and number systems as a single, unified mathematical object. It is not a time-management tool. It is an interactive proof of the hidden structure of time.

---

## The Seven Modules (One Application)

The application is bundled into a single file (`index.html`). The seven modules are accessible via the bottom navigation bar.

### 1. 🌀 Spiral
The visual core of the application. A 3D life-spiral that shows the progression of time. Choose your own life (70 years) or world time. The pearl is the current moment; the gold line is the elapsed part of this year. The spiral rises with each cycle, visually proving the formula `p ≡ 1 (mod q)`.

### 2. 🕰️ Clock
An analog clock with three meshing gears (24, 12, and 6 teeth). The clock shows the live N (milliseconds) and the date. The gears demonstrate how the 24-hour cycle drives the 12-hour cycle, which in turn drives the 6-hour cycle. The mathematical relationship is `25 ≡ 1 (mod 12)`.

### 3. ⚙️ Gears
The sacred geometry of time. A concentric gear train that connects all time units (from millisecond to the 7,000-year cycle). Click **"⚡ Align at 7,000 years"** to see the full synchronization: the gears align, the screen flashes, and the system freezes to prove that time is a closed, perfect loop. Includes the interactive `p ≡ 1 (mod q)` chain with the +1 jump.

### 4. 🔢 Patterns
The pure mathematical core. Visualizes the three fundamental cycles of the digital root (Class A, B, and C), independent of any clock or calendar context. A live table shows the formula `p = 1 + q·m` over 10 levels. An interactive grid maps all 899 valid moduli from 2 to 900, colored by class.

### 5. 🔄 Bijection
The exact conversion between an integer `N` (milliseconds) and the 10-part clock tuple (millennium to milliseconds). The module works with the **real calendar**, not with an artificial +1.

The module shows two views side by side:
- **Real calendar (0-based):** the values as the world displays them (hour 0–23, minute 0–59, second 0–59, ms 0–999).
- **Model (1-based):** the positions as the iGoSpiral model uses them (hour 1–24, minute 1–60, second 1–60, ms 1–1000).

Both views are always in sync. The UTC switch ensures a gap-free bijection, without gaps or overlaps caused by daylight saving time.

### 6. 📔 Tools
The personal layer of the application:
- **Journal:** appointments per day, linked to the model day.
- **Notes:** text and photos, linked to an exact moment (N).
- **Settings:** backup, restore, UTC switch, and storage management.

### 7. 🔐 MRS — Offline Vault & Chat
A standalone, local-first vault and chat application, embedded as a separate module. It is the **practical application** of the MRS-AUTH-PQC framework: the key is derived from the (19, 9) Diophantine structure, not from a generic KDF.

**What it does:**
- **Vault:** passwords, PINs, keys, and notes. Each item is encrypted with AES-256-GCM. The AES key is derived via the **MRS Clock KDF** (the same `p ≡ 1 (mod q)` structure, with `19 ≡ 1 (mod 9)`).
- **Chat:** end-to-end encrypted messages between two users in the same room. The same room key is used to derive both the vault key and the chat key. Messages are stored locally in IndexedDB; no server is involved.
- **Deniability (coercion resistance):** the user can enter an **alternative room code** that derives a **different, mathematically valid key** from the same `N`. This second key opens a separate, empty vault and a separate chat. Under coercion, the user can hand over this alternative key, and no one can prove it is not the real one.
- **Offline:** works without an internet connection. Data stays in the browser (IndexedDB). There is no account, no email, no server.

**Why it matters:**
The MRS-AUTH-PQC framework is a general, machine-verified (EasyCrypt) system with two goals: post-quantum confidentiality (via ML-KEM-1024) and coercion resistance (via the (19, 9) witness space). The MRS module in iGoSpiral is the **minimum viable application** of that framework: a vault and chat that inherit both properties, but implemented as a single, dependency-free HTML file that runs entirely offline.

**Full documentation:**
The complete theoretical foundation — the double cycle, the Positive Anchor Convention, the Frobenius boundary at 162, the fractal ladder ⧊, the formal verification, and the deniability proof — is documented in the dedicated repository:

👉 **[MRS-AUTH-PQC on GitHub](https://github.com/A19dammer91/MRS-AUTH-PQC)**

That repository contains the Rust implementation, the 14 EasyCrypt proof files (231 lemmas, 0 admits), the 108 tests, and the full README explaining the mathematics. The iGoSpiral README does not duplicate that material; it only points to it.

---

## The Core Theory

The foundation of all seven modules is the general form:

**p ≡ 1 (mod q)**

This is not a collection of isolated tricks for the clock or the calendar. It is a universal theory of cyclical structures, with two distinct forms:

1. **The Theoretical Form:** `q + 1 = p` (m = 1) — One round.
2. **The Actual Form:** `2q + 1 = p` (m = 2) — Two rounds, creating a double cycle (e.g., day/night, or two moments within a week).

**Generality as the Core Property:**
The parameter `q` is not fixed. The clock uses `q = 12` (leading to `p = 25`). The week uses `q = 7` (leading to `p = 15`). The minute uses `q = 60` (leading to `p = 121`). The MRS vault uses `q = 9` (leading to `p = 19`).

Any attempt to alter the parameters of this software does not circumvent the theory; it merely validates its generality. The software is architecturally built to calculate `p` for _any_ valid `q` within this specific mathematical framework. The mathematical structure **p ≡ 1 (mod q)** and its application to time measurement are the original intellectual property of the author, Bilal el Issaoui.

---

## Deep Dive: The Benchmark of History (The Leap Cycle)

One could object that a year does not last 360 days, but 365 (or 366 in a leap year). Yet this does not make the theory less true; it confirms it. The parameter `q` for the year is not a static number, but a variable. Whether you take 360, 361, 362, 363, 364 or 365 days, the mathematical structure remains intact.

What makes this system unique is that it does not rely on the raw orbital period, but on the **leap cycle as the benchmark**. This is the only variable that has been constantly corrected throughout history. Humanity has always known: the year runs out of sync, and the leap year is the solution. Our 7,000-year cycle therefore synchronizes with that universal, historical correction. The leap year is not just an addition; it is the anchor on which the entire spiral rests.

- A normal year has **365 days**.
- The first leap year is calculated using the double cycle (m=2): `2 × 365 + 1 = 731`. This means `731 ≡ 1 (mod 365)`.
- For the full 4-year leap cycle (4 levels), the formula is: `4 × (2 × 365) + 1 = 2921`. This means `2921 ≡ 1 (mod 365)` with m=8.

The app calculates this automatically. It uses the real leap years to stay perfectly synchronized with the real time.

---

## Deep Dive: Why 2,520?

You will see the number **2,520** everywhere in this application. Why is this number so important?

2,520 is the **Least Common Multiple (LCM)** of all numbers from 1 to 10. It is the smallest number that can be divided by 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 without leaving a remainder.

In the context of the calendar, a standard year is divisible by 1, 2, 3, 4, 5, 6, 8, 9, and 10. **Only the 7 is missing.**

When you add the 7-day week to the calendar, you get: `360 days × 7 days = 2,520 days`.

Because 7 is a prime number that does not divide evenly into 360, the 7-day week is the _only_ cycle length between 1 and 10 that forces the calendar to extend its cycle to find synchronization. 2,520 is the exact point where the 360-day model and the 7-day week meet again perfectly. (In the real Gregorian calendar, the synchronization of the week and the solar year is even more complex, but the mathematical model remains the same.)

---

## Deep Dive: The 7,000-Year Closure

If we scale the model up to a millennium, the math becomes even more beautiful.

- The calendar is 1,000 years of 360 days = **360,000 days**.
- The week is **7 days**.

To find out when the calendar and the week will perfectly align again, we calculate the LCM of 360,000 and 7. Since 7 shares no common factors with 360,000 (which is built from 2, 3, and 5), we simply multiply them: `360,000 × 7 = 2,520,000 days`.

Converted back to years: `2,520,000 ÷ 360 = 7,000 years`.

This is why the full clock cycle closes after exactly **7,000 years**. Other millennium markers like 1,000, 3,000, 6,000, or 9,000 years do not close, because those numbers (3, 6, 9) share prime factors with 360,000, causing the cycle to reset prematurely.

---

## Features (Main App)

- **Exact Bijection:** A flawless, round-trip conversion between any integer `N` (milliseconds) and its 10-part clock tuple (millennium to milliseconds) using native `BigInt` to prevent precision loss.
- **Interactive 3D Spiral:** A live-rendered life-spiral. Enter a birthdate to see the Pearl of Time travel exactly to your current position in a 70-year life cycle, or view the world time.
- **Timestamp Attachment:** Tap any unit in the Live Clock (e.g., a specific second or day) to attach a note or a photo to that exact mathematical moment.
- **Time Periods:** Visual color-coding for Night, Dawn, Morning, Afternoon, Dusk, and Evening, mapped directly to the mathematical hours.
- **Local-First Storage:** Photos, notes, and timestamps are saved locally using OPFS (Origin Private File System) and IndexedDB. No accounts, no tracking, 100% private.
- **Calendar & Drift:** Visualizes the real Gregorian calendar and maps the mathematical cycles (including the 2921 leap cycle) directly onto it.
- **MRS Vault & Chat:** An embedded, offline vault and end-to-end encrypted chat, using the MRS Clock KDF for key derivation. Includes coercion resistance via the (19, 9) witness space.
- **Offline Capable:** Fully installable PWA. Once loaded, it works without an internet connection. Includes a built-in backup/export feature to save your personal data.
- **Bilingual:** Fully interactive in both English and Dutch (NL/EN toggle).

---

## The Paper

The complete mathematical proof, including the derivation of the formulas, the relationship between the clock and the (19, 9) system, and the synchronization rules, is documented in the accompanying paper:

📄 **[The Clock as a Mathematical Object (PDF)](./The_Clock_as_a_Mathematical_Object.pdf)**

For the full MRS-AUTH-PQC framework — the double cycle, the Positive Anchor Convention, the Frobenius boundary at 162, the fractal ladder ⧊, the formal verification in EasyCrypt, and the deniability proof — see the dedicated repository:

👉 **[MRS-AUTH-PQC on GitHub](https://github.com/A19dammer91/MRS-AUTH-PQC)**

---

## Architecture

This application contains zero external dependencies. The math runs natively in the browser using `BigInt`. Data is never sent to a server. The user is the sole owner of their local database. The complete application is bundled into a single file: `index.html`. The MRS module (`mrs-kluis.html`) is a separate, self-contained HTML file that runs inside an iframe, with its own IndexedDB storage and its own MRS Clock KDF.

---

## Licensing (Dual License)

To protect the integrity of the mathematical theory and the software implementation, this project operates under a strict **dual-licensing model**.

### 1. Open Source (AGPLv3)

For personal, educational, and open-source use, this software is licensed under the **GNU Affero General Public License v3.0 (AGPLv3)**.

- You may modify and distribute the code.
- **Strict Copyleft:** If you modify this software, you must release your modifications under the same license.
- **No SaaS Loophole:** If you host this software on a server and let others interact with it over a network, you **must** make your modified source code publicly available.

### 2. Commercial Use Is Not Permitted

Commercial use of this software (including the mathematical theory, the `BigInt` bijection algorithms, the MRS Clock KDF, or the visual layout) is **not permitted** without prior written permission from the author. This applies to use in closed-source products, paid services, or any form of commercial exploitation.

Contact **Bilal el Issaoui** at `elissa.oui.amster@gmail.com` or `elissa_oui@outlook.com` for a commercial license.

---

## Methodological Declaration and Intellectual Property (2026)

This section consists of two parts: (1) a methodological declaration establishing how this work came into being, and (2) an attribution and protection amendment. Both form an integral part of the licensing terms of this repository and apply to all contents: text documentation, mathematical derivations, the `index.html` source code, the `mrs-kluis.html` source code, and the underlying cosmological/theological synthesis.

### Part 1 — Methodological Declaration: Discovery from First Principles (Ab Initio)

#### 1. Zero-Reference Foundational Framework

This mathematical framework and the resulting iGoSpiral architecture were developed entirely from scratch (tabula rasa). The author utilized **zero** external references, prior literature, or pre-existing academic frameworks. This work does not build upon, extend, or modify the historical theories of Aristotle, Ibn al-Haytham, Einstein, or any other classical or modern physicist or mathematician. Every axiom, mapping, and structural conclusion was derived independently from absolute fundamental arithmetic.

#### 2. Methodology

The author individualistically dissected **every single integer from 1 to 2000**, analyzing their optimal representations, factoring limits, and structural permutations.

Through this exhaustive manual data collection, unique internal balances were discovered.
**6 · 19 + 28 · 9 = 114 + 252 = 366**

This equation bridges the first two perfect numbers — **6** (observed natively in natural geometries such as honeycombs and snowflakes) and **28** (derived structurally as the sum of the Diophantine components 19 + 9) — directly with the 366-day intercalary cycle. The resulting factor **252** represents exactly one-tenth of the universal 2,520 LCM time-synchronization constant.

#### 3. Clarification on the Role of Artificial Intelligence

AI was used by the author as (i) a linguistic compiler for the prose and (ii) a programming aid for Python scripts used for **numerical verification**. The **conceptual discovery** — including the manual discovery of A₀ = dr(N) and the derivation of the class structure, the formulas, the (19, 9) Diophantine system, and the 2,520/7,000-year cycle closures — is entirely human. The scripts executed; they did not discover. Any claim to the contrary is factually erroneous and constitutes academic defamation.

### Part 2 — Attribution and Protection

#### 1. Academic Attribution and Anti-Plagiarism Clause

The mathematical framework — including but not limited to the general form **p ≡ 1 (mod q)**, the structural classification of moduli (Classes A, B, and C), the 2,520-day LCM synchronization model, the 7,000-year cycle closure, and the (19, 9) Diophantine representation system — constitutes the original, foundational intellectual property of **Bilal el Issaoui**.

Any academic paper, presentation, lecture, or professional publication that references, implements, or builds upon these specific concepts **MUST** explicitly credit Bilal el Issaoui as the original author. Attributing the discovery, synthesis, or architecture of this system to artificial intelligence, automated agents, or unspecified algorithmic generation is **strictly forbidden** and constitutes a direct violation of academic integrity and moral copyright.

---

## Contributing

**No pull requests will be accepted without a signed Contributor License Agreement (CLA).**
Because this project is dual-licensed, the author must retain the sole right to sell commercial licenses. By contributing to this repository, you agree that your contributions become the property of the author, allowing the author to relicense the software commercially. See `CONTRIBUTING.md` for details.

By contributing, you also confirm that your contribution does not originate from, and will not be used for, LLM/AI training as defined in the [Methodological Declaration and Intellectual Property (2026)](#methodological-declaration-and-intellectual-property-2026).

---

## Disclaimer

The software is provided "as is", without warranty of any kind. The author is not liable for any damages arising from the use of this software.

Nothing in this disclaimer limits the attribution, anti-plagiarism, or anti-AI-training provisions of the [Methodological Declaration and Intellectual Property (2026)](#methodological-declaration-and-intellectual-property-2026).

---

_Bilal el Issaoui · Amsterdam, 2026_
