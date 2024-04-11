'use client';

import {useFormContext} from 'react-hook-form';
import {Input} from '@/app/components/Input';
import {FilterTitleElement} from '@/app/produkty/components/Filters/styles';
import {InputsWrapperElement} from './styles';

export const MinMaxInputs = ({title, fieldName, minValue = '', maxValue = ''}: {
  title: string,
  fieldName: string,
  minValue?: string,
  maxValue?: string,
}) => {
  const {register} = useFormContext();

  const upperCaseFirstLetter = (text: string) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

  const minField = `min${upperCaseFirstLetter(fieldName)}`;
  const maxField = `max${upperCaseFirstLetter(fieldName)}`;

  return (
    <InputsWrapperElement>
      <FilterTitleElement>{title}</FilterTitleElement>
      <div>
        <Input
          label="od"
          type="text"
          register={register}
          name={minField}
          defaultValue={minValue}
        />
        <Input
          label={'do'}
          type="text"
          register={register}
          name={maxField}
          defaultValue={maxValue}
        />
      </div>
    </InputsWrapperElement>
  );
};
