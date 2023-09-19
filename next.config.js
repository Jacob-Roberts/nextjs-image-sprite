/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/sprite.:hash.svg",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
