# ⚡ Shreenidhi V — RTL Design & Verification Portfolio

> A high-performance, editorial luxury portfolio website built for an Electronics & Communication Engineering student specializing in RTL Design, Functional Verification, and Digital IC Design (RTL → Synthesis → Physical Design → Sky130 GDSII).

---

## 🛠️ Technology Stack

| Domain | Technology / Library |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism Design Tokens |
| **Typography** | `Playfair Display` (Serif Display) + `Inter` (Sans-Serif Body) via `next/font` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) + Dynamic CSS Ambient Lighting Orbs |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Security & Headers** | Strict CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Sanitized Inputs |

---

## ⚡ Featured Engineering Projects

1. **QVision — Hardware-Accelerated QR Engine**: Verilog · FPGA (Spartan-3) · Reed-Solomon ECC · LibreLane · Sky130 · VGA (640×480 @ 60Hz real-time decoding pipeline taped out to layout).
2. **Streaming Image Processing Accelerator**: Verilog · SystemVerilog · Yosys · OpenROAD · Sky130 (Sobel edge-detection verified against Python OpenCV golden model, 79,968 cells, 33MHz timing closure with 0.87ns setup slack).
3. **UART Controller**: Verilog · SystemVerilog · Icarus Verilog · Vivado (Full-duplex synthesizable UART, 115,200 baud, Basys3 FPGA bitstream).
4. **DMA Controller**: SystemVerilog · AXI4 (Dual-channel AXI4 DMA controller verified with self-checking testbench across 5 channels).
5. **Student Enrollment Portal**: React 19 · TypeScript · Vite · Tailwind CSS v4 · FastAPI · SQLAlchemy · PostgreSQL · JWT Auth · Groq (Llama 3 AI Academic Advisor).
6. **Smart Vehicle ECU System**: Embedded C · CAN Protocol · Python (Automated Test Suite) · GCC (4-ECU automotive network simulation with ID-based arbitration).

---

## 🚀 Quick Start & Development Setup

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shreenxdhi/vlsi-portfolio.git
   cd vlsi-portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   ```bash
   cp .env.example .env.local
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 📦 Production Build & Security Audit

To run a strict local production build check:

```bash
# 1. Run ESLint Code Audit
npm run lint

# 2. Compile Production Build
npm run build

# 3. Start Local Production Server
npm run start
```

---

## 🔒 Security Hardening

This repository is pre-configured with enterprise-grade security measures:
- **Zero Hardcoded Secrets**: All environment variables abstracted via `.env.example`.
- **Strict HTTP Headers**: CSP, HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
- **Input Sanitization**: XSS-safe `mailto` query string handlers.
- **Bulletproof `.gitignore`**: Excludes OS metadata (`.DS_Store`), editor configs, and local environment files.

---

## 🌐 Custom Domain & DNS Setup Guide

When deploying to **Vercel** with a custom domain (e.g., `shreenidhiv.com`):

### 1. Add Domain in Vercel Project Settings
Navigate to **Settings > Domains** in your Vercel dashboard and enter `shreenidhiv.com`.

### 2. Configure DNS Records with your Registrar (GoDaddy, Namecheap, Cloudflare, etc.)

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` | `76.76.21.21` | Automatic / 300 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 300 |

*Vercel will automatically issue and renew a free Let's Encrypt SSL/HTTPS certificate.*

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
