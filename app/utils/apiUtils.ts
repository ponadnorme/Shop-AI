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
