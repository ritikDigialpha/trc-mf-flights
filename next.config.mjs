import NextFederationPlugin from "@module-federation/nextjs-mf";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      host: `host@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
    };
    const federatedConfig = {
      name: "flights",
      remotes: remotes,
      shared: {},
      filename: "static/chunks/remoteEntry.js",
    };
    config.plugins.push(
      new NextFederationPlugin(federatedConfig)
      // new FederatedTypesPlugin({ federationConfig })
    );
    return config;
  },
};
export default nextConfig;
