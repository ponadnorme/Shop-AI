import {Metadata} from 'next';
import {ReactNode} from 'react';
import {BaseLayout} from '@/app/components/Layout/BaseLayout/BaseLayout';

export const metadata: Metadata = {
  title: 'Strona produktu - Shop AI',
  description: 'Produkt sklepu.',
};

export default function ProductsLayout({children}: Readonly<{
  children: ReactNode,
}>) {
  return (
    <BaseLayout centeredMainContent={true}>
      {children}
    </BaseLayout>
  );
}
