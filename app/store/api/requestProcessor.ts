// @ts-ignore
export const fetcher = (...args) => fetch(...args).then(response => {
  if (response.status === 204) {
    return null;
  }
  return response.json();
});
