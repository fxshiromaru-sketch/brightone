import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  console.log("Middleware:", request.nextUrl.pathname);

  return await updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*"],
};

