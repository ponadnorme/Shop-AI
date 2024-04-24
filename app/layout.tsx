import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {GlobalStyles} from '@/app/components/GlobalStyles/GlobalStyles';
import HolyLoader from 'holy-loader';
import dynamic from 'next/dynamic';

const interFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Shop AI',
  description: 'Sklep Shop AI.',
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode,
}>) {
  const ProductModal = dynamic(() => import('@/app/components/Product/ProductModal'), {
    ssr: false,
  });
  const ImageGalleryAiModal = dynamic(() => import('@/app/components/Product/ImageGalleryAi/Modal'), {
    ssr: false,
  });

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
