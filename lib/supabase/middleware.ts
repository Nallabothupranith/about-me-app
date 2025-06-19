import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { hasEnvVars } from "../utils";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // If the env vars are not set, skip middleware check. You can remove this once you setup the project.
  if (!hasEnvVars) {
    return supabaseResponse;
  }

  // Only protect POST, PUT, DELETE methods on /api/blogs
  const isBlogApi = request.nextUrl.pathname === "/api/blogs";
  const isProtectedMethod = ["POST", "PUT", "DELETE"].includes(request.method);

  // Protect /articles/create for authenticated users only
  const isArticlesCreate = request.nextUrl.pathname === "/articles/create";

  if ((isBlogApi && isProtectedMethod) || isArticlesCreate) {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            supabaseResponse = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    // Do not run code between createServerClient and
    // supabase.auth.getUser().
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      // no user, redirect to /auth/login, after login go to /articles
      const url = request.nextUrl.clone();
      url.pathname = "/auth/login";
      url.search = "?redirect=/articles";
      return NextResponse.redirect(url);
    }
  }

  // All other routes and methods are public
  return supabaseResponse;
}
