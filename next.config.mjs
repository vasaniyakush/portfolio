/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
      return [
        {
          source: '/meet',
          destination: 'https://meet.google.com/bqh-ridw-qpg', 
          permanent: true, // 308 Permanent Redirect
        },
      ];
    },
};

export default nextConfig;
