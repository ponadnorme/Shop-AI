import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {GlobalStyles} from '@/app/components/GlobalStyles/GlobalStyles';
import HolyLoader from 'holy-loader';
import {
  ImageGalleryAiModal
} from '@/app/components/Product/ImageGalleryAi/Modal/ImageGalleryAiModal';
import {ProductModal} from '@/app/components/Product/ProductModal';

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
    <body className={interFont.className}>
    <GlobalStyles/>
    <HolyLoader/>
    {children}
    <ProductModal/>
    <ImageGalleryAiModal/>
    </body>
    </html>
  );
}
