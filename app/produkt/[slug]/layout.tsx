import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Strona produktu - Shop AI',
  description: 'Produkt sklepu.',
};

export default function ProductLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode,
  }>
) {
  return (
    <>
      {children}
    </>
  );
}
