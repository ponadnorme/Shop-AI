import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Strona główna - Shop AI',
  description: 'Sklep Shop AI.',
};

export default function HomeLayout({children}: {
  children: React.ReactNode,
}) {
  return (
    <>
      {children}
    </>
  );
};
