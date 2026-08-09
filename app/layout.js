import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shreenidhiv.com';

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
      { url: '/transparent-favicon.png', type: 'image/png' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/transparent-favicon.png',
    apple: [{ url: '/transparent-favicon.png', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#032317] text-[#FFFFFF] selection:bg-[#2DD4BF] selection:text-[#032317]">
        {children}
      </body>
    </html>
  );
}
