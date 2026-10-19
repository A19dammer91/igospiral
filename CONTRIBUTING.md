# Contributing to iGoSpiral

First of all, thank you for considering contributing to iGoSpiral! 
However, because this project operates under a strict dual-licensing model (AGPLv3 for open source and a separate Commercial License for proprietary use), there are very specific rules for contributing.

## The Contributor License Agreement (CLA)

**No pull requests will be accepted without a signed Contributor License Agreement (CLA).**

To protect the integrity of the mathematical theory and to allow the author (Bilal el Issaoui) to continue offering commercial licenses, the author must retain the sole copyright and ownership of the codebase. 

By submitting a pull request, you agree to the following:
1. You grant Bilal el Issaoui a perpetual, worldwide, non-exclusive, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute your contributions and such derivative works.
2. You grant Bilal el Issaoui the right to relicense your contributions under any other license, including proprietary commercial licenses, without any compensation to you.
3. You represent that you are legally entitled to grant the above license. If your employer has rights to intellectual property that you create, you represent that you have received permission to make contributions on behalf of that employer.

**How to sign the CLA:**
Before submitting your pull request, please send an email to `elissa.oui.amster@gmail.com` or `elissa_oui@outlook.com` with the subject line: **"CLA - iGoSpiral"**. Include your full name and your GitHub username. 

## How to Contribute

If you have signed the CLA, you are welcome to contribute! Here is how you can help:

### 1. Reporting Bugs
- Check the existing issues to see if the bug has already been reported.
- If not, open a new issue. 
- Describe the bug clearly, including steps to reproduce it, and specify which device/browser you are using.

### 2. Suggesting Enhancements
- Open an issue to discuss your idea before writing any code. 
- Keep in mind that the mathematical core (`p ≡ 1 (mod q)`) and its specific parameters are the intellectual property of the author and are not open for fundamental changes. 
- Enhancements should focus on the UI, performance, accessibility, or PWA features.

### 3. Submitting Pull Requests
- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code follows the existing style and architecture (vanilla JavaScript, BigInt for math, zero external dependencies).
- Test your changes thoroughly in different browsers.
- Write a clear description of what your pull request solves.
- Submit the pull request.

*Note: Even if you have signed the CLA, the author reserves the right to reject any pull request that does not align with the vision or mathematical integrity of the project.*

## Architecture Rules
- **Zero External Dependencies:** Do not add any NPM packages or external libraries. The math and UI must run natively.
- **Local-First:** No data should ever be sent to an external server. All storage must be local (OPFS / IndexedDB).
- **Precision:** Always use native `BigInt` for mathematical operations involving time to prevent precision loss.

Thank you for respecting the dual-licensing model and for helping make iGoSpiral better!
