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
import {ProductsSearch} from '@/app/components/ProductsSearch/ProductsSearch';
import {fetchMainMenu} from '@/app/store/api/menuServer';

export const Navbar = async () => {
  const {mainMenu} = await fetchMainMenu();

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
          <ProductsSearch/>
          {!!mainMenu && <MainMenu mainMenu={mainMenu}/>}
        </CenteredContentContainerElement>
      </NavbarElement>
      <NavbarSpaceFillElement/>
    </>
  );
};
