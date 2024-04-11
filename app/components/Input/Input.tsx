'use client';

import {useState} from 'react';
import {InputWrapperElement, InputElement} from './styles';
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormClearErrors,
  UseFormRegister,
  UseFormTrigger
} from 'react-hook-form';

export const Input = (
  {
    register,
    name,
    checked,
    label,
    activeState = false,
    handleTrigger,
    clearErrors,
    fieldError,
    hasValue,
    ...props
  }: {
    register?: UseFormRegister<FieldValues>,
    label?: string,
    activeState?: boolean,
    handleTrigger?: UseFormTrigger<FieldValues>,
    clearErrors?: UseFormClearErrors<FieldValues>,
    fieldError?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
    hasValue?: boolean,
  } & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [moveLabel, setMoveLabel] = useState(activeState);

  const handleFocus = () => {
    setMoveLabel(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setMoveLabel(false);
      clearErrors && clearErrors();
    } else {
      handleTrigger && handleTrigger();
    }
  };

  const handleOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (fieldError) {
      handleTrigger?.();
    }
  };

  return (
    <InputWrapperElement>
      <InputElement
        {...(register && name && register(name))}
        name={name}
        checked={checked}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onInput={handleOnInput}
        activeState={moveLabel}
        hasValue={hasValue as boolean}
        {...props}
      />
      {label && <label>{label}</label>}
    </InputWrapperElement>
  );
};
