const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com", "toppng.com"],
  },
  webpack: (config, { isServer }) => {
    // Add rule for handling PDF files
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files", // Adjust this as per your project structure
            outputPath: `${isServer ? "../" : ""}static/files/`, // Adjust this as per your project structure
            name: "[name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
