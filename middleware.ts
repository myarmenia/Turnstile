import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["am", "en"],

    defaultLocale: "am",
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(am|en)/:path*']
  };
  
  