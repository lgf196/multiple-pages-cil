/**
 * @author lgf
 * @description 配置文件
 */
const path = require("path");
module.exports = {
  dev: {
    publicPath: "/",
    host: "localhost", //开发的域名
    port: 8089, //端口号
    autoOpenBrowser: true, //是否自动打开浏览器
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "/api" },
      },
    },
  },
  build: {
    publicPath: "/",
    path: path.resolve(__dirname, "../dist"),
  },
};
