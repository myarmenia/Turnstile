import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/',
            destination: '/am', 
            permanent: true, 
        },
    ],
    reactStrictMode: true,

};

export default withNextIntl(nextConfig);