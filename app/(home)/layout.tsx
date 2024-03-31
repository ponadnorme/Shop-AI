import {Metadata} from 'next';
import {Navbar} from '@/app/components/Navbar/Nabvar';

export const metadata: Metadata = {
  title: 'Strona główna - Shop AI',
  description: 'Sklep Shop AI.',
};

export default function HomeLayout({children}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};
