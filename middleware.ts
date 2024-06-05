import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protectedRoute = createRouteMatcher([
  '/',
  '/credits',
  '/meeting(.*)',
  '/profile',
]);

export default clerkMiddleware((auth, req) => {
  const { sessionClaims } = auth();
  const userType = (sessionClaims?.userType as { userType?: string })?.userType;
  if (protectedRoute(req)) {auth().protect()};

});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

