import {ErrorModelType} from '@/app/store/api/types';
import {ErrorMessageElement} from '@/app/styles/common';

type RequestErrorsProps = {
  errors: ErrorModelType[] | undefined,
}

export const RequestErrors = ({errors}: RequestErrorsProps) => {
  return (
    <>
      {!!errors && errors.map((error, index) => (
        <ErrorMessageElement key={index}>{error.detail}</ErrorMessageElement>
      ))}
    </>
  );
}
