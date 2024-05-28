const path = require("path");

module.exports = (env) => {
  const mode = env.mode ?? 'development'
  return {
    mode : mode ,
    entry: path.resolve(__dirname, "src", "index.ts"),
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  };
};
