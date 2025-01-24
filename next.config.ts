import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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