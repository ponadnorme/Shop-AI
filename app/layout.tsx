import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const interFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Shop AI',
  description: 'Sklep Shop AI.',
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="pl">
    <body className={interFont.className}>{children}</body>
    </html>
  );
}
