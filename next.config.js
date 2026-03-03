/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // make sure Next looks for pages under src/pages and handles tsx/tsx
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    LEMON_SQUEEZY_API_KEY: process.env.LEMON_SQUEEZY_API_KEY
  }
};

module.exports = nextConfig;
