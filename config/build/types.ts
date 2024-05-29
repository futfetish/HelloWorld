export interface BuildPaths {
  html: string;
  entry: string;
  output: string;
  src: string;
}

export type BuildMode = "development" | "production";

export interface BuildOptions {
  paths: BuildPaths;
  mode: BuildMode;
  port: number;
}
