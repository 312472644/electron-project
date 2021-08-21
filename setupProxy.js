const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use("/music", createProxyMiddleware({
    target: "https://music.163.com/#/",
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/music": ""
    }
  }));
};