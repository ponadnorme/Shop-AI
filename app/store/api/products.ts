export const getProducts = async () => {
  const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/summary/products`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}
