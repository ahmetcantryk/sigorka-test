import "../styles/armorbroker.css";
// import "./styles/promo.css";
import Script from "next/script";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import "../styles/main.min.css";

import "./globals.css";


import { Source_Sans_3, Poppins, Roboto } from 'next/font/google';
import ClientLayout from './components/common/ClientLayout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ContactSticker from './components/common/ContactSticker';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-source-sans-3',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sigorka - Katılım Sigortacılığı',
  description: 'Sigorka ile güvenli ve uygun fiyatlı sigorta çözümleri. Kasko, trafik, sağlık, DASK ve daha fazlası için hemen teklif alın.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${sourceSans3.variable} ${poppins.variable} ${roboto.variable} ${inter.className}`}>
      <body>
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
        <ContactSticker />
        <Script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" />
      </body>
    </html>
  );
}
