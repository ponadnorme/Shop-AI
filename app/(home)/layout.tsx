import {Metadata} from 'next';
import {BaseLayout} from '@/app/components/Layout/BaseLayout/BaseLayout';

export const metadata: Metadata = {
  title: 'Strona główna - Shop AI',
  description: 'Sklep Shop AI.',
};

export default function HomeLayout({children}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <BaseLayout>
        {children}
      </BaseLayout>
    </>
  );
};
