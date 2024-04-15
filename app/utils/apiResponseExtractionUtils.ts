export const extractErrorMessages = ({errorResponse}: {
  errorResponse: any,
}): string[] => {
  const errorMessages: Array<string> = [];

  if (!!errorResponse) {
    errorResponse.forEach((errorElement: any) => {
      errorMessages.push(errorElement.detail);
    });
  }

  return errorMessages;
}
