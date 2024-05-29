import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const cssLoader = {
    test: /\.css$/i,
    exclude: /\.module\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
  };

  const cssModuleLoader = {
    test: /\.module\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]__[hash:base64:5]",
          },
        },
      },
    ],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  };

  const scssModuleLoader = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            localIdentName: "[name]__[local]__[hash:base64:5]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const tsxLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [cssLoader, cssModuleLoader, scssLoader, scssModuleLoader, tsxLoader];
};
