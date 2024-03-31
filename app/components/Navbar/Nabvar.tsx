import {NavbarElement} from '@/app/components/Navbar/styles';
import Link from 'next/link';
import {buildRoute, Pages} from '@/app/routes';

async function fetchMainMenu() {
  const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/menu/main`);
  if (!response.ok) {
    throw new Error('Failed to fetch main menu');
  }
  return response.json();
}

export const Navbar = async () => {
  const mainMenu = await fetchMainMenu();

  return (
    <NavbarElement>
      <Link href={buildRoute(Pages.home)}>Home</Link>
      {!!mainMenu && mainMenu.data.map((category: any) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </NavbarElement>
  );
};
