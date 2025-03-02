/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false, // Disable strict mode for debugging
  // experimental: {
  //   serverActions: true, // Ensure server actions work correctly
  // },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "randomuser.me",
          },
        ],
      },
};

export default nextConfig;
