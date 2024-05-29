import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import { BuildMode } from "config/build/types";
import { buildWebPack } from "./config/build/buildWebPack";

type WebPackEnv = {
  mode: BuildMode;
  port: number;
};

module.exports = (env: WebPackEnv) => {
  const mode = env.mode ?? "development";

  const isDev = env.mode == "development";

  const config: webpack.Configuration = buildWebPack({
    paths: {
      html: path.resolve(__dirname, "document.html"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
      output: path.resolve(__dirname, "dist"),
      src: path.resolve(__dirname, "src"),
    },
    port: env.port ?? 3000,
    mode,
  });

  return config;
};
