import {Metadata} from 'next';
import {BaseLayout} from '@/app/components/Layout/BaseLayout/BaseLayout';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Strona główna - Shop AI',
  description: 'Sklep Shop AI.',
};

export default function HomeLayout({children}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Script src={'https://widget.bliskapaczka.pl/v7.15/main.js'}/>
      <link rel="stylesheet"
            href="https://widget.bliskapaczka.pl/v7.15/main.css"/>
      <BaseLayout>
        {children}
      </BaseLayout>
    </>
  );
};
