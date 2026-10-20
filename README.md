# iGoSpiral

**Every round, one level higher.**

👉 **[Launch the live iGoSpiral App here](https://a19dammer91.github.io/igospiral/)**

iGoSpiral is a local-first Progressive Web App (PWA) that visualizes the clock, calendar, and number systems as a single, unified mathematical object. 
It is not a time-management tool. 
It is an interactive proof of the hidden structure of time.

## The Core Theory

The foundation of this application is the general form:

**p ≡ 1 (mod q)**

This is not a collection of isolated tricks for the clock or the calendar. 
It is a universal theory of cyclical structures, with two distinct forms:

1. **The Theoretical Form:** `q + 1 = p` (m = 1) — One round.
2. **The Actual Form:** `2q + 1 = p` (m = 2) — Two rounds, creating a double cycle (e.g., day/night, or two moments within a week).

**Generality as the Core Property:**
The parameter `q` is not fixed. 
The clock uses `q = 12` (leading to `p = 25`). 
The week uses `q = 7` (leading to `p = 15`). 
The minute uses `q = 60` (leading to `p = 121`). 

Any attempt to alter the parameters of this software does not circumvent the theory; it merely validates its generality. 
The software is architecturally built to calculate `p` for _any_ valid `q` under this specific mathematical framework. 
The mathematical structure **p ≡ 1 (mod q)** and its application to time measurement are the original intellectual property of the author, Bilal el Issaoui.

## Deep Dive: The Leap Year

How does the model handle the real calendar? 
We respect the Gregorian calendar as the leading standard. 

- A normal year has **365 days**.
- The first leap year is calculated using the double cycle (m=2): 
  `2 × 365 + 1 = 731`. 
  This means `731 ≡ 1 (mod 365)`.
- For the full 4-year leap cycle (4 levels), the formula is: 
  `4 × (2 × 365) + 1 = 2921`. 
  This means `2921 ≡ 1 (mod 365)` with m=4.

The app calculates this automatically. 
It uses the real leap years to stay perfectly synchronized with the real time.

## Deep Dive: Why 2,520?

You will see the number **2,520** everywhere in this application. 
Why is this number so important?

2,520 is the **Least Common Multiple (LCM)** of all numbers from 1 to 10. 
It is the smallest number that can be divided by 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10 without leaving a remainder.

In the context of the calendar, a standard year is divisible by 1, 2, 3, 4, 5, 6, 8, 9, and 10. 
**Only the 7 is missing.**

When you add the 7-day week to the calendar, you get:
`360 days × 7 days = 2,520 days`

Because 7 is a prime number that does not divide evenly into 360, the 7-day week is the _only_ cycle length between 1 and 10 that forces the calendar to extend its cycle to find synchronization. 
2,520 is the exact point where the 360-day model and the 7-day week meet again perfectly. (In the real Gregorian calendar, the synchronization of the week and the solar year is even more complex, but the mathematical model remains the same).

## Deep Dive: The 7,000-Year Closure

If we scale the model up to a millennium, the math becomes even more beautiful.

- The calendar is 1,000 years of 360 days = **360,000 days**.
- The week is **7 days**.

To find out when the calendar and the week will perfectly align again, we calculate the LCM of 360,000 and 7. 
Since 7 shares no common factors with 360,000 (which is built from 2, 3, and 5), we simply multiply them:
`360,000 × 7 = 2,520,000 days`

Converted back to years:
`2,520,000 ÷ 360 = 7,000 years`

This is why the full clock cycle closes after exactly **7,000 years**. 
Other millennium markers like 1,000, 3,000, 6,000, or 9,000 years do not close, because those numbers (3, 6, 9) share prime factors with 360,000, causing the cycle to reset prematurely.

## Features

- **Exact Bijection:** A flawless, round-trip conversion between any integer `N` (milliseconds) and its 10-part clock tuple (millennium to milliseconds) using native `BigInt` to prevent precision loss.
- **Interactive 3D Spiral:** A live-rendered life-spiral. Enter a birthdate to see the Pearl of Time travel exactly to your current position in a 70-year life cycle, or view the world time.
- **Timestamp Attachment:** Tap any unit in the Live Clock (e.g., a specific second or day) to attach a note or a photo to that exact mathematical moment.
- **Time Periods:** Visual color-coding for Night, Dawn, Morning, Afternoon, Dusk, and Evening, mapped directly to the mathematical hours.
- **Local-First Storage:** Photos, notes, and timestamps are saved locally using OPFS (Origin Private File System) and IndexedDB. No accounts, no tracking, 100% private.
- **Calendar & Drift:** Visualizes the real Gregorian calendar and maps the mathematical cycles (including the 2921 leap cycle) directly onto it.
- **Offline Capable:** Fully installable PWA. Once loaded, it works without an internet connection. Includes a built-in backup/export feature to save your personal data.

## The Paper

The complete mathematical proof, including the derivation of the formulas, the relationship between the clock and the (19, 9) system, and the synchronization rules, is documented in the accompanying paper:

📄 **[The Clock as a Mathematical Object (PDF)](./The_Clock_as_a_Mathematical_Object.pdf)**

## Architecture

This application contains zero external dependencies. 
The math runs natively in the browser using `BigInt`. 
Data is never sent to a server. 
The user is the sole owner of their local database.

## Licensing (Dual License)

To protect the integrity of the mathematical theory and the software implementation, this project operates under a strict **dual-licensing model**.

### 1. Open Source (AGPLv3)

For personal, educational, and open-source use, this software is licensed under the **GNU Affero General Public License v3.0 (AGPLv3)**.

- You may modify and distribute the code.
- **Strict Copyleft:** If you modify this software, you must release your modifications under the same license.
- **No SaaS Loophole:** If you host this software on a server and let others interact with it over a network, you **must** make your modified source code publicly available.

### 2. Commercial License (Proprietary)

If you are a company or individual wishing to use iGoSpiral (in whole or in part) in a closed-source, proprietary product, or host it as a paid service without disclosing your source code, **you must purchase a commercial license**.

This includes using the mathematical framework, the `BigInt` bijection algorithms, or the visual layout in any commercial application.

- Contact **Bilal el Issaoui** at `elissa.oui.amster@gmail.com` or `elissa_oui@outlook.com` to obtain a commercial license.

## Contributing

**No pull requests will be accepted without a signed Contributor License Agreement (CLA).**
Because this project is dual-licensed, the author must retain the sole right to sell commercial licenses. 
By contributing to this repository, you agree that your contributions become the property of the author, allowing the author to relicense the software commercially. 
See `CONTRIBUTING.md` for details.

## Disclaimer

The software is provided "as is", without warranty of any kind. 
The author is not liable for any damages arising from the use of this software.

---

_Created by Bilal el Issaoui · Amsterdam, 2026_
