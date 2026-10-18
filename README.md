# iGoSpiral

**Every round, one level higher.**

iGoSpiral is a local-first Progressive Web App (PWA) that visualizes the clock, calendar, and number systems as a single, unified mathematical object. It is not a time-management tool; it is an interactive proof of the hidden structure of time.

## The Core Theory (The Author's Work)

The foundation of this application is the general form:

**p ≡ 1 (mod q)**

This is not a collection of isolated tricks for the clock or the calendar. It is a universal theory of cyclical structures, with two distinct forms:
1. **The Theoretical Form:** `q + 1 = p` (m = 1) — One round.
2. **The Actual Form:** `2q + 1 = p` (m = 2) — Two rounds, creating a double cycle (e.g., day/night, or two moments within a week).

**Generality as the Core Property:**
The parameter `q` is not fixed. The clock uses `q = 12` (leading to `p = 25`). The week uses `q = 7` (leading to `p = 15`). The minute uses `q = 60` (leading to `p = 121`). 

Any attempt to alter the parameters of this software does not circumvent the theory; it merely validates its generality. The software is architecturally built to calculate `p` for *any* valid `q` under this specific mathematical framework. The mathematical structure **p ≡ 1 (mod q)** and its application to time measurement are the original intellectual property of the author, Bilal el Issaoui.

## Features

- **Exact Bijection:** A flawless, round-trip conversion between any integer `N` (milliseconds) and its 10-part clock tuple (millennium to milliseconds) using native `BigInt` to prevent precision loss.
- **3D Spiral Visualization:** Live rendering of the modulo-spiral, showing the exact position and the `m` level (number of rounds completed).
- **Time Periods:** Visual color-coding for Night, Dawn, Morning, Afternoon, Dusk, and Evening, mapped directly to the mathematical hours.
- **Local-First Storage:** Photos and notes are saved locally using OPFS (Origin Private File System) and IndexedDB. No accounts, no tracking, 100% private.
- **Calendar & Drift:** Visualizes the 30-day model year alongside the Gregorian calendar, showing the precise drift against the 7-day week over the 2,520-day cycle.
- **Offline Capable:** Fully installable PWA. Once loaded, it works without an internet connection.

## Architecture

This application contains zero external dependencies. The math runs natively in the browser using `BigInt`. 
Data is never sent to a server. The user is the sole owner of their local database.

## Licensing (Dual License)

To protect the integrity of the mathematical theory and the software implementation, this project operates under a strict **dual-licensing model**.

### 1. Open Source (AGPLv3)
For personal, educational, and open-source use, this software is licensed under the **GNU Affero General Public License v3.0 (AGPLv3)**. 
* You may modify and distribute the code.
* **Strict Copyleft:** If you modify this software, you must release your modifications under the same license.
* **No SaaS Loophole:** If you host this software on a server and let others interact with it over a network, you **must** make your modified source code publicly available.

### 2. Commercial License (Proprietary)
If you are a company or individual wishing to use iGoSpiral (in whole or in part) in a closed-source, proprietary product, or host it as a paid service without disclosing your source code, **you must purchase a commercial license**. 

This includes using the mathematical framework, the `BigInt` bijection algorithms, or the visual layout in any commercial application. 
* Contact **Bilal el Issaoui** at `[your-email@example.com]` to obtain a commercial license.

## Contributing

**No pull requests will be accepted without a signed Contributor License Agreement (CLA).** 
Because this project is dual-licensed, the author must retain the sole right to sell commercial licenses. By contributing to this repository, you agree that your contributions become the property of the author, allowing the author to relicense the software commercially. See `CONTRIBUTING.md` for details.

## Disclaimer

The software is provided "as is", without warranty of any kind. The author is not liable for any damages arising from the use of this software.

---
*Created by Bilal el Issaoui · Amsterdam, 2026*
