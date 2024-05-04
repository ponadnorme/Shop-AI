import {Metadata} from 'next';
import {BaseLayout} from '@/app/components/Layout/BaseLayout/BaseLayout';
import {ReactNode} from 'react';

export const metadata: Metadata = {
  title: 'Strona produktu - Shop AI',
  description: 'Produkt sklepu.',
};

export default function ProductLayout({children}: Readonly<{
  children: ReactNode,
}>) {
  return (
    <BaseLayout centeredMainContent={true}>
      {children}
    </BaseLayout>
  );
}
