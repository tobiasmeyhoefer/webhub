import { type NextRequest } from "next/server"
import { NextResponse } from 'next/server';
import { updateSession } from "@/utils/supabase/middleware"
import { createClient } from "./utils/supabase/server"
import { redirect } from "next/navigation"

export async function middleware(request: NextRequest) {
  const supabase = createClient()
  const { data } = await supabase.auth.getUser()

  if(data.user && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (!data.user && request.nextUrl.pathname !== "/login" && request.nextUrl.pathname !== "/auth/callback") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
