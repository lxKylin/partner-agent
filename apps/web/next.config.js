/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@repo/ui'] // 开启共享包转译
};

export default nextConfig;
