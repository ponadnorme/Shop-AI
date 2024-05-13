import {
  constructRequestUrl,
  extractHeadersFromCookies
} from '@/app/utils/apiUtils';

export const dynamic = 'force-dynamic'

function getPathOnly(url: URL): string {
  return url.pathname.replace(/^\/api/, '');
}

function formatCookie(name: string, value: string, daysValid: number = 30): string {
  const maxAge = daysValid * 24 * 60 * 60; // 30 days in seconds
  return `${name}=${value}; Max-Age=${maxAge}; Path=/; HttpOnly; Secure`;
}

async function handleResponse(response: Response): Promise<Response> {
  if (response.status === 204) {
    return new Response(null, { status: 204 });
  }

  const authToken = response.headers.get('X-AUTH-TOKEN');

  let formattedCookie = [];

  if (!!authToken) {
    formattedCookie.push(formatCookie('token', authToken));
  }
  if (authToken === '') {
    formattedCookie.push(formatCookie('token', '', 0));
  }

  try {
    const data = await response.json();
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (formattedCookie.length) {
      headers['Set-Cookie'] = formattedCookie.join(',');
    }
    return new Response(JSON.stringify(data), {
      headers: headers,
      status: response.status,
    });
  } catch (error) {
    return handleErrorResponse('Wystąpił problem podczas pobierania danych.');
  }
}

function handleErrorResponse(errorMessage: string, status: number = 500) {
  return new Response(JSON.stringify({
    errors: {
      detail: errorMessage,
      title: errorMessage
    }
  }), {status});
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pathOnly = getPathOnly(url);
  const searchParams = url.searchParams.toString();

  const headers = extractHeadersFromCookies();
  const response = await fetch(constructRequestUrl(pathOnly, searchParams), {
    headers,
  });
  return handleResponse(response);
}
