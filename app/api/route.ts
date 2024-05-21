export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({data: {message: 'Jesteśmy online.'}});
}
