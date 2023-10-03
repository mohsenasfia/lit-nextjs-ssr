const withLitSSR = require("@lit-labs/nextjs")();

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withLitSSR(nextConfig);
