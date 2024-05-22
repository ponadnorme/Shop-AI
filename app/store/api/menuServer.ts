import {getRequest, handleResponse} from '@/app/utils/apiUtils';
import {ErrorModelType} from '@/app/store/api/types';
import {MainMenuRootModel} from '@/app/components/Navbar/MainMenu/types';

type MainMenuResponseType = {
  mainMenu?: MainMenuRootModel[],
  mainMenuErrors?: ErrorModelType[],
}

export const fetchMainMenu = async (): Promise<MainMenuResponseType> => {
  const {data} = await handleResponse(await getRequest('/menu/main'));
  return {
    mainMenu: data?.data,
    mainMenuErrors: data?.errors,
  };
};
