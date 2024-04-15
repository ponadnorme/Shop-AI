export enum Pages {
  home = 'home',
  product = 'product',
  products = 'products',
}

const routesMap = {
  [Pages.home]: '/',
  [Pages.product]: '/produkt/:param',
  [Pages.products]: '/produkty/:param',
};

export const buildRoute = (page: Pages, params: Array<string> = ['']) => {
  return routesMap[page].replace(':param', params[0]);
};

export const productModalRoute = (productId: string) => {
  return `?productModal&id=${productId}`;
};
