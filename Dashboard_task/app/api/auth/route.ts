import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return Response.json({ user: null });
  }

  return Response.json({ user: { email: "admin@example.com" } });
}
