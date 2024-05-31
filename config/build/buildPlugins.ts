import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export const buildPlugins = (
  options: BuildOptions
): Configuration["plugins"] => {
  const { paths } = options;
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ];
};
