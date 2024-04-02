export type MainMenuRootModel = {
  id: string,
  name: string,
  link: string,
  subcategories: Array<MainMenuSubmenuModel>,
};

export type MainMenuSubmenuModel = {
  name: string,
  link: string,
};
