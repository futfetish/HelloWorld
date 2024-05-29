import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export const buildOutput = (options: BuildOptions): Configuration["output"] => {
  const { paths } = options;
  return {
    filename: "[name].[contenthash].js",
    path: paths.output,
    clean: true,
  };
};
