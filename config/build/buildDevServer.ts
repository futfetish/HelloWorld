import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export const buildDevSever = (options : BuildOptions) : DevServerConfiguration => {
    const {mode , port} = options
    const isDev = mode == 'development'
    return isDev
    ? {
        static: "./dist",
        port: port,
      }
    : undefined
}