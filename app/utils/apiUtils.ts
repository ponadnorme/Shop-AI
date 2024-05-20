import {cookies} from 'next/headers';

export function extractHeadersFromCookies(): Record<string, string> {
  const cookieStore = cookies();
  const headers: Record<string, string> = {};

  const token = cookieStore.get('token');
  if (token) {
    headers['X-AUTH-TOKEN'] = token.value;
  }

  return headers;
}

export function constructRequestUrl(pathOnly: string, searchParams?: string | undefined): string {
  return `${process.env.NEXT_API_URL}${pathOnly}${searchParams !== undefined ? '?' + searchParams : ''}`;
}

export async function getRequest(relativeUrl: string) {
  const headers = extractHeadersFromCookies();
  return await fetch(constructRequestUrl(relativeUrl), {
    headers,
  });
}

export async function handleResponse(response: Response): Promise<{data: any, statusCode: number}> {
  if (response.status === 204) {
    return {
      data: null,
      statusCode: response.status,
    };
  }

  try {
    const data = await response.json();
    return {
      data,
      statusCode: response.status,
    };
  } catch (error) {
    return handleErrorResponse('Wystąpił problem podczas pobierania danych.');
  }
}

export function handleErrorResponse(errorMessage: string, status: number = 500) {
  return {
    data: {
      errors: {
        detail: errorMessage,
        title: errorMessage
      }
    },
    statusCode: status,
  };
}
