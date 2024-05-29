import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildDevSever } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { buildOutput } from "./buildOutput";

export const buildWebPack = (options: BuildOptions): Configuration => {
  const { mode, paths, port } = options;
  const isDev = mode == "development";
  return {
    mode: mode,
    entry: paths.entry,
    devtool: isDev ? "inline-source-map" : undefined,
    output: buildOutput(options),
    devServer: buildDevSever(options),
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(options),
    resolve: buildResolve(options),
  };
};
