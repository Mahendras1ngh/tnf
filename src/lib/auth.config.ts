import type { NextAuthConfig } from 'next-auth';

// Edge-compatible auth config (no Prisma, no bcryptjs)
// This is used by middleware for route protection
export const authConfig: NextAuthConfig = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  providers: [], // Providers are added in auth.ts
  callbacks: {
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = request.nextUrl.pathname.startsWith('/admin');
      const isOnLogin = request.nextUrl.pathname === '/admin/login';

      if (isOnAdmin) {
        if (isOnLogin) {
          if (isLoggedIn) {
            return Response.redirect(new URL('/admin/dashboard', request.nextUrl));
          }
          return true;
        }
        return isLoggedIn;
      }

      return true;
    },
  },
  trustHost: true,
};
