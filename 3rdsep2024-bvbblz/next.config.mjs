const isProd = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: !isProd,  // Disable Strict Mode in production to avoid extra checks

  // Enable source maps in production if necessary, disable otherwise
  productionBrowserSourceMaps: !isProd,

  // Custom webpack configuration
  webpack(config, { dev }) {
    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Enable source maps in development for better debugging
    if (dev) {
      config.devtool = 'eval-source-map';  // Faster source maps in development
    } else {
      config.devtool = false;  // Disable source maps in production
    }

    return config;
  },

  // Custom headers for better caching of static assets
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: isProd
              ? "public, max-age=31536000, immutable"  // Cache assets in production
              : "no-cache, no-store, must-revalidate",  // Disable caching in development
          },
        ],
      },
    ];
  },
};
