import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  variable: '--font-display',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shreenidhi.tech';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shreenidhi V — RTL Design & Verification Portfolio',
    template: '%s | Shreenidhi V',
  },
  description:
    'Portfolio of Shreenidhi V — Electronics & Communication Engineering student specializing in RTL Design, Verification, and Digital IC Design.',
  keywords: [
    'RTL Design',
    'Design Verification',
    'Verilog',
    'SystemVerilog',
    'Sky130',
    'Digital IC Design',
    'FPGA',
    'ASIC',
    'OpenROAD',
    'Yosys',
    'VLSI Design',
  ],
  authors: [{ name: 'Shreenidhi V', url: 'https://github.com/shreenxdhi' }],
  creator: 'Shreenidhi V',
  openGraph: {
    title: 'Shreenidhi V — RTL Design & Verification Portfolio',
    description:
      'Electronics & Communication Engineering student specializing in RTL Design, Verification, and Digital IC Design.',
    url: siteUrl,
    siteName: 'Shreenidhi V Portfolio',
    images: [
      {
        url: '/transparent-favicon.png',
        width: 512,
        height: 512,
        alt: 'Shreenidhi V Brand Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreenidhi V — RTL Design & Verification Portfolio',
    description:
      'Electronics & Communication Engineering student specializing in RTL Design, Verification, and Digital IC Design.',
    images: ['/transparent-favicon.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3' },
      { url: '/favicon-32x32.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=3', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.png?v=3', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/apple-touch-icon.png?v=3',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#02170f] text-[#FFFFFF] selection:bg-[#2DD4BF] selection:text-[#02170f]">
        {children}
      </body>
    </html>
  );
}
