import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import "webpack-dev-server";

module.exports = (env: any) => {
  const mode = env.mode ?? "development";
  const config: webpack.Configuration = {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      static: "./dist",
      port : env.port ?? 3000,
    },
    optimization: {
      runtimeChunk: 'single',
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "document.html"),
      }),
    ],
    resolve : {
      extensions : ['.ts' , '.tsx' , '.js']
    }
  };
  return config;
};
