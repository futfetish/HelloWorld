import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";

export const buildResolve = (options: BuildOptions): ResolveOptions => {
  const { paths } = options;
  return {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": paths.src,
    },
  };
};
