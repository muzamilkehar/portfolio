/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote hosts here if you ever host images off-site (e.g. Cloudinary).
    remotePatterns: [
      {
      protocol: "https",
      hostname: "res.cloudinary.com"
      }
    ],
  },
};

export default nextConfig;
