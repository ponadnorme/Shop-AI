import {
  LogoElement,
  NavbarElement,
  NavbarSpaceFillElement,
} from '@/app/components/Navbar/styles';
import Link from 'next/link';
import {buildRoute, Pages} from '@/app/routes';
import logo from '@/app/assets/images/logo.png';
import Image from 'next/image';
import {MainMenu} from '@/app/components/Navbar/MainMenu/MainMenu';
import {CenteredContentContainerElement} from '@/app/styles/common';

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
    <>
      <NavbarElement>
        <CenteredContentContainerElement>
          <LogoElement>
            <Link href={buildRoute(Pages.home)}>
              <Image
                src={logo}
                alt={'Sklep'}
              />
            </Link>
          </LogoElement>
          <MainMenu mainMenu={mainMenu.data}/>
        </CenteredContentContainerElement>
      </NavbarElement>
      <NavbarSpaceFillElement/>
    </>
  );
};
