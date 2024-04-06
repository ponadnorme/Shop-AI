import {Metadata} from 'next';
import {Navbar} from '@/app/components/Navbar/Nabvar';
import {ProductModal} from '@/app/components/Product/ProductModal';
import {CenteredContentContainerElement} from '@/app/styles/common';

export const metadata: Metadata = {
  title: 'Strona produktu - Shop AI',
  description: 'Produkt sklepu.',
};

export default function ProductLayout({children}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <>
      <Navbar/>
      <CenteredContentContainerElement as={'main'}>
        {children}
      </CenteredContentContainerElement>
      <ProductModal/>
    </>
  );
}
