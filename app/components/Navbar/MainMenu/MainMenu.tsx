import {
  MenuElement,
  MenuListElement,
  RootLevelElement, SubmenuElement
} from './styles';
import {MainMenuRootModel} from './types';
import Link from 'next/link';

export const MainMenu = ({mainMenu}: {
  mainMenu: MainMenuRootModel[],
}) => {
  return <MenuElement>
    <MenuListElement>
      {mainMenu.map((category: MainMenuRootModel) => (
        <RootLevelElement
          key={category.id}
        >
          <Link href={category.link}>{category.name}</Link>
          {category.subcategories.length > 0 && (
            <SubmenuElement>
              <ul>
                {category.subcategories.map((subcategory, index) => (
                  <li key={index}>
                    <Link href={subcategory.link}>{subcategory.name}</Link>
                  </li>
                ))}
              </ul>
              <div>Featured product.</div>
            </SubmenuElement>
          )}
        </RootLevelElement>
      ))}
    </MenuListElement>
  </MenuElement>;
};
