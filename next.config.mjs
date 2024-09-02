/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "googleusercontent.com",
        pathname:
          "/a/ACg8ocIBovoqie1BIGLJ07y2WpSAhLCLVli7-AzSKecWveyjTKc3tgo=s96-c",
        port: "",
      },
    ],
  },
};

export default nextConfig;
