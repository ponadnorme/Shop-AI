import {Metadata} from 'next';
import {Navbar} from '@/app/components/Navbar/Navbar';
import {CenteredContentContainerElement} from '@/app/styles/common';
import {ProductModal} from '@/app/components/Product/ProductModal';

export const metadata: Metadata = {
  title: 'Strona produktu - Shop AI',
  description: 'Produkt sklepu.',
};

export default function ProductsLayout({children}: Readonly<{
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
