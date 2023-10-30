/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //Image is nothing but Object and we cannot use it as an array. and thus we are doing this, we created the array of domains
    domains: ["avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig
