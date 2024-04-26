// 'use parent client';

import {
  ButtonContainerElement,
  FiltersContainerElement,
  FilterFormElement,
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import {MinMaxInputs} from '@/app/produkty/components/MinMaxInputs';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {Button} from '@/app/components/Button';

type FilterInputsType = {
  minPrice: string,
  maxPrice: string,
};

export const Filters = ({onFilter}: {
  onFilter: (val: any) => void,
}) => {
  const useFormMethods = useForm<FilterInputsType>();
  const {handleSubmit} = useFormMethods;

  const onSubmit: SubmitHandler<FilterInputsType> = ({maxPrice, minPrice}) => {
    onFilter({
      minPrice,
      maxPrice,
    });
  };

  return (
    <FiltersContainerElement>
      <h2>
        <span>Filtry</span>
        <FontAwesomeIcon icon={faFilter}/>
      </h2>
      <FormProvider {...useFormMethods}>
        <FilterFormElement onSubmit={handleSubmit(onSubmit)}>
          <MinMaxInputs
            title="Cena"
            fieldName="price"
          />
          <ButtonContainerElement>
            <Button>Filtruj</Button>
          </ButtonContainerElement>
        </FilterFormElement>
      </FormProvider>
    </FiltersContainerElement>
  );
};
